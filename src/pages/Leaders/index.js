import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Banner from "./Banner";

export default function() {
  let { slug } = useParams();
  return (
    <>
      <div className="page-leaders">
        <Header />
        <Banner />
        <div> Leaders! {slug} </div>;
      </div>
    </>
  );
}
