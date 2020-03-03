import React from "react";
import { useParams } from "react-router-dom";
import Header from "../_generic/Header";
import NavBar from "../_generic/NavBar";
import Footer from "../_generic/Footer";
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
