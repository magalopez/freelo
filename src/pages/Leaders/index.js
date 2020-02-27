import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Banner from "./Banner";
import Content from "./Content";

export default function() {
  let { slug } = useParams();
  return (
    <>
      <div className="page-leaders">
        <Header />
        <Banner />
        {/* <NavBar /> */}
        <Content/>
        <div> Leaders! {slug} </div>;
        <Footer/>
      </div>
    </>
  );
}
