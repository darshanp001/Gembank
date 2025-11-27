import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth.service';
import { analyticsService } from '../services/analytics.service';

// ============================================
// hooks/useAuth.js
// ============================================
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('gembank_token');
    if (token) {
      try {
        const userData = await authService.getCurrentUser();
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem('gembank_token');
        setIsAuthenticated(false);
      }
    }
    setIsLoading(false);
  };

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      setUser(response.data.user);
      setIsAuthenticated(true);
      analyticsService.trackEvent('login_success');
      return response;
    } catch (error) {
      analyticsService.trackError('login_failed', error.message);
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
    analyticsService.trackEvent('logout');
    navigate('/login');
  };

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      setUser(response.data.user);
      setIsAuthenticated(true);
      analyticsService.trackEvent('registration_success');
      return response;
    } catch (error) {
      analyticsService.trackError('registration_failed', error.message);
      throw error;
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    register
  };
};

// ============================================
// hooks/useForm.js
// ============================================
export const useForm = (initialValues, onSubmit, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    // Validate on blur if validate function provided
    if (validate) {
      const fieldError = validate({ [name]: values[name] });
      if (fieldError[name]) {
        setErrors(prev => ({ ...prev, ...fieldError }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    // Validate all fields
    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
      
      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues,
    setErrors
  };
};

// ============================================
// hooks/useAnalytics.js
// ============================================
export const useAnalytics = () => {
  const trackPageView = useCallback((path) => {
    analyticsService.trackPageView(path);
  }, []);

  const trackEvent = useCallback((eventName, params) => {
    analyticsService.trackEvent(eventName, params);
  }, []);

  const trackButtonClick = useCallback((buttonName, location) => {
    analyticsService.trackButtonClick(buttonName, location);
  }, []);

  const trackFormSubmit = useCallback((formName, success) => {
    analyticsService.trackFormSubmit(formName, success);
  }, []);

  return {
    trackPageView,
    trackEvent,
    trackButtonClick,
    trackFormSubmit
  };
};

// ============================================
// hooks/useDebounce.js
// ============================================
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// ============================================
// hooks/useLocalStorage.js
// ============================================
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

// ============================================
// hooks/useWindowSize.js
// ============================================
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

// ============================================
// hooks/useOnClickOutside.js
// ============================================
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

// ============================================
// hooks/useMediaQuery.js
// ============================================
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    
    // Modern browsers
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      // Fallback for older browsers
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query]);

  return matches;
};

// ============================================
// hooks/useScrollPosition.js
// ============================================
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

// ============================================
// hooks/useIntersectionObserver.js
// ============================================
export const useIntersectionObserver = (elementRef, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, options]);

  return isVisible;
};

// ============================================
// hooks/useCopyToClipboard.js
// ============================================
export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState(null);

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
      return true;
    } catch (error) {
      console.error('Failed to copy:', error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy];
};

// ============================================
// hooks/useToggle.js
// ============================================
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, toggle, setValue];
};

// ============================================
// hooks/usePrevious.js
// ============================================
export const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

// ============================================
// hooks/useTimeout.js
// ============================================
export const useTimeout = (callback, delay) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => callbackRef.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
};

// ============================================
// hooks/useInterval.js
// ============================================
export const useInterval = (callback, delay) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(() => callbackRef.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
};

// ============================================
// Export all hooks
// ============================================
export default {
  useAuth,
  useForm,
  useAnalytics,
  useDebounce,
  useLocalStorage,
  useWindowSize,
  useOnClickOutside,
  useMediaQuery,
  useScrollPosition,
  useIntersectionObserver,
  useCopyToClipboard,
  useToggle,
  usePrevious,
  useTimeout,
  useInterval
};