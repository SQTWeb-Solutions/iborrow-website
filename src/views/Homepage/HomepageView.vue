<template>
<div class="home">
  <div style="height: 400px;background: url('images/slide-1.jpg')">
  HEllo there, here we will be having the slider comonent
  </div>
  <services></services>
  <short-banner></short-banner>
  <caption></caption>
  <div class="theme-counter-styleTwo">
    <div class="container">
      <ul class="clearfix">
        <li class="float-left">
          <p>Total Invest</p>
          <h2 class="number">$<span class="timer" data-from="0" data-to="86543" data-speed="1000" data-refresh-interval="5">0</span></h2>
        </li>
        <li class="float-left">
          <p>Yearly Reveneu</p>
          <h2 class="number">$<span class="timer" data-from="0" data-to="16753" data-speed="1000" data-refresh-interval="5">0</span></h2>
        </li>
        <li class="float-left">
          <p>Growth Ratio</p>
          <h2 class="number"><span class="timer" data-from="0" data-to="73" data-speed="1000" data-refresh-interval="5">0</span>%</h2>
        </li>
      </ul>
    </div>
  </div>
  <div class="two-section-wrapper">
    <testimonial></testimonial>
    <partners></partners>
  </div>
  <home-news></home-news>
</div>
</template>

<script>
import HomeNews from './HomeNews'
import Testimonial from './Testimonial'
import Partners from '@/components/Partners'
import ShortBanner from './ShortBanner'
import Services from './Services'
import Caption from './Caption'
export default {
  name: 'home',
  components: {
    HomeNews,
    Testimonial,
    Partners,
    ShortBanner,
    Services,
    Caption
  }
}
</script>
