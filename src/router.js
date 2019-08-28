import Vue from 'vue'
import Router from "vue-router"
// import store from './store/store'

import login from './views/login'
import Home from "./views/Home"

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {path: '/', redirect: {name: 'Login'}},
        {path: '/login', name: 'Login', component: login},
        {
            path: '/home', name: 'Home', component: Home,
            beforeEnter: function () {

            }
        },
        {path: '*', name: 'Error', component: login}
    ]
});
export default router;