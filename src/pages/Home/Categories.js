import React from "react";
import mainImg from "../../assets/img/15291.jpg";
import comp1 from "../../assets/img/icons/comp_1.png";
import comp2 from "../../assets/img/icons/comp_2.png";
import comp3 from "../../assets/img/icons/comp_3.png";
import comp4 from "../../assets/img/icons/comp_4.png";
import comp5 from "../../assets/img/icons/comp_5.png";

export default function() {
  const competencies = [
    {
      img: comp1,
      name: "Determinación en la ejecución"
    },
    {
      img: comp2,
      name: "Energización de las personas"
    },
    {
      img: comp3,
      name: "Obsesión por el cliente"
    },
    {
      img: comp4,
      name: "Mentalidad digital"
    },
    {
      img: comp5,
      name: "Foco en data"
    }
  ];
  return (
    <>
    <div className="banner-background w-100">
      <div className="banner-color">
      </div>
    </div>
      <div className="container banner-container">
        <div className="row main-row">
          <div className="col-12 col-md-6 banner-text">
            <div className="text-content my-3">
              <h1 className="montserrat-b">Entrénate</h1>
              <hr />
              <h4 className="montserrat-rb">
                ¿qué competencia D3EC quieres reforzar hoy?
              </h4>
            </div>
            <div className="row categories-content">
              {competencies &&
                competencies.map((el, i) => (
                  <div className="card-container col-6 col-md-2" key={i}>
                    <div className="card ">
                      <div className="card-body">
                        <img className="comp-icon" src={el.img} alt="" />
                        <div className="card-title montserrat-b">{el.name}</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-12 col-md-6 banner-img">
            <img className="w-100" src={mainImg} alt="Intercorp Entrénate" />
          </div>
        </div>
      </div>
    </>
  );
}
