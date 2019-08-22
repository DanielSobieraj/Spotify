const state = {
    token: localStorage.getItem('auth'),
    baseURL: 'https://api.spotify.com/v1/',
};

const mutations = {};

const module = {
    namespaced: true,
    state,
    mutations
};

export default module;