import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation links data (without icons)
  const navItems = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'programs', path: '/programs', label: 'Programs' },
    { id: 'services', path: '/services', label: 'Services' },
    { id: 'about', path: '/about', label: 'About' },
    { id: 'contact', path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  // Function to handle scrolling to "Our Featured Programs" section
  const handleGetStartedClick = () => {
    closeMenu();
    // Navigate to /programs and scroll to section after a slight delay
    setTimeout(() => {
      const section = document.getElementById('featured-programs') || 
                     document.querySelector('.section-title');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to ensure page navigation completes
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo - Simple text only */}
        <Link to="/" className="logo" onClick={closeMenu}>
          BROTHKO
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-menu-desktop">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link 
                  to={item.path}
                  className={`nav-link-desktop ${isActive(item.path) ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="nav-text">{item.label}</span>
                  {isActive(item.path) && (
                    <span className="nav-indicator"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* CTA Button - Updated to scroll to featured programs */}
          <Link 
            to="/programs#featured-programs" 
            className="cta-button" 
            onClick={handleGetStartedClick}
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span className={`hamburger-line line-1 ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line line-2 ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line line-3 ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`nav-mobile ${isMenuOpen ? 'active' : ''}`}>
        <div className="nav-mobile-overlay" onClick={toggleMenu}></div>
        <div className="nav-mobile-content">
          <div className="nav-mobile-header">
            {/* <Link to="/" className="logo-mobile" onClick={closeMenu}>
              Brothko
            </Link> */}
            <button className="close-menu-btn" onClick={toggleMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <ul className="nav-menu-mobile">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item-mobile">
                <Link 
                  to={item.path} 
                  className={`nav-link-mobile ${isActive(item.path) ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="nav-text-mobile">{item.label}</span>
                  <span className={`nav-status ${isActive(item.path) ? 'active' : ''}`}>
                    {isActive(item.path) ? 'Active' : ''}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="nav-mobile-cta">
            {/* CTA Button Mobile - Updated to scroll to featured programs */}
            <Link 
              to="/programs#featured-programs" 
              className="cta-button-mobile" 
              onClick={handleGetStartedClick}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;