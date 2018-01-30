<template>
    <div>
        <thumbnail/>
        <thumbnail/>
        <thumbnail/> 
    </div>
</template>
<script>
import Thumbnail from "./components/shared/Thumbnail.vue";

export default {
  components: {
    "thumbnail": Thumbnail
  }
};
</script>
<style scoped>

</style>
