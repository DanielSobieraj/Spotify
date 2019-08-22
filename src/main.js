import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify'

import axios from 'axios'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    computed: {
        defaultHeader() {
            axios.interceptors.request.use(
                (config) => {
                    let token = localStorage.getItem('auth');
                    config.headers['Authorization'] = `${token}`;
                }
            );
            return console.log('git')
        }
    },
    render: h => h(App)
}).$mount('#app');