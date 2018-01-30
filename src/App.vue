<template>
  <div>
    <nav-bar v-bind:bodyParts = "bodyParts"/>
    <div class="container">
      <router-view></router-view>
    </div> 
  </div>
</template>

<script>
import Nav from "./components/shared/Nav.vue";
import BodyPartService from "./services/BodyPartService.js";
import { routes } from "./routes";

export default {
  components: {
    "nav-bar": Nav
  },

  data() {
    return {
      bodyParts: [],
      errorMessage: ""
    };
  },

  created() {
    this.service = new BodyPartService(this.$resource);

    this.service
      .readByCriteria()
      .then(
        bodyParts => (this.bodyParts = bodyParts),
        err => errorMessage.message
      );
  }
};
</script>

<style>
</style>
