const module = {
    namespaced: true,
    state: {
        token: localStorage.getItem('authToken'),
        baseURL: 'https://api.spotify.com/v1/',
    },
    getters: {

    },
    mutations: {

    },
    actions: {
    }
};

export default module;