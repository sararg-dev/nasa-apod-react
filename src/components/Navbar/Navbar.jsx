import { NavLink } from "react-router-dom";
import '@fontsource/audiowide';
import './navbar.css';
import logo from '../../assets/nasa-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg pt-3 ps-2 pe-2 my-navbar">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="logo"
            width="40"
            className="me-2"
          ></img>
          <p className="fs-6 text-wrap mb-0 d-none d-lg-block brand-name">Astronomy Picture of the Day
          </p>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="bi bi-house-door-fill icono"></i>
                Home
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="bi bi-heart-fill icono"></i>
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
