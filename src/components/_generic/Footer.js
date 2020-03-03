import React from "react";
import logoIntercorpWhite from "../../assets/img/logo-intercorp-blanco.png";

export default function() {
  return (
    <>
      <footer className="pt-5">
        <div className="pt-5 py-md-4 pt-md-5  container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="row">
                <div className="col-6 col-md">
                  <h5 className="text-white">Crece</h5>
                </div>
                <div className="col-6 col-md">
                  <h5 className="text-white">Entrénate</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <a className=" text-gray" href="#">
                        Lorem
                      </a>
                    </li>
                    <li>
                      <a className=" text-gray" href="#">
                        Lorem Ipsum
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5 className="text-white">Entérate</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <a className=" text-gray" href="#">
                        Lorem
                      </a>
                    </li>
                    <li>
                      <a className=" text-gray" href="#">
                        Lorem Ipsum
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md">
                  <h5 className="text-white">Benefíciate</h5>
                  <ul className="list-unstyled text-small">
                    <li>
                      <a className=" text-gray" href="#">
                        Lorem
                      </a>
                    </li>
                    <li>
                      <a className=" text-gray" href="#">
                        Lorem Ipsum
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md footer__logo d-flex">
              <img
                className="mb-2"
                src={logoIntercorpWhite}
                alt=""
                style={{ height: "1.8rem" }}
              />
            </div>
          </div>
          <div className="pt-5">
            <hr className="border-top-white" />
            <p className="text-gray m-0 p-2 text-center">
              2020 Somos Intercorp. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
