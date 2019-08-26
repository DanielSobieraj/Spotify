import axios from 'axios'

export default {
    axToken() {
        return axios.defaults.headers.common['Authorization'] = `bearer ` + this.$store.state.auth.token;
    },
    getMyUser() {
        return axios.get(this.$store.state.auth.baseURL + 'me')
    }
};