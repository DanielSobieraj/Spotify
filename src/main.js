import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';

import { routes } from './routes/routes';
import { store } from './store/store'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  vuetify,
  VueRouter,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
