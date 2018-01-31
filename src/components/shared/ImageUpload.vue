<template>
  <div id="photoUpload">
    <picture-input
      ref="pictureInput" 
      @change="setPhoto" 
      width="120" 
      height="120" 
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      :hideChangeButton= true
      :removable="true"
      :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a photo'
      }">
    </picture-input>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'

export default {
    props:["exercise"],

  name: 'photoUpload',
  data () {
    return {
    }
  },
  components: {
    PictureInput
  },
  methods: {
    setPhoto (image) {
      console.log('New picture selected!')
      if (image) {
        this.exercise.photo = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  },
}
</script>

<style scoped>
#photoUpload {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
