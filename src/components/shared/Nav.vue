<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link :to="{ name: 'home' }"><a class="navbar-brand">ExerciseYourself</a></router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link :to="{ name: 'home' }"><a>Articles</a></router-link></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Body Parts <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li v-for="bodyPart of bodyParts" :key="bodyPart.name">
                <a><router-link :to="{ name: 'exercise-list', params: {idBodyPart: bodyPart.id}}">{{ bodyPart.name }}</router-link></a>
            </li>
          </ul>
        </li>
        <li><router-link :to="{ name: 'exercise-add' }"><a>New Exercise</a></router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="https://www.linkedin.com/in/pedroarvellos/" target="_blank">Linkedin</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="https://github.com/pedroarvellos" target="_blank">GitHub</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
export default {
  props: ["bodyParts"]
};
</script>

<style scoped>
</style>
