import React from "react";
import logoIntercorpWhite from "../assets/img/logo-intercorp-blanco.png";

export default function() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={logoIntercorpWhite} alt="Logo white Intercorp" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inicio <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown active">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  id="entrenateBar"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Entrénate
                </a>
                <div className="dropdown-menu" aria-labelledby="entrenateBar">
                  <a className="dropdown-item" href="#">
                    Toolkits
                  </a>
                  <a className="dropdown-item" href="#">
                    ¿Qué leen nuestros líderes?
                  </a>
                  <a className="dropdown-item" href="#">
                    Videos
                  </a>
                  <a className="dropdown-item" href="#">
                    Artículos
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Ver más
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="beneficiateBar"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Beneficiate
                </a>
                <div className="dropdown-menu" aria-labelledby="beneficiateBar">
                  <a className="dropdown-item" href="#">
                    Promociones
                  </a>
                  <a className="dropdown-item" href="#">
                    Categorías
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Ver más
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  id="enterateBar"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Entérate
                </a>
                <div className="dropdown-menu" aria-labelledby="enterateBar">
                  <a className="dropdown-item" href="#">
                    Novedades
                  </a>
                  <a className="dropdown-item" href="#">
                    Nuestros líderes
                  </a>
                  <a className="dropdown-item" href="#">
                    Orgullo
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Ver más
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  id="creceBar"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Crece
                </a>
                <div className="dropdown-menu" aria-labelledby="creceBar">
                  <a className="dropdown-item" href="#">
                    Colaboradores
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Soy empresa
                  </a>
                </div>
              </li>
              {/* <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li> */}
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
          </div>
        </nav>
      </header>
    </>
  );
}
