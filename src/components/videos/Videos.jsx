import React from 'react';
import Video from './Video';
import './videos.scss'

const Videos = props => {
  const {videos} = props;
  
  return (
    <div className="mt-5">
      <h3>Copyright FREE Videos</h3>
      <div className="videos">
        {videos.map(video => <Video key={video.id} video={video} />)}
      </div>
    </div>
  );
};

export default Videos;
