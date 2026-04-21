import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <NavLink to="/">
          <img src="/images/Logo-1.svg" alt="logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/insights">Insights</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
