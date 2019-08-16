import axios from 'axios'

const config = {
    responseType: 'json',
    Authorization: `Bearer ${store.state.token}`
}

export default ({
    get (url) {
        return axios.get(url, config)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error))
    })