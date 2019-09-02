const module = {
    namespaced: true,
    state: {
        token: '',
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
            localStorage.setItem('authToken', token);
            commit('setToken')
        }
    }
};

export default module;