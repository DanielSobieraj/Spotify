import axios from 'axios'

export default {
    state: {

    },
    mutations: {
        saveLocalStorage() {
            axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
        },
    }
};