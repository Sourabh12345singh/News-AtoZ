import React from 'react';
import spinnerGif from './Spinner@1x-1.0s-200px-200px.gif';

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={spinnerGif} alt="Loading..." />
    </div>
  );
}
export default Spinner