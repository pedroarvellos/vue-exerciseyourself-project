<template>
    <div class="col-md-4">
        <div class="thumbnail" v-show="visible">
            <img src="../../assets/muscle-grow.jpg"  alt="" style="width:100%">
            <div class="caption">
            <h3>Human Body Structure</h3>
            <p><a href="#" class="btn btn-primary" role="button" data-toggle="modal" data-target="#myModal">Read</a>  <a class="btn btn-danger" @click="visible = !visible" role="button">Close</a></p>
            </div>
        </div>
        

        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Lorem Ipsum</h4>
                </div>
                <div class="modal-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit tortor enim, non tempor diam posuere vel. Cras pharetra ex mi, ac porttitor elit imperdiet id. Praesent id metus consectetur, feugiat ex in, semper erat. Fusce vulputate vestibulum lorem id feugiat. Aenean dapibus at mi nec placerat. Aenean ut mi non nisl ultrices iaculis in vel massa. Ut rutrum magna a tellus rutrum imperdiet a vitae est. Curabitur in ante eros.

Mauris sagittis aliquet elementum. Integer at elit vel nisi vulputate volutpat. Aliquam bibendum massa nisl, eu egestas tortor iaculis vel. Aenean id dignissim sapien, nec pellentesque turpis. Vivamus eu mauris nec erat congue vestibulum in vitae enim. In semper luctus quam vel egestas. Quisque non est posuere, convallis urna non, feugiat magna. Nunc facilisis risus id nunc sagittis, dapibus lobortis eros pulvinar.

Maecenas ultricies mi sed diam gravida varius. Nullam aliquet metus ac dolor sollicitudin, nec pretium augue fringilla. Vestibulum eros metus, faucibus non imperdiet quis, dignissim ut neque. Sed venenatis, ipsum quis ornare imperdiet, mi quam dictum nisl, nec tincidunt nibh ligula non lorem. In gravida mi ut dignissim mollis. Proin ac arcu tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus tristique ex accumsan, scelerisque augue et, volutpat dui. Ut id bibendum augue, sed pretium turpis. Donec ultrices efficitur enim, quis porta libero commodo ac. Phasellus porttitor nunc eget aliquam sollicitudin. Suspendisse et lorem tellus.

Etiam sollicitudin justo nec vehicula scelerisque. Etiam ut nisl sit amet metus elementum tincidunt vitae in metus. Cras varius leo in mi accumsan, nec sollicitudin risus porttitor. Suspendisse at purus ut nibh condimentum venenatis quis at mi. Cras posuere rhoncus nisi eget commodo. Nullam bibendum in augue in fermentum. Morbi tristique lacus in est hendrerit venenatis. Aliquam sed egestas odio. Etiam gravida ante a ipsum vulputate pulvinar. Quisque eu lacinia arcu. Donec a nisi sapien. In hac habitasse platea dictumst.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis sit amet semper nunc. Phasellus pretium vestibulum tellus at euismod. Proin lacinia elit a turpis porttitor pharetra. Etiam dignissim dolor nec est laoreet, nec convallis urna cursus. Integer placerat tortor nec turpis fermentum venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In pretium velit vel ligula aliquet tincidunt eget ut libero. Quisque turpis ante, feugiat quis risus eget, fermentum tristique purus. Donec eget urna semper justo pharetra luctus vel vitae ipsum. Curabitur at rutrum elit. Aenean a egestas magna.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style scoped>

</style>
