import React from 'react';
import './image.scss';

const Image = props => {
  const { image } = props;

  return (
    <div className="m-3 item">
      <a href={image.src.original} target="_blank">
        <img src={image.src.medium} alt={image.alt} />
      </a>
    </div>
  );
};

export default Image;
