import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VeeValidate, { Validator } from 'vee-validate'
import VueSweetAlert from 'vue-sweetalert'

import 'bootstrap/dist/css/bootstrap.css';
import msg from './locale/vee_validate/pt_BR';

import { routes } from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueSweetAlert);

Validator.addLocale(msg);
Vue.use(VeeValidate, {
    locale: 'pt_BR'
});


const router = new VueRouter({
    routes,
    mode: 'history'
 });

Vue.router = router;

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'type',
  loginData: {url: 'auth', method: 'POST', redirect: '/', fetchUser: false},
  fetchData: {url: 'auth/user', method: 'GET'},
  refreshData: {url: 'auth/refresh', method: 'GET', atInit: false}
});

Vue.http.options.root = "http://localhost:3000";

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
