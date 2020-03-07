import React from "react";
import { useParams } from "react-router-dom";
import Banner from "./components/Banner";
import Breadcrumb from "./components/Breadcrumb";
import Template from "./components/Template";

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
                videoPath='https://www.youtube.com/watch?v=Ww7wQBE5j60'
                pdfBtn='“70-20-10”' />
            </div>
            <div className="more-tools col-sass">
              <div><h1>Mas ToolKits</h1></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
