import React from 'react';

const Video = props => {
  const {video} = props;
  console.log(video);
  return (
    <div className="m-2">
      <video controls width="250">
        <source src={video.video_files[2].link} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
};

export default Video;
