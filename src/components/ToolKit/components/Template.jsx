import React from 'react';

function Template(props) {
  return (
    <>
      <h2>¿De qué se trata?</h2>
      <hr />
      <p>{props.toolContent}</p>
      <h2>{`Videoconferencia "${props.toolTitle}"`}</h2>
      <hr />
      <iframe src={props.videoPath} width="100%" height="50%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      <h2>Descargar material</h2>
      <hr />
      <div className="download">
        {props.files.map(file => (<a href={file.path} download>{file.title}</a>))}
      </div>
    </>
  )
}

export default Template;