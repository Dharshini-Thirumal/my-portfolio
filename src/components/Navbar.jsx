import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          Dharshini Thirumal
        </Link>
      </div>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      <div className="hamburger-icon" onClick={toggleMenu}>
        <Icon name={menuOpen ? 'close' : 'sidebar'} size="large" />
      </div>
    </nav>
  );
}

export default Navbar;
