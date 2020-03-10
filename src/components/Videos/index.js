import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../_generic/Header";
import Footer from "../_generic/Footer";

import videosData from "../../assets/data/videos.json";

export default function(props) {
  let { slug } = useParams();
  const urlParam = props.match.params.slug;
  const data = videosData.data;

  console.log(urlParam);

  const videoInfo = videosData["data"].filter(el => {
    return el.id == urlParam;
  });
  console.log(videoInfo);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [urlParam]);

  return (
    <>
      {videoInfo.map((el, i) => (
        <div className="page-videos" key={i}>
          <Header />

          <iframe
            src={`https://player.vimeo.com/video/${el.id}`}
            width="100%"
            height="{video_height}"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>

          {/* <Banner
            name={el.name}
            lastname={el.lastname}
            position={el.position}
            leaderImg={require(`../../assets/img/leaders/leaders_${el.id}.jpg`)}
          /> */}
          {/* <NavBar /> */}
          {/* <Content dataLeader={el} allLeaders={data} /> */}
          <Footer />
        </div>
      ))}
    </>
  );
}
