import React from "react";
import Post from "./Post";
import SeeMore from "./See-more";
import { useRouteMatch, Link } from "react-router-dom";

export default function({ dataLeader, allLeaders }) {
  const posts = dataLeader.posts;
  let match = useRouteMatch();

  return (
    <>
      <div className="container main-leaders py-5">
        <div className="row main-row">
          <div className="col-12">
            {/* <button className="btn">Regresar</button> */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                <Link to="/home">Inicio</Link>

                </li>
                <li className="breadcrumb-item">
                  <a href="#">Líderes</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {dataLeader.name} {dataLeader.lastname}
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-12 col-md-8 leaders-recommend">
            <div className="col-12 title-recommend">
              <h1 className="text-center"> Recomendaciones</h1>
              <hr />
            </div>
            {posts &&
              posts.map((el, i) => (
                <Post key={i} el={el} leader={dataLeader} />
              ))}
          </div>
          <SeeMore allLeaders={allLeaders} current={dataLeader} />
        </div>
      </div>
    </>
  );
}
