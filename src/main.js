import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import vSelect from 'vue-select'
import VeeValidate from 'vee-validate';
import { routes } from './routes';

import 'bootstrap/dist/css/bootstrap.css'; 
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js' ;


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.component('v-select', vSelect);
Vue.use(VeeValidate);

Vue.http.options.root = 'http://localhost:8080';


const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
