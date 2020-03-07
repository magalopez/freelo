import React from 'react';


function Banner(props) {
  return (
    <>
      <div className="banner-background">
        <div className="banner-color"></div>
      </div>
      <div className="banner-content">
        <div className="banner-content__text">
          <h2 className="montserrat-b">{props.toolname}</h2>
          <hr />
        </div>
        <div className={props.toolimage}></div>
      </div>
    </>
  )
}

export default Banner;