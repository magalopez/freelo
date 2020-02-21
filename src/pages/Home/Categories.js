import React from "react";
import mainImg from "../../assets/img/15291.jpg";
import comp1 from "../../assets/img/icons/comp_1.png";
import comp2 from "../../assets/img/icons/comp_2.png";
import comp3 from "../../assets/img/icons/comp_3.png";
import comp4 from "../../assets/img/icons/comp_4.png";
import comp5 from "../../assets/img/icons/comp_5.png";

export default function() {
  return (
    <>
      <div className="container mw-100 banner-container">
        <div className="row">
          <div className="col-12 col-md-6 banner-text">
            <div className="text-content my-3">
              <h1>Entrénate</h1>
              <hr />
              <h4>¿qué competencia D3EC quieres reforzar hoy?</h4>
            </div>
            <div className="row categories-content">
              <div className="card col-sm-6 col-md-2">
                <div className="card-body">
                  <img class="comp-icon" src={comp1} alt="" />
                  <div className="card-title">
                    Determinación en la ejecución
                  </div>
                </div>
              </div>
              <div className="card col-sm-6 col-md-2">
                <div className="card-body">
                  <img class="comp-icon" src={comp2} alt="" />

                  <div className="card-title">Energización de las personas</div>
                </div>
              </div>
              <div className="card col-sm-6 col-md-2">
                <div className="card-body">
                  <img class="comp-icon" src={comp3} alt="" />

                  <div className="card-title"> Obsesión por el cliente</div>
                </div>
              </div>
              <div className="card col-sm-6 col-md-2">
                <div className="card-body">
                  <img class="comp-icon" src={comp4} alt="" />

                  <div className="card-title"> Mentalidad digital</div>
                </div>
              </div>
              <div className="card col-sm-6 col-md-2">
                <div className="card-body">
                  <img class="comp-icon" src={comp5} alt="" />
                  <div className="card-title">Foco en data</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 banner-img">
            <img class="w-100" src={mainImg} alt="Intercorp Entrénate" />
          </div>
        </div>
      </div>
    </>
  );
}
