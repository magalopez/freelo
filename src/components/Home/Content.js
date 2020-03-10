import React from "react";
import Carousel from "./Carousel";

export default function({ news, videos, leaders, tools }) {
  return (
    <>
    <section className="main-home container">
      <Carousel sliderContent={news} sliderTitle="Novedades" />
      <Carousel sliderContent={leaders} sliderTitle="¿Qué leen nuestros líderes?"/>
      <Carousel sliderContent={videos} sliderTitle="Videos" />
      <Carousel sliderContent={tools} sliderTitle="Toolkits"/>
    </section>
    </>
  );
}
