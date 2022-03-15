import React from 'react';
import Image from './Image';
import './images.scss';          

const Images = props => {
  const { images } = props;
  console.log(props);
  return (
    <div className="mt-5">
      <h3>Copyright FREE Images</h3>
      <div className="mt-3 images">
        {images.map(image => (
          <Image key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Images;
