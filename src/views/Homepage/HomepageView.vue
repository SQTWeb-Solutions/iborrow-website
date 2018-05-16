<template>
<div class="home">
  <home-banner></home-banner>
  <services></services>
  <short-banner></short-banner>
  <home-caption></home-caption>
  <home-counter></home-counter>
  <home-action></home-action>
  <active-borrowing></active-borrowing>
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
import HomeCaption from './Caption'
import HomeCounter from './Counter'
import HomeAction from './Actions'
import ActiveBorrowing from './ActiveBorrowing'
import HomeBanner from './Banner'
export default {
  name: 'home',
  components: {
    HomeNews,
    Testimonial,
    Partners,
    ShortBanner,
    Services,
    HomeCaption,
    HomeCounter,
    HomeAction,
    ActiveBorrowing,
    HomeBanner
  }
}
</script>
