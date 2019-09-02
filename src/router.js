import Vue from 'vue'
import Router from "vue-router"
// import store from './store/store'

import login from './views/login'
import Home from "./views/Home"
import err from "./views/err"

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/error',
            component: err
        },
        {
            path: '*',
            redirect: '/error'
        },
        {
            path: '/login',
            name: 'Login',
            component: login,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('authToken')) {
                    next('/home')
                } else {
                    next()
                }
            }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem('authToken')) {
                    next()
                } else {
                    next('/login')
                }
            },
        },
    ]
});

export default router;