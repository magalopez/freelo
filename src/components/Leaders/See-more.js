import React from "react";
import video from "../../assets/img/video.png";

export default function() {
  return (
    <>
      <div className="col-12 col-md-4 leaders-more">
        <div className="container-more my-5  p-3">
          <div className="box-recommend row my-5">
            <div className="col-7 box-r-img">
              <img src={video} alt="" />
            </div>
            <div className="col-5 p-2">
              <h3>Carlos Montalván</h3>
              <p>CEO UCIC</p>
            </div>
          </div>
          <div className="box-recommend row my-5">
            <div className="col-7 box-r-img">
              <img src={video} alt="" />
            </div>
            <div className="col-5 p-2">
              <h3>Carlos Montalván</h3>
              <p>CEO UCIC</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
