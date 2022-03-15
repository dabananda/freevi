import React from 'react';

const Video = props => {
  const {video} = props;
  
  return (
    <div className="m-2">
      <a href={video.video_files[2].link} target="_blank">
        <video controls width="250">
          <source src={video.video_files[2].link} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </a>
    </div>
  );
};

export default Video;
