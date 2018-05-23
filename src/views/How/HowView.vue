<template>
<div class="how it works">
  <breadcrumb page="How it works" title="How to use iBorrow"></breadcrumb>
  <div class="about-text">
    <div class="container">
      <div class="title">
        <h6>How iBorrow Works</h6>
        <h2 class="mb-4">Get the best of iBorrow in simple steps</h2>
      </div>
      <how-tab></how-tab>
    </div>
  </div>
</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import HowTab from './HowTab'
export default {
  name: 'how-it-works',
  components: {
    Breadcrumb,
    HowTab
  },
  metaInfo () {
    return {
      title: 'How iBorrow Works'
    }
  }
}
</script>
