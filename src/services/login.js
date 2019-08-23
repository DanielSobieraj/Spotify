import axios from 'axios'

export default {
    setToken() {
         return axios.defaults.headers.common['Authorization'] = `bearer ` + localStorage.getItem('authToken')
    },
    getUser(setURL) {
        return axios.get(setURL + 'user/11143584604?si=wg4V9IF0RTCgxragwtgjJw')
    }
}