import React from 'react';

function Template(props) {
  return (
    <>
      <h2>¿De qué se trata?</h2>
      <p>{props.toolContent}</p>
      <h2>{`Videoconferencia "${props.toolTitle}"`}</h2>
      <hr />
      <iframe src="https://music.youtube.com/watch?v=PJhADeq42-g&list=RDAMVM5SE3H-XRldI" width="100%" height="50%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      <h2>Desacargar material</h2>
      <hr />
      <div className="download">
        <button>{`Plantilla ${props.toolTitle}`}</button>
        <button>{`PDF ${props.pdfBtn}`}</button>
      </div>
    </>
  )
}

export default Template;