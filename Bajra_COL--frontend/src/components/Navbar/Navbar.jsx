import { Link } from "react-router-dom";
import logo from '../../assets/bajra_col--logo.png'
import { DarkMode } from "../import";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'var(--main-color)'}}>
      <div className="container">
        <Link className="navbar-brand" to={`/`}>
          <img src={logo} alt="Logo" width="60" height="54" className="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-uppercas  " id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={`/`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/about`}>About</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to={`/what-we-do`}>WHAT WE DO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/portfolio`}>OUR WORK</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/jobs`}>Careers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/trainee`}>TRAINEESHIP</Link>
            </li>
            <li className="nav-item border border-light rounded">
              <Link className="nav-link" to={`/`}>Contact Us</Link>
            </li>
            <DarkMode />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
