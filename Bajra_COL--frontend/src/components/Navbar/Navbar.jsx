import { Link, useLocation } from "react-router-dom";
import lglogo from "../../assets/Logo/bajra_col_lg-logo.png";
import smlogo from "../../assets/Logo/bajra_col--smlogo.png";
import { DarkMode } from "../import";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/what-we-do", name: "WHAT WE DO" },
  { path: "/portfolio", name: "OUR WORK" },
  { path: "/jobs", name: "Careers" },
  { path: "/trainee", name: "TRAINEESHIP" },
];

const Navbar = () => {
  const location = useLocation();
  const navbarToggle = useRef(null);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  const isActive = (path) => {
    return location.pathname === path ? 'fw-bold text-light' : 'text-light';
  };

  const handleNavLinkClick = () => {
    if (navbarToggle.current && window.getComputedStyle(navbarToggle.current).display !== 'none') {
      navbarToggle.current.click(); // Close navbar if open
    }
  };

  const handleNavbarBrandClick = () => {
    if (navbarToggle.current && window.getComputedStyle(navbarToggle.current).display !== 'none') {
      navbarToggle.current.click(); // Close navbar if open
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: '#0000FF 0%' }}>
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleNavbarBrandClick}>
          {isWideScreen ? (
            <img src={lglogo} alt="Logo" width="120" height="60" className="d-inline-block align-text-top" />
          ) : (
            <img src={smlogo} alt="Logo" width="85" height="80" className="d-inline-block align-text-top " />
          )}
        </Link>
        <button ref={navbarToggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-uppercase" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item me-1">
                <Link className={`nav-link ${isActive(link.path)}`} to={link.path} onClick={handleNavLinkClick}>
                  {link.name}
                </Link>
              </li>
            ))}

            {isWideScreen ? (
              <li className="nav-item border border-light border-2 rounded me-1">
                <Link className={`nav-link ${isActive('/contactus')}`} to="/contactus" onClick={handleNavLinkClick}>
                  Contact Us
                </Link>
              </li>
            ) : (
              <li className="nav-item border border-light border-2 rounded me-1 w-25 p-1">
                <Link className={`nav-link ${isActive('/contactus')}`} to="/contactus" onClick={handleNavLinkClick}>
                  Contact Us
                </Link>
              </li>
            )}
            <DarkMode />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
