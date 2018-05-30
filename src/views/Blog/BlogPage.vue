<template>
<div class="blog">
  <breadcrumb page="News & Blog" title="iBorrow News & Blog"></breadcrumb>
  <div class="our-blog blog-v1">
    <div class="container">
      <div class="blog-masonary row">
        <blog-list ></blog-list>
        <blog-list ></blog-list>
        <blog-list ></blog-list>
        <blog-list ></blog-list>
        <blog-list ></blog-list>
      </div>

      <pagination></pagination>
    </div>
  </div>
</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import BlogList from './BlogList'
import Pagination from './Pagination'

export default {
  name: 'blog',
  components: {
    Breadcrumb,
    Pagination,
    BlogList
  },
  metaInfo () {
    return {
      title: 'News & Blog'
    }
  }
}
</script>
