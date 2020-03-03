import React from "react";
import mainImg from "../../assets/img/15291.jpg";

export default function() {
  return (
    <>
      <div className="banner-background w-100">
        <div className="banner-color"></div>
      </div>
      <div className="container banner-container">
        <div className="row banner-row">
          <div className="col-12 col-md-4 banner-text">
            <h1 className="montserrat-b">¿Qué leen nuestros líderes?</h1>
            <div className="banner-leader-info">
              <h3>Carlos Rodríguez-Pastor</h3>
              <p>Presidente de Intercorp</p>
            </div>
          </div>
          <div className="col-12 col-md-8 banner-img">
            <img src={mainImg} alt="Imagen del líder" />
          </div>
        </div>
      </div>
    </>
  );
}
