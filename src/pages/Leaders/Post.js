import React from "react";
import video from "../../assets/img/video.png";

export default function() {
  return (
    <div className="leader-post row p-3 mx-0 my-5">
      <div className="col-sm-6 col-12 post-img d-flex">
        <img src={video} alt="" />
      </div>
      <div className="col-sm-6 col-12 p-3 post-content">
        <div className="post-text">
          <h3>The fearless organization</h3>
          <div className="py-3">
            “...offers practical guidance for teams and organizations who are
            serious about success in the modern economy. With so much riding on
            innovation, creativity, and spark, it is essential to attract and
            retain quality talent—but what good does this talent do if no one is
            able to speak their mind?”
          </div>
        </div>
        
      </div>
    </div>
  );
}
