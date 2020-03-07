import React from 'react';

function CardTool(props) {
  return (
    <div className="cardTool">
      <div className={props.iconCard} />
      <p>{props.textCard}</p>
      {/* <span>VER MÁS</span> */}
    </div>
  )
}

export default CardTool;