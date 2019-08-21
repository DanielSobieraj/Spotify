import Axios from "axios";

const state = {
    accessToken: '',
    baseURL: 'https://api.spotify.com/v1/'
};

const actions = {
    login: function () {
            const token = localStorage.getItem('token')
            if (token) {
                Axios.defaults.headers.common['Authorization'] = token
            }
        }
};

const module = {
    namespaced: true,
    state,
    actions
};

export default module;