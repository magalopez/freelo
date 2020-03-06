import React from "react";

export default function({ el, leader }) {
  return (
    <div className="leader-post row p-3 mx-0 my-5">
      <div className="col-sm-6 col-12 post-img d-flex">
        <img src={require(`../../assets/img/leaders/leaders_${leader.id}_book${el.id}.jpg`)} alt="" />
      </div>
      <div className="col-sm-6 col-12 p-3 post-content">
        <div className="post-text">
          <h3>{el.title}</h3>
          <p>{el.author}</p>
          <div className="py-3">{el.content}</div>
        </div>
      </div>
    </div>
  );
}
