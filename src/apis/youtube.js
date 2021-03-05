import axios from 'axios'
//Remember to npm install --save axios in the terminal

const KEY = 'AIzaSyCLV17kFNoBwi40mEsQ6eeCjP8CBPYCqE4';

// Create preconfigured axios request

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key:  KEY,
    type: 'video'
  }
});
