import React from "react";
import Header from "../_generic/Header";
import NavBar from "../_generic/NavBar";
import Footer from "../_generic/Footer";
import Categories from "./Categories";
import Content from "./Content.js";
import video from "../../assets/img/video.png";

export default function() {
  const news = [    
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 1,
      type: "leaders"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 2,
      type: "videos"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 3,
      type: "leaders"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 4,
      type: "videos"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 5,
      type: "leaders"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 6,
      type: "videos"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 7,
      type: "videos"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 8,
      type: "videos"
    }
  ];
  const videos = [
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 1,
      type: "videos"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 2,
      type: "videos"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 3,
      type: "videos"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 4,
      type: "videos"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 5,
      type: "videos"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 6,
      type: "videos"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 7,
      type: "videos"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 8,
      type: "videos"
    }
  ];
  const leaders = [
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 1,
      type: "leaders"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 2,
      type: "leaders"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 3,
      type: "leaders"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 4,
      type: "leaders"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 5,
      type: "leaders"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 6,
      type: "leaders"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 7,
      type: "leaders"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh",
      id: 8,
      type: "leaders"
    }
  ];
  
  return (
    <>
    <main className="page-home">
      <Header />
      <Categories />
      {/* <NavBar /> */}
      <Content news={news} leaders={leaders} videos={videos} />
      <Footer />
    </main>
    </>
  );
}
