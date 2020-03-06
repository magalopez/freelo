import React from "react";
import { useParams } from "react-router-dom";
import Header from "../_generic/Header";
import NavBar from "../_generic/NavBar";
import Footer from "../_generic/Footer";
import Banner from "./Banner";
import Content from "./Content";
import leadersData from "../../assets/data/leaders.json";

export default function(props) {
  let { slug } = useParams();
  const urlParam = props.match.params.slug;
  const data = leadersData.data;

  console.log(urlParam);

  const leaderInfo = data.filter(el => {
    return el.id === urlParam;
  });

  return (
    <>
      {leaderInfo.map((el, i) => (
        <div className="page-leaders" key={i}>
          <Header />
          <Banner
            name={el.name}
            lastname={el.lastname}
            position={el.position}
            leaderImg={require(`../../assets/img/leaders/leaders_${el.id}.jpg`)}
          />
          {/* <NavBar /> */}
          <Content dataLeader={el} allLeaders = {data} />
          <Footer />
        </div>
      ))}
    </>
  );
}
