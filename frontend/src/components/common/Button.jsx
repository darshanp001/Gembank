import { clsx } from 'clsx';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  type = 'button',
  onClick,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gembank-gold/50';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#C9A73A] via-[#E3C35F] to-[#B88F21] text-white shadow-md ring-1 ring-inset ring-black/5 hover:shadow-lg hover:brightness-105 transform hover:-translate-y-0.5',
    secondary: 'bg-gembank-purple text-white hover:bg-gembank-purple/90 focus:ring-gembank-purple',
    outline: 'bg-transparent border border-gembank-gray-200 text-gembank-charcoal hover:bg-gembank-gold/10 hover:border-gembank-gold',
    ghost: 'bg-transparent text-gembank-charcoal hover:bg-gembank-gold/10 hover:text-gembank-gold',
    danger: 'bg-gembank-red text-white hover:bg-gembank-red/90 focus:ring-gembank-red'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && disabledStyles,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;