<template>
    <div>
        <div class="col-md-8"><h4>New Exercise</h4></div>
        <div class="col-md-12"><hr></div>

        <div class="col-md-12">
            <form @submit.prevent="create()">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" name="name" v-model="exercise.name" v-validate data-vv-rules="required|min:3|max:40">
                    <span class="error" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                </div>
                <div class="form-group">
                    <label for="description">Description:</label>
                    <textarea class="form-control" rows="6" id="description" name="description" v-model="exercise.description" v-validate data-vv-rules="required"></textarea>
                    <span class="error" v-show="errors.has('description')">{{ errors.first('description') }}</span>
                </div>
                <div class="form-group">
                    <label for="instructions">instructions:</label>
                    <textarea class="form-control" rows="6" id="instructions" name="instructions" v-model="exercise.instructions" v-validate data-vv-rules="required"></textarea>
                    <span class="error" v-show="errors.has('instructions')">{{ errors.first('instructions') }}</span>
                </div>
                <v-select label="name" v-model="exercise.bodyPartList" :options="bodyParts" multiple="multiple" placeholder="Select a Body Part" name="bodypart"></v-select>
                <br/>
                <label>Photo:</label>
                <image-upload class="" :exercise = "exercise"/>

                <button type="submit" class="btn btn-primary pull-right">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>
import ExerciseEntity from "../../entity/ExerciseEntity.js";
import ExerciseService from "../../services/ExerciseService";
import BodyPartService from "../../services/BodyPartService";
import ImageUpload from "../shared/ImageUpload.vue";

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

  components: {
    "image-upload": ImageUpload
  },

  created() {
    this.fetchData();
  },

  watch: {
    $route: "fetchData"
  },

  methods: {
    create() {
      this.$validator.validateAll()
      .then(success => {
        if (success) {
          this.exerciseService
          .create(this.exercise)
          .then(() => {
            if (this.idBodyPart) {
              this.$router
              .push({
                name: "exercise-list",
                params: { idBodyPart: this.idBodyPart }
              });
            } else {
              this.$router
              .push({
                name: "home"
              });
            }
          }, err => (this.errorMessage = err.message));
        }
      });
    },

    fetchData() {
      this.bodyPartService = new BodyPartService(this.$resource);
      this.exerciseService = new ExerciseService(this.$resource);

      this.exercise = new ExerciseEntity();

      if (this.$route.params.idExercise) {
        this.exerciseService
          .readById(this.$route.params.idExercise)
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
    }
  }
};
</script>
<style scoped>
.error {
  color: red;
}
</style>
