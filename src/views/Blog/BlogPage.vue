<template>
<div class="about">
  <breadcrumb page="News & Blog" title="iBorrow News & Blog"></breadcrumb>
  blog page
</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'blog',
  components: {
    Breadcrumb
  },
  metaInfo () {
    return {
      title: 'News & Blog'
    }
  }
}
</script>
