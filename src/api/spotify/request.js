import axios from 'axios';

const request = axios.create({
   // ENDPOINT
   baseURL: 'https://api.spotify.com/v1/'
});

export default request;