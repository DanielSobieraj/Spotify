// import login from '../../services/login'

const module = {
    namespaced: true,
    state: {
        token: localStorage.getItem('authToken'),
        baseURL: 'https://api.spotify.com/v1/',
    },
    getters: {
        // getBaseURL: state => {
        //     return state.baseURL
        // }
    },
    mutations: {
        storeToken (state, payload) {
            state.token = payload
        }
    },
    actions: {
        setToken ({ commit}, payload) {
            commit('storeToken', payload)
        }
        // async setAxiosBaseURL({state}) {
        //     login.getMyUser(state.baseURL)
        // }
    }
};

export default module;