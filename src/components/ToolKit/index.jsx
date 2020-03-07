import React from "react";
import { useParams } from "react-router-dom";
import Banner from "./components/Banner";
import Breadcrumb from "./components/Breadcrumb";
import Template from "./components/Template";
import CardTool from "./components/cardTool";

export default function () {
  const { slug } = useParams();

  const parrafoTool = 'El plan de desarrollo captura una fortaleza y un par de debilidades que muestra el colaborador para el desempeño de su cargo actual o pensando en un cargo futuro.'

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
          <div className="row-sass">
            <div className="tool-template col-sass">
              <Template
                toolTitle={'Plan de desarrollo'}
                toolContent={parrafoTool}
                videoPath="https://player.vimeo.com/video/233550803?color=F9B500&title=0&byline=0&portrait=0"
                pdfBtn='“70-20-10”' />
            </div>
            <div className="more-tools col-sass">
              <h2>Más Toolkits</h2>

              <CardTool
                iconCard={'icon-equality'}
                textCard={'Diversidad e inclusión'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
