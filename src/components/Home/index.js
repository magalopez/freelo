import React, { useState, useEffect } from "react";
import Header from "../_generic/Header";
import NavBar from "../_generic/NavBar";
import Footer from "../_generic/Footer";
import Categories from "./Categories";
import Content from "./Content.js";
import video from "../../assets/img/video.png";
import leadersData from "../../assets/data/leaders.json";
import videosData from "../../assets/data/videos.json";
import getVimeoData from "../../controllers/vimeo";

import {TOOLS} from '../../assets/data/tools';

export default function() {
  const news = {
    type: "news",
    data: [
      {
        image_url: video,
        title: "Toma de decisiones con data",
        author: "Aaron Sabagh",
        type: "videos",
        id: 1
      },
      {
        image_url: video,
        title: "Toma de decisiones con data",
        author: "Aaron Sabagh",
        type: "videos",
        id: 2
      },
      {
        image_url: video,
        title: "Toma de decisiones con data",
        author: "Aaron Sabagh",
        type: "videos",
        id: 3
      },
      {
        image_url: video,
        title: "Toma de decisiones con data",
        author: "Aaron Sabagh",
        type: "leaders",
        id: 1
      },
      {
        image_url: video,
        title: "Toma de decisiones con data",
        author: "Aaron Sabagh",
        type: "leaders",
        id: 2
      },
      {
        image_url: video,
        title: "Toma de decisiones con data",
        author: "Aaron Sabagh",
        type: "leaders",
        id: 3
      },
      {
        image_url: video,
        title: "Toma de decisiones con data",
        author: "Aaron Sabagh",
        type: "leaders",
        id: 4
      },
      {
        image_url: video,
        title: "Toma de decisiones con data",
        author: "Aaron Sabagh",
        type: "videos",
        id: 8
      }
    ]
  };

  const [leaders, setLeaders] = useState(leadersData);
  const [videos, setVideos] = useState(videosData);

  useEffect(() => {
    // setLeaders(leadersData)
    getVimeoData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="page-home">
        <Header />
        <Categories />
        {/* <NavBar /> */}
        <Content news={news.data} leaders={leaders} videos={videos.data} tools={TOOLS.toolkits} />
        <Footer />
      </main>
    </>
  );
}
