import React from 'react';
import mainImg from "../../assets/img/15291.jpg";
import NavBar from "../../components/NavBar";

export default function () {
    return (
        <>
            <div className="container mw-100 banner-container">
                <div className="row banner-row">
                    <div className="col-12 col-md-4 banner-text">
                        <h1 class="montserrat-b">¿Qué leen nuestros líderes?</h1>
                        <div class="banner-leader-info">
                            <h3>Carlos Rodríguez-Pastor</h3>
                            <p>Presidente de Intercorp</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 banner-img">
                        <img src={mainImg} alt="Imagen del líder"/>
                    </div>
                </div>
            </div>
            <NavBar/>
        </>
    )
}