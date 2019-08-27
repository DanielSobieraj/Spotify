import Vue from 'vue'
import Router from "vue-router"
// import store from './store/store'

import login from './views/login'
import Home from "./views/Home";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
});

export default router;