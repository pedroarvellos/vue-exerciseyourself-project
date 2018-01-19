import Vue from 'vue'
import App from './App.vue'
 
import 'bootstrap/dist/css/bootstrap.css' //todo import que faço, se não coloco ./, ele procura dentro de node_modules.
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js' 

new Vue({
  el: '#app',
  render: h => h(App)
})
