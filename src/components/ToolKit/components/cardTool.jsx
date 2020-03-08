import React from 'react';

function CardTool(props) {
  return (
    <div className="cardTool">
      <div className={`icon ${props.iconCard}`} />
      <p>{props.textCard}</p>
    </div>
  )
}

export default CardTool;