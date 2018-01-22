import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

import 'bootstrap/dist/css/bootstrap.css'; //todo import que faço, se não coloco ./, ele procura dentro de node_modules.
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js' ;

Vue.use(VueResource);
Vue.use(VueRouter);

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
