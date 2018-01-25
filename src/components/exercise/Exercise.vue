<template>
    <div class="container">
        <div class="col-md-8"><h4>Exercise Instructions</h4></div>
        <div class="col-md-2 col-md-offset-2"><span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span></div>
        <div class="col-md-12"><hr></div>
        <div class="col-md-12">Steps:</div>
        <div class="col-md-12"></div>
        <div class="col-md-12"></div>
        <div class="col-md-12">{{ exercise.description }}</div>
        <!-- <div class="col-md-12">{{ exercise }}</div> -->
        
    </div>
</template>

<script>
import ExerciseService from "../../services/ExerciseService";

export default {
  data() {
      return {
        exercise: "",
        errorMessage: ""
      }
  },

  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.service = new ExerciseService(this.$resource);

      if (this.$route.params.id) {
        this.service
          .readById(this.$route.params.id)
          .then(
            exercise => (this.exercise = exercise),
            err => (this.errorMessage = err.message)
          );
      }
      console.log(this.exercise);
    }
  }
};
</script>

<style scoped>

</style>
