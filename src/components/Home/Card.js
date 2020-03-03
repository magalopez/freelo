import React from "react";

export default function({ img, author, title }) {
  return (
    <>
      <div className="card" >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{author}</p>
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </>
  );
}
