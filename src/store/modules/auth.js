import login from '../../services/login'

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
    },
    actions: {
        setAxiosDefault({state}) {
            login.axToken(state.token);
            login.getMyUser(state.baseURL)
        },
        // async setAxiosBaseURL({state}) {
        //     login.getMyUser(state.baseURL)
        // }
    }
};

export default module;