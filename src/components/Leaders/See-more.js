import React from "react";
import { useHistory } from "react-router-dom";


export default function({ current, allLeaders }) {
  let history = useHistory();

  const moreLeaders = allLeaders.filter(el => {
    return current.id !== el.id;
  });

  const goToLeader = (id) => {
    history.push(`${id}`)
  }

  return (
    <>
      <div className="col-12 col-md-4 leaders-more">
        <div className="col-12 title-recommend">
          <h1 className="text-center"> Recomendaciones</h1>
          <hr />
        </div>
        <div className="container-more my-5 px-3 pt-0">
          <div className="see-more-title">
            <h3>Más líderes</h3>
            <hr />
          </div>
          {moreLeaders &&
            moreLeaders.map(el => (
              <div className="box-recommend row my-5" onClick = {() => goToLeader(el.id)} >
                <div className="col-7 box-r-img">
                  <img src={require(`../../assets/img/leaders/leaders_${el.id}.jpg`)} alt="" />
                </div>
                <div className="col-5 p-2">
                  <h3>
                    {el.name} {el.lastname}
                  </h3>
                  <p>{el.position}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
