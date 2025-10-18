import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Handle newsletter subscription
      alert('Thank you for subscribing! 🎉');
      setEmail('');
    }
  }; 

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Brothko</h3>
            <p>
              Empowering businesses and individuals with innovative software
              solutions and comprehensive training programs that drive success
              in the digital world. Join thousands who have transformed their careers.
            </p>

            {/* Social Links */}
            <div className="footer-social-links">
              <a
                href="#"
                className="footer-social-link"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="telegram.png"
                  alt="Telegram"
                  className="social-logo"
                />
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="twitterslogo.png"
                  alt="Twitter"
                  className="social-logo"
                />
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="linkedinlogo.png"
                  alt="LinkedIn"
                  className="social-logo"
                />
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="instalogo.png"
                  alt="Instagram"
                  className="social-logo"
                />
              </a>
              <a
                href="#"
                className="footer-social-link"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="githublogo.png"
                  alt="GitHub"
                  className="social-logo"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link to="/programs" className="footer-link">
                  📚 Programs
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  💼 Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  👥 About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  📞 Contact
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Programs */}
          {/* <div className="footer-section">
            <h3>Popular Programs</h3>
            <ul className="footer-links">
              <li>
                <Link to="#" className="footer-link">
                  🚀 Full-Stack Development
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  📱 Mobile Development
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  ☁️ Cloud Computing
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  🎨 UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="#" className="footer-link">
                  📊 Data Science
                </Link>
              </li>
            </ul>
          </div>
           */}
          {/* Contact Info */}
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <ul className="footer-links footer-contact">
              <li>
                <span>📧</span>
                <a href="mailto:hello@brothko.com">brothkoins@gmail.com</a>
              </li>
              <li>
                <span>📞</span>
                <a >+91 8319428709</a>
              </li>
              <li>
                <span>📞</span>
                <a >+91 8418018966</a>
              </li>
              <li>
                <span>📞</span>
                <a >+91 9696345338</a>
              </li>
            </ul>
          </ div>
          <div className="footer-section">
            <h3>Visit Us</h3>
            <ul className="footer-links footer-contact"></ul>
            <ul>
              <li>
                <span>📍</span>
                <span>BTM Layout, Bengaluru, Karnataka<br />Dombivli East, Mumbai <br />IT Park, Hyderabad</span>
              </li>
              <li>
                <span>🕒</span>
                <span>Mon-Fri: 9AM-6PM EST<br />Sat-Sun: 10AM-4PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section
        <div className="footer-section footer-newsletter">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="footer-newsletter-title">Stay Updated</h4>
                <p className="text-sm text-gray-300 mb-0">
                  Get the latest updates on new programs, industry insights, 
                  and exclusive offers delivered to your inbox.
                </p>
              </div>
              
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
         */}
        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Brothko. All rights reserved. |
            <Link to="/privacy" className="footer-link ml-2">Privacy Policy</Link> |
            <Link to="/terms" className="footer-link ml-2">Terms of Service</Link>
          </p>
          {/* <p className="mt-2 text-xs">
            Designed with ❤️ for innovation | Built with React.js
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;