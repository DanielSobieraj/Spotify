import Vue from 'vue'
import Router from "vue-router"
import store from '../store/store'

import login from '../views/login'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: login
        },
    ]
});

export default router;