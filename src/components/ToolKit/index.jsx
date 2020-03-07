import React from "react";
import { useParams } from "react-router-dom";
import Banner from "./components/Banner";
import Breadcrumb from "./components/Breadcrumb";

export default function () {
  const { slug } = useParams();

  return (
    <div className="page-toolkits">
      <div className="container">
        <div className="content-centered">
          <Banner
            toolimage={'icon-meeting'}
            toolname={'Plan de desarrollo'} />
          <Breadcrumb items={[
            { title: 'Home', active: false, url: '/' },
            { title: 'Plan de desarrollo', active: true, url: '/toolkit/:id' }
          ]} />
        </div>
      </div>
    </div>
  );
}
