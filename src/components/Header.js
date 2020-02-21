import React from "react";
import logoIntercorpWhite from "../assets/img/logo-intercorp-blanco.png";

export default function() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src={logoIntercorpWhite} alt="Logo white Intercorp" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Inicio <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item dropdown active">
                <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  id="entrenateBar"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Entrénate
                </a>
                <div class="dropdown-menu" aria-labelledby="entrenateBar">
                  <a class="dropdown-item" href="#">
                    Toolkits
                  </a>
                  <a class="dropdown-item" href="#">
                    ¿Qué leen nuestros líderes?
                  </a>
                  <a class="dropdown-item" href="#">
                    Videos
                  </a>
                  <a class="dropdown-item" href="#">
                    Artículos
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Ver más
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="beneficiateBar"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Beneficiate
                </a>
                <div class="dropdown-menu" aria-labelledby="beneficiateBar">
                  <a class="dropdown-item" href="#">
                    Promociones
                  </a>
                  <a class="dropdown-item" href="#">
                    Categorías
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Ver más
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  id="enterateBar"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Entérate
                </a>
                <div class="dropdown-menu" aria-labelledby="enterateBar">
                  <a class="dropdown-item" href="#">
                    Novedades
                  </a>
                  <a class="dropdown-item" href="#">
                    Nuestros líderes
                  </a>
                  <a class="dropdown-item" href="#">
                    Orgullo
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Ver más
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  id="creceBar"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Crece
                </a>
                <div class="dropdown-menu" aria-labelledby="creceBar">
                  <a class="dropdown-item" href="#">
                    Colaboradores
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Soy empresa
                  </a>
                </div>
              </li>
              {/* <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li> */}
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
          </div>
        </nav>
      </header>
    </>
  );
}
