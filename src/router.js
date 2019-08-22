import Vue from 'vue'
import Router from "vue-router"
// import store from './store/store'

import login from './views/login'
import App from "./App";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: login
        },
        {
            path: '/',
            name: 'Home',
            component: App
        }
    ]
});

export default router;