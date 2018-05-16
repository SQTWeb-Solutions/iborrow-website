<template>
<div class="theme-counter-styleTwo">
  <div class="container">
    <ul class="clearfix">
      <li class="float-left">
        <p>Total Loans</p>
        <h2 class="number"><span class="timer"><countTo :startVal="0" :endVal="100500" :duration="1000" prefix="₦"></countTo></span></h2>
      </li>
      <li class="float-left">
        <p>Pending Loans</p>
        <h2 class="number"><span class="timer"><countTo :startVal="0" :endVal="1500" :duration="1000" prefix="₦"></countTo></span></h2>
      </li>
      <li class="float-left">
        <p>Businesses</p>
        <h2 class="number"><span class="timer"><countTo :startVal="0" :endVal="1200" :duration="1000" suffix="+"></countTo></span></h2>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import countTo from 'vue-count-to'
export default {
  name: 'home-counter',
  components: {
    countTo
  }
}
</script>
