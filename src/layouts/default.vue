<template>
  <transition name="page" mode="out-in">
    <div id="app" class="main-page-wrapper">
      <loading ref="loading"></loading>
      <router-view/>
      <main-footer></main-footer>
    </div>
  </transition>
</template>

<script>
import Loading from '@/components/Loading'
import MainFooter from '@/components/MainFooter'
export default {
  name: 'default',

  data: () => ({
  }),
  metaInfo () {
    return {
      title: 'iBorrow',
      titleTemplate: '%s · iBorrow',
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      bodyAttrs: { class: 'no-transition' },
      noscript: [ { innerHTML: 'This website requires JavaScript.' } ]
    }
  },
  components: {
    Loading,
    MainFooter
  },
  mounted () {
    this.$loading = this.$refs.loading
  }
}
</script>
