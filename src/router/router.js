import Vue from 'vue'
import Router from 'vue-router'
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
        // {
        //     path: '/',
        //     name: 'Home',
        //     redirect: {
        //         name: 'browse'
        //     },
        // },
    ]
});

router.beforeEach(function (to, from, next) {
    if (store.getters['app/notFound']) {
        store.dispatch('app/notFoundPage', false);
    }

    if (!store.getters['auth/getAccessToken'] && to.name !== 'Login') {
        store.dispatch('auth/login');
        next(false);
    }
    next();
});

export default router