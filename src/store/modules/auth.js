const module = {
    namespaced: true,
    state: {
        token: '',
        baseURL: 'https://api.spotify.com/v1/',
    },
    getters: {

    },
    mutations: {
        setToken (state) {
            state.token = localStorage.getItem('authToken')
        }
    },
    actions: {
        setToken ({ commit }, token) {
            localStorage.setItem('authToken', token)
            commit('setToken')
        }
    }
};

export default module;