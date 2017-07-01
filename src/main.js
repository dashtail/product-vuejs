import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VeeValidate, { Validator } from 'vee-validate'
import VueSweetAlert from 'vue-sweetalert'

import 'bootstrap/dist/css/bootstrap.css';
import msg from './locale/vee_validate/pt_BR';

import { routes } from './routes';
import auth from './auth';

Vue.use(VueRouter);
Vue.use(VueSweetAlert);
Vue.use(VueResource);

Validator.addLocale(msg);
Vue.use(VeeValidate, {
    locale: 'pt_BR'
});


const router = new VueRouter({
    routes,
    mode: 'history'
 });

Vue.http.options.root = "http://localhost:3000";
Vue.http.headers.common['x-access-token'] = auth.checkAuth();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
