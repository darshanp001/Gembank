import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { Gem } from 'lucide-react';
import useScrollActivity from '../../hooks/useScrollActivity';

const navLinks = [
  { label: 'How It Works', href: '/why' },
  { label: 'Feature', href: '/features' },
  { label: 'Pilot Program', href: '/loi' }, 
  { label: 'Blog', href: '/blog' },
  { label: 'About us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Logo = () => {
  const location = useLocation();

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
        <Gem className="w-6 h-6 text-white" />
      </div>
      <span className="text-2xl font-display font-bold">
        <span className="text-gembank-gold">GEM</span>
        <span className="text-soft-black">Bank</span>
      </span>
    </Link>
  );
};

const DesktopNav = ({ navLinks, isActive }) => {
  const location = useLocation();

  const handleNavLinkClick = (e, href) => {
    const [path, hash] = href.split('#');
    // If it's an anchor link on the homepage, handle smooth scroll
    if (location.pathname === '/' && path === '/' && hash) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path === location.pathname && hash) { // Handle anchor on other pages
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          onClick={(e) => handleNavLinkClick(e, link.href)}
          className={`text-sm font-medium transition-colors duration-200 ${
            isActive(link.href)
              ? 'text-gembank-gold'
              : 'text-charcoal-gray hover:text-gembank-gold'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

const NavCTA = () => (
  <div className="hidden lg:flex items-center gap-4">
    <Link to="/login">
      <Button
        variant="outline"
        size="sm"
        className="border-light-gray"
      >
        Login
      </Button>
    </Link>
    <Link to="/loi">
      <Button
        variant="primary"
        size="sm"
      >
        Book Pilot
      </Button>
    </Link>
  </div>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MobileMenuButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="lg:hidden text-charcoal-gray p-2"
    aria-label="Toggle menu"
  >
    {isOpen ? <CloseIcon /> : <MenuIcon />}
  </button>
);

const MobileNav = ({ navLinks, isActive, onLinkClick }) => {
  const location = useLocation();

  const handleNavLinkClick = (e, href) => {
    onLinkClick(); // Close mobile menu
    const [path, hash] = href.split('#');

    if (location.pathname === '/' && path === '/' && hash) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path === location.pathname && hash) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="lg:hidden border-t border-light-gray py-4 animate-fade-in">
      <div className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={(e) => handleNavLinkClick(e, link.href)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              isActive(link.href)
                ? 'text-gembank-gold bg-gembank-gold/10 rounded-xl'
                : 'text-charcoal-gray hover:text-gembank-gold hover:bg-gembank-gold/5 rounded-xl'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <div className="border-t border-light-gray pt-4 px-4 flex flex-col gap-3">
          <Link to="/login" onClick={onLinkClick}>
            <Button
              variant="outline"
              size="md"
              className="w-full border-light-gray"
            >
              Login
            </Button>
          </Link>
          <Link to="/loi" onClick={onLinkClick}>
            <Button
              variant="primary"
              size="md"
            >
              Book Pilot Program
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const isScrolled = useScrollActivity(20);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    const [base] = path.split('#');
    return location.pathname === base;
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-soft-white/90 backdrop-blur-lg shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <DesktopNav navLinks={navLinks} isActive={isActive} />
          <NavCTA />
          <MobileMenuButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </div>
        {isMobileMenuOpen && <MobileNav navLinks={navLinks} isActive={isActive} onLinkClick={closeMobileMenu} />}
      </div>
    </nav>
  );
};

export default Navbar;