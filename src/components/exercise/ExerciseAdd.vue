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
                    <label for="Steps">Steps:</label>
                    <textarea class="form-control" rows="6" id="Steps" v-model="exercise.steps"></textarea>
                </div>
                <select class="form-control js-example-basic-multiple" v-model="exercise.bodyPart" multiple="multiple" v-basic-select-two>
                    <option disabled value="">Choose a Body Part</option>
                    <option v-for="bodyPart of bodyParts" :key="bodyPart.name">{{ bodyPart.name }}</option>
                </select>
                <div class="form-group">
                    <label for="exampleInputFile">Picture</label>
                    <input type="file" id="exampleInputFile">
                </div>
                <button type="submit" class="btn btn-primary pull-right">Submit</button>
            </form>
        </div>
    </div>
</template>
<script>

import ExerciseEntity from "../../Entity/ExerciseEntity.js";
import ExerciseService from "../../services/ExerciseService";
import BodyPartService from "../../services/BodyPartService";
import MultipleSelect from "../../directives/MutipleSelect";

export default {
  components: {},
  data() {
    return {
      exercise: new ExerciseEntity(),
      bodyParts: "",
      errorMessage: ""
    };
  },
  methods: {
    create() {
      this.service.create(this.exercise).then();
    }
  },
  created() {
    this.bodyPartService = new BodyPartService(this.$resource);
    this.exerciseService = new ExerciseService(this.$resource);

    if (this.$route.params.id) {
      this.exerciseService
        .readById(this.$route.params.id)
        .then(
          exercise => (this.exercise = exercise),
          err => (this.errorMessage = err.message)
        );
    }

    this.bodyPartService
      .readByCriteria()
      .then(
        bodyParts => (this.bodyParts = bodyParts),
        err => errorMessage.message
      );
  },

  directives: {
      "basic-select-two": MultipleSelect
  }
};
</script>
<style scoped>

</style>
