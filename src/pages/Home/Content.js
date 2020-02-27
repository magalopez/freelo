import React from "react";
import Carousel from "./Carousel";

export default function({ news, videos, leaders }) {
  return (
    <>
    <section className="main-home container">
      <Carousel sliderContent={news} sliderTitle="Novedades" />
      <Carousel sliderContent={videos} sliderTitle="Videos" />
      <Carousel sliderContent={leaders} sliderTitle="¿Qué leen nuestros líderes?"/>
    </section>
    </>
  );
}
