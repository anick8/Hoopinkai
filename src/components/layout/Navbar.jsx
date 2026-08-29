import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/images/shared/logo.png';
import './Navbar.css';
import { SITE_INFO } from '../../data/siteContent';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Support Circles', path: '/' },
    { label: 'School Tours', path: '/schooltours' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Upcoming Events', path: '/upcoming-events' },
    { label: 'Past Events', path: '/past-events' },
    { label: 'Blog', path: SITE_INFO.socials.substack, external: true },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Hoopinkai" className="navbar-logo-img" />
        </Link>

        <button
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) =>
            item.external ? (
              <li key={item.label} className="navbar-item">
                <a href={item.path} target="_blank" rel="noopener noreferrer" className="navbar-link">
                  {item.label}
                </a>
              </li>
            ) : (
              <li key={item.label} className="navbar-item">
                <Link to={item.path} className="navbar-link" onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            )
          )}
          <li className="navbar-item navbar-item-cta">
            <a href={`tel:${SITE_INFO.phone}`} className="navbar-cta">
              {SITE_INFO.phone}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
