<template>
    <div>
        <div class="col-md-8"><h4>New Exercise</h4></div>
        <div class="col-md-12"><hr></div>

        <div class="col-md-12">
            <form @submit.prevent="create()">
                <div class="form-group">
                    <label for="Name">Name:</label>
                    <input type="text" class="form-control" id="Name" v-model="exercise.name">
                </div>
                <div class="form-group">
                    <label for="Description">Description:</label>
                    <textarea class="form-control" rows="6" id="Description" v-model="exercise.description"></textarea>
                </div>
                <div class="form-group">
                    <label for="instructions">instructions:</label>
                    <textarea class="form-control" rows="6" id="instructions" v-model="exercise.instructions"></textarea>
                </div>
                <v-select label="name" v-model="exercise.bodyPartList" :options="bodyParts" multiple="multiple" placeholder="Select a Body Part"></v-select>
                <br/>
                <div class="form-group">
                    <label for="exampleInputFile">Picture</label>
                    <input type="file" id="exampleInputFile">
                </div>
                <button type="submit" class="btn btn-primary pull-right">Submit</button>
            </form>
        </div>

        {{ errorMessage }}
    </div>
</template>
<script>
import ExerciseEntity from "../../entity/ExerciseEntity.js";
import ExerciseService from "../../services/ExerciseService";
import BodyPartService from "../../services/BodyPartService";
import MultipleSelect from "../../directives/MutipleSelect";

export default {
  data() {
    return {
      exercise: new ExerciseEntity(),
      bodyParts: [],
      errorMessage: "",
      idBodyPart: this.$route.params.idBodyPart,
      idExercise: this.$route.params.idExercise
    };
  },

  created() {
    this.fetchData();
  },

  watch: {
    $route: "fetchData"
  },

  methods: {
    create() {
      this.exerciseService.create(this.exercise).then(() => {
        if (this.idExercise)
          this.$router.push({
            name: "exercise-list",
            params: { idBodyPart: this.idBodyPart, idExercise: this.idExercise }
          });
      }, err => (this.errorMessage = err.message));
    },

    fetchData() {
      this.bodyPartService = new BodyPartService(this.$resource);
      this.exerciseService = new ExerciseService(this.$resource);

      this.exercise = new ExerciseEntity();

      if (this.$route.params.idExercise) {
        this.exerciseService.readById(this.$route.params.idExercise)
        .then(exercise => {
          this.exercise = exercise;
        }, err => (this.errorMessage = err.message));
      }

      this.bodyPartService
        .readByCriteria()
        .then(
          bodyParts => (this.bodyParts = bodyParts),
          err => errorMessage.message
        );
    },
  }
};
</script>
<style scoped>

</style>
