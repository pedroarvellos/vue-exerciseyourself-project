<template>
  <div class="container">
    <h1 v-if="errorMessage">{{ errorMessage }}</h1>
    <div class = "col-md-12" v-for="exercise of exerciseList" :key="exercise.id">
      <div class="col-md-2 col-md-offset-0"><img src="https://www.greenme.com.br/images/viver/esporte-tempo-livre/natacao.jpg" class="img-responsive img-circle" alt="Responsive image"></div>
      <div class="col-md-6"><h4>{{ exercise.name }}</h4></div>
      <div class="col-md-2 col-md-offset-2">
        <router-link :to="{ name: 'exercise-view', params: {id: exercise.id}}"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></router-link>
      </div>
      <div class="col-md-10 col-md-offset-2"><hr></div>
    </div>
  </div>
</template>

<script>
import BodyPartService from "../../services/BodyPartService";

export default {
  data() {
    return {
      exerciseList: "",
      errorMessage: ""
    };
  },

  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.service = new BodyPartService(this.$resource);

      if (this.$route.params.id) {
        this.service
          .readById(this.$route.params.id)
          .then(
            exerciseList => (this.exerciseList = exerciseList),
            err => (this.errorMessage = err.message)
          );
      }
    }
  }
};
</script>

<style scoped>

</style>
