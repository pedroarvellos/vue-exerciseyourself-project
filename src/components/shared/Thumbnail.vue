<template>
    <div class="col-md-4">
        <div class="thumbnail" v-show="visible">
            <img src="../../assets/muscle-grow.jpg"  alt="" style="width:100%">
            <div class="caption">
            <h3>Human Body Structure</h3>
            <p><a href="#" class="btn btn-primary" role="button">Read</a>  <a class="btn btn-danger" @click="visible = !visible" role="button">Close</a></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            visible: true
        }
    }
}
</script>

<style scoped>

</style>
