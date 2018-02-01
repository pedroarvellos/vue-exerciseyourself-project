<template>
  <div class="container">
    <ol class="breadcrumb">
      <li><router-link :to="{ name: 'home' }"><a>Home</a></router-link></li>
      <li class="active">Body Parts</li>
    </ol>
    <h1 v-if="errorMessage">{{ errorMessage }}</h1>
    <div v-if="exerciseList < 1" class="alert alert-info" role="alert">No exercises registered!</div>
    <div  v-for="exercise of exerciseList" :key="exercise.id">
      <div class="col-md-2">
        <img v-if="exercise.photo" :src="exercise.photo" class="img-thumbnail" alt="Responsive image">
        <img v-if="!exercise.photo" src="../../assets/no-photo.png" class="img-thumbnail" alt="Responsive image">
      </div>
      <div class="col-md-3"><h4>{{ exercise.name }}</h4></div>
      <div class="col-md-3 col-md-offset-4">
        <router-link :to="{ name: 'exercise-view', params: {id: exercise.id}}"><button  type="button" class="btn btn-default">View</button></router-link>
        <router-link :to="{ name: 'exercise-edit', params: {idBodyPart: idBodyPart, idExercise: exercise.id}}"><button  type="button" class="btn btn-primary">Edit</button></router-link>
        <button  v-on:click="deleteData(exercise)" type="button" class="btn btn-danger">Delete</button>
      </div>  
      <div class="col-md-10 col-md-offset-2"><hr></div>
    </div>
  </div>
</template>

<script>
import BodyPartService from "../../services/BodyPartService";
import ExerciseService from "../../services/ExerciseService";

export default {
  data() {
    return {
      exerciseList: "",
      errorMessage: "",
      idBodyPart: this.$route.params.idBodyPart
    };
  },

  created() {
    this.fetchData();
  },

  watch: {
    $route: "fetchData"
  },

  methods: {
    deleteData(exercise) {
      this.exerciseService.delete(exercise.id).then(() => {
        let index = this.exerciseList.indexOf(exercise);
        this.exerciseList.splice(index, 1);
      }, err => (this.errorMessage = err.message));
    },

    fetchData() {
      this.bodyPartService = new BodyPartService(this.$resource);
      this.exerciseService = new ExerciseService(this.$resource);

      if (this.$route.params.idBodyPart) {
        this.bodyPartService
          .readById(this.$route.params.idBodyPart)
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
