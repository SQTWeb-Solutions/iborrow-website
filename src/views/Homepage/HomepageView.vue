<template>
<div class="home">
  <div class="two-section-wrapper">
    <testimonial></testimonial>
  </div>
  <home-news></home-news>
</div>
</template>

<script>
import HomeNews from './HomeNews'
import Testimonial from './Testimonial'
export default {
  name: 'home',
  components: {
    HomeNews,
    Testimonial
  }
}
</script>
