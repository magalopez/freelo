import React from "react";
import Post from "./Post";
import SeeMore from "./See-more";

export default function() {
  return (
    <>
      <div className="container main-leaders py-5">
        <div className="row main-row">
          <div className="col-12">
            {/* <button className="btn">Regresar</button> */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Inicio</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Líderes</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  CRP
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-12 col-md-8 leaders-recommend">
            <div className="col-12 title-recommend">
              <h1 className="text-center"> Recomendaciones</h1>
              <hr />
            </div>
            <Post />
            <Post />
          </div>
          <SeeMore/>
        </div>
      </div>
    </>
  );
}
