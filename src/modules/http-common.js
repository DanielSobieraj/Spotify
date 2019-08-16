import axios from 'axios'
import store from '../store/index'

export const http = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        Authorization: `Bearer ${store.state.token}`
    },
    timeout: 5000,
});
