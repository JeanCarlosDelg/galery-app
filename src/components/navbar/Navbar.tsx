import { Link, NavLink } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {

  const verifyPassword = localStorage.getItem('password')

  return (
    <div className="navbar__container">
      <h1 className="title">
        <Link className="title__link" to="/">
          <span className="title__span">❤</span> Galeria{" "}
          <span className="title__span">❤</span>
        </Link>
      </h1>
      {
        verifyPassword
        ? <nav className="navbar__ul">
            <div className="navbar__li">
              <NavLink className="navbar__link" to="/fotos"> Fotos </NavLink>
            </div>
            <div className="navbar__li">
              <NavLink className="navbar__link" to="/videos"> Videos </NavLink>
            </div>
          </nav>
        : <span className="navBar__span"> Por favor ingresa tu contraseña </span>
      }
    </div>
  );
};

export default Navbar;
