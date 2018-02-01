<template>
    <div>
      <!-- Mocked values just for showing Vue.js functionalities -->
        <thumbnail/>
        <thumbnail/>
        <thumbnail/> 
    </div>
</template>
<script>
import Thumbnail from "../shared/Thumbnail.vue";

export default {
  components: {
    "thumbnail": Thumbnail
  }
};
</script>
<style scoped>

</style>
