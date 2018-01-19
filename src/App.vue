<template>
  <div class="container">
    <nav-bar/>
  </div>
</template>

<script>

import Nav from './components/shared/Nav.vue';

export default {

  components: {
    'nav-bar' : Nav 
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
