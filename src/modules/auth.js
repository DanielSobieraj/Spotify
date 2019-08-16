import axios from 'axios'

export const = auth {
    modules: {
        axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
    }
};