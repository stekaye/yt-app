import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {

  // Instead of putting props as the argument, we can destructure and get the videos property specifically.
  // Videos accessible using props.videos

  // Map over array and save results to new variable
  // We can customise each component by taking each video and passing it as a prop to the VideoItem.

  //On line 4 we pass onVideoSelect as a prop from App.js. Below we now pass it on to VideoItem.

  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
  })

  return <div className="ui relaxed divided list">{renderedList}</div>

}

export default VideoList;
