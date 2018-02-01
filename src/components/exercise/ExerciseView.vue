<template>
    <div class="container">
        <ol class="breadcrumb">
          <li><router-link :to="{ name: 'home' }"><a>Home</a></router-link></li>
          <li><router-link :to="{ name: 'exercise-list', params: {idBodyPart: idBodyPart} }"><a>Body Part</a></router-link></li>
          <li class="active">New Exercise</li>
        </ol>

        <div class="col-md-12"><h4>{{ exercise.name }}</h4></div>
        <br/>
        <div class="col-md-4">
          <img v-if="exercise.photo" :src="exercise.photo" class="img-thumbnail" alt="Responsive image">
          <img v-if="!exercise.photo" src="../../assets/no-photo.png" class="img-thumbnail" alt="Responsive image">
        </div>
        <div class="col-md-12"><hr></div>
        <label class="col-md-12">Description:</label>
        <div class="col-md-12">{{ exercise.description }}</div>
        <div class="col-md-12"><hr></div>
        <label class="col-md-12">Steps:</label>
        <textarea class="form-control" rows="6" id="description" name="description" :value="exercise.instructions" readonly></textarea>
    </div>
</template>

<script>
import ExerciseService from "../../services/ExerciseService";

export default {
  data() {
    return {
      exercise: "",
      errorMessage: "",
      idBodyPart: this.$route.params.idBodyPart
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
    }
  }
};
</script>

<style scoped>

</style>
