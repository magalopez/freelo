import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Categories from "./Categories";
import Content from "./Content.js";
import video from "../../assets/img/video.png";


export default function() {
  const news = [
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    }
  ];
  const videos = [
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    }
  ];
  const leaders = [
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    },
    {
      image_url: video,
      content: "Toma de decisiones con data",
      Author: "Aaron Sabagh"
    }
  ];
  return (
    <>
      <Header />
      <Categories />
      <NavBar />
      <Content news={news} leaders={leaders} videos={videos} />    
      <Footer />
    </>
  );
}
