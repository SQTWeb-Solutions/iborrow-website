<template>
 <div class="testimonial-section">
    <div class="image-box">
      <svg  version="1.1" class="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="854" height="630">
        <clipPath class="clip1">
          <use xlink:href="#shape-one" />
        </clipPath>
        <g clip-path="url(#shape-one)">
          <image width="854" height="630" href="images/5.jpg" class="image-shape">
          </image>
        </g>
      </svg>
    </div>
    <div class="theme-shape-four"></div>
    <div class="container">
      <div class="main-container col-md-6 offset-md-6">
        <div class="theme-title">
          <h6>Testimonials</h6>
          <h2>What happy people <i>Say about us</i></h2>
        </div>
        <div class="testimonial-slider">
          <testimonial-item></testimonial-item>
          <testimonial-item></testimonial-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialItem from '@/components/TestimonialItem'
export default {
  name: 'testimonial',
  components: {
    TestimonialItem
  }
}
</script>
