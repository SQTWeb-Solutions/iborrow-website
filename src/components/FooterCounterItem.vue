<template>
  <li><h3><span class="p-color"><countTo :startVal="start" :endVal="stop" :duration="speed" suffix="+"></countTo></span> {{text}}</h3></li>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  name: 'footer-counter-item',
  components: { countTo },
  props: {
    start: {
      type: Number,
      default: 0
    },
    stop: {
      type: Number
    },
    speed: {
      type: Number,
      default: 5000
    },
    text: {
      type: String
    }
  }
}
</script>
