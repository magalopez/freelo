import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "./components/Banner";
import Breadcrumb from "./components/Breadcrumb";
import Template from "./components/Template";
import CardTool from "./components/cardTool";
import { Link } from 'react-router-dom'


import { TOOLS } from '../../assets/data/tools';

export default function (props) {
  const [tool, setValues] = useState({})
  const { id } = useParams();

  const data = TOOLS.toolkits;

  useEffect(() => {
    const toolselected = data.filter(tool => tool.id === id);
    setValues({ selected: toolselected });
  }, [])

  const { selected } = tool;

  const goToPage = (id, type) => {
    props.history.push(`/${type}/${id}`)
  }

  console.log('s_e_l_e_c_t_e_d', selected)

  return (
    <div className="page-toolkits">
      <div className="container">
        <div className="content-centered">
          {
            selected &&
            selected.map((tool) => {
              return (
                <>
                  <Banner
                    toolimage={tool.image_url}
                    toolname={tool.title} />
                  <Breadcrumb items={[
                    { title: 'Home', active: false, url: '/' },
                    { title: `${tool.title}`, active: true, url: `/${tool.type}/${tool.id}` }
                  ]} />
                  <div className="row-sass">
                    <div className="tool-template col-sass">
                      <Template
                        toolTitle={tool.title}
                        toolContent={tool.description}
                        videoPath={tool.video}
                        files={tool.files} />
                    </div>
                    <div className="more-tools col-sass">
                      <h2>Más Toolkits</h2>
                      <hr />
                      {data.map((tool, i) => {
                        return (
                          <div key={i} onClick={() => goToPage(tool.id, tool.type)} >
                            {/* <Link to={`/${tool.type}/${tool.id}`}> */}
                            <CardTool
                              iconCard={tool["mini-icon"]}
                              textCard={tool.title} />
                            {/* </Link> */}
                          </div>)
                      })}
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
