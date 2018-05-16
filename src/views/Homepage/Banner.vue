<template>
  <div style="background: url('images/slide-1.jpg')" class="home-banner banner-two camera_wrapper">
    <div class="container">
      <h5 >We’r Awesome</h5>
      <h2 >Online Peer 2 Peer Lending <br>Smart &amp; Better Investment Platform.</h2>
      <router-link :to="{ name: 'about-page' }" tag="a" class="btn btn-custom-purple ml-0 mr-0 mt-4">Know More</router-link>
      <div class="play-option">
        <div class="watch-video">
          <h6>Watch</h6>
          <h4>Intro Video</h4>
          <a data-fancybox="" href="#" class="tran3s"><font-awesome-icon icon="play" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home-banner'
}
</script>
<style>
.home-banner {
  background-repeat: no-repeat !important;
  background-position: right center !important;
  background-size:cover !important;
  position: relative;
  height: 550px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  background: #2079ff;
  padding: 100px 0 100px;
}

</style>
