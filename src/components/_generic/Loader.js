import React from 'react';
import Loader from 'react-loader-spinner';

export default () => {
    return (
      <div style={{ height: '100vh', width: '100vw', backgroundColor: '#ffffff', zIndex: 1031, position: 'absolute', top: 0 }} className="d-flex justify-content-center align-items-center">
        <Loader type="ThreeDots" color="#f9c503" height={80} width={80} />
      </div>
    );
  };
  