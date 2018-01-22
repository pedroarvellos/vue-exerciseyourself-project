<template>
  <div>
      {{ exercise }}
  </div>
</template>

<script>
import BodyPartService from "../../services/BodyPartService";

export default {
  data() {
    return {
      id: this.$route.params.id,
      exercise: "",
      errorMessage: ""
    };
  },

  created() {
    this.service = new BodyPartService(this.$resource);

    if (this.id) {
      this.service
        .readById(this.id)
        .then(exercise => (this.exercise = exercise));
        console.log(exercise)
    }
  }
};
</script>

<style scoped>

</style>
