import login from '../../services/login'
/* eslint-disable */
const module = {
    namespaced: true,
    state: {
        token: '',
        baseURL: 'https://api.spotify.com/v1/',
    },
    getters: {
        login: state => {
            return state.token
        },
        getBaseURL: state => {
            return state.baseURL
        }
    },
    mutations: {
        setTokenAuth(state) {
            state.token = localStorage.getItem('authToken')
        }
    },
    actions: {
        async setAxiosDefault({commit, state}) {
            login.setToken(state.token);
            login.getUser(state.baseURL)
        },
    }
};

export default module;