import axios from 'axios';

const KEY = 'AIzaSyBtCc8jfK-fFBX7vMUyTrQgjq7V2cFj0i4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
