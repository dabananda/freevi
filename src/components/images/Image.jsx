import React from 'react';

const Image = props => {
  const { image } = props;

  return (
    <div className="m-2">
      <a href={image.src.original}>
        <img src={image.src.medium} alt={image.alt} />
      </a>
    </div>
  );
};

export default Image;
