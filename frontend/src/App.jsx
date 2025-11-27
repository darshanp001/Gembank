import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AuthPage from './pages/AuthPage';
import LOIPage from './pages/LOIPage';
import ScrollManager from './components/common/ScrollManager';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import HowItWorks from './pages/HowItWorks';
import LOISuccessPage from './pages/LOISuccessPage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <Router>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/why" element={<HowItWorks />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/loi" element={<LOIPage />} />
        <Route path="/loi/success" element={<LOISuccessPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<div>Privacy Policy (Coming Soon)</div>} />
        <Route path="/terms" element={<div>Terms of Service (Coming Soon)</div>} />
        
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Simple 404 Component
const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gembank-charcoal to-gembank-navy flex items-center justify-center p-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-gembank-gold mb-4">404</div>
        <h1 className="text-4xl font-display font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gembank-gray-300 mb-8">The page you're looking for doesn't exist.</p>
        <a 
          href="/"
          className="inline-block px-8 py-3 bg-gembank-gold hover:bg-gembank-gold-dark text-gembank-charcoal font-semibold rounded-lg transition-all shadow-gold"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default App;