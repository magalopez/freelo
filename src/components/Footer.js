import React from "react";
import logoIntercorpWhite from "../assets/img/logo-intercorp-blanco.png";

export default function() {
  return (
    <>
      <footer class="pt-5">
        <div class="pt-5 py-md-4 pt-md-5  container">
          <div class="row">
            <div class="col-12 col-md-8">
              <div class="row">
                <div class="col-6 col-md">
                  <h5 class="text-white">Crece</h5>
                </div>
                <div class="col-6 col-md">
                  <h5 class="text-white">Entrénate</h5>
                  <ul class="list-unstyled text-small">
                    <li>
                      <a class=" text-gray" href="#">
                        Lorem
                      </a>
                    </li>
                    <li>
                      <a class=" text-gray" href="#">
                        Lorem Ipsum
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-md">
                  <h5 class="text-white">Entérate</h5>
                  <ul class="list-unstyled text-small">
                    <li>
                      <a class=" text-gray" href="#">
                        Lorem
                      </a>
                    </li>
                    <li>
                      <a class=" text-gray" href="#">
                        Lorem Ipsum
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-md">
                  <h5 class="text-white">Benefíciate</h5>
                  <ul class="list-unstyled text-small">
                    <li>
                      <a class=" text-gray" href="#">
                        Lorem
                      </a>
                    </li>
                    <li>
                      <a class=" text-gray" href="#">
                        Lorem Ipsum
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-md footer__logo d-flex">
              <img
                class="mb-2"
                src={logoIntercorpWhite}
                alt=""
                style={{ height: "1.8rem" }}
              />
            </div>
          </div>
          <div class="pt-5">
            <hr class="border-top-white" />
            <p class="text-gray m-0 p-2 text-center">
              2020 Somos Intercorp. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
