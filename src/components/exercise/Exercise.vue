<template>
    <div class="container">
        <div class="col-md-8"><h4>{{ exercise.name }}</h4></div>
        <div class="col-md-12"><hr></div>
        <div class="col-md-12">Description:</div>
        <div class="col-md-12">{{ exercise.description }}</div>
        <div class="col-md-12">Steps:</div>
        <div class="col-md-12">{{ exercise.instructions }}</div>
    </div>
</template>

<script>
import ExerciseService from "../../services/ExerciseService";

export default {
  data() {
    return {
      exercise: "",
      errorMessage: ""
    };
  },

  created() {
    this.service = new ExerciseService(this.$resource);
    this.fetchData();
  },
  methods: {
    fetchData() {
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
