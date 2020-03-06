import React, { useState, useEffect } from "react";
import Header from "../_generic/Header";
import NavBar from "../_generic/NavBar";
import Footer from "../_generic/Footer";
import Categories from "./Categories";
import Content from "./Content.js";
import video from "../../assets/img/video.png";
import leadersData from "../../assets/data/leaders.json";

export default function() {
  const news = {
    type: "news",
    data: [
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 1,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 2,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 3,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 4,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 5,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 6,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 7,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 8,
  
      }
    ]
  }

  const videos = {
    type: "videos",
    data: [
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 1,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 2,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 3,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 4,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 5,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 6,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 7,
        
      },
      {
        image_url: video,
        content: "Toma de decisiones con data",
        Author: "Aaron Sabagh",
        id: 8,
        
      }
    ]
  }
  
  const [leaders, setLeaders] = useState(leadersData);

  // useEffect(()=>{
  //   setLeaders(leadersData)
  // }, [])

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
