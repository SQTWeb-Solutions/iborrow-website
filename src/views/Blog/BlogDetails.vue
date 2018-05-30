<template>
<div class="blog">
  <breadcrumb page="News & Blog" title="Blog Details Page"></breadcrumb>
  <div class="blog-details blog-v3">
    <div class="container">
      <div class="wrapper">
        <div class="blog-main-post">
          <img src="@/assets/images/home/2.jpg" alt="">
          <h6>Rashed Ka.</h6>
          <h3>Challange yourself to win the future</h3>
          <p>This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too </p> <br>
          <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</p>
          <h2>A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.</h2>
          <h5>This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. </h5>
          <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection ridicule. We quickly learn to fear and thus automatically.</p>
        </div>
        <div class="tag-option clearfix">
          <ul class="float-left">
            <li>Tag:</li>
            <li><a href="" class="tran3s">Travel,</a></li>
            <li><a href="" class="tran3s">Advanture,</a></li>
            <li><a href="" class="tran3s">Landscape</a></li>
          </ul>
          <ul class="float-right">
            <li>Share:</li>
            <li><a href="" class="tran3s"><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
            <li><a href="" class="tran3s"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
            <li><a href="" class="tran3s"><font-awesome-icon :icon="['fab', 'google-plus']" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import BlogList from './BlogList'
import Pagination from './Pagination'

export default {
  name: 'blog-details',
  components: {
    Breadcrumb,
    Pagination,
    BlogList
  },
  metaInfo () {
    return {
      title: 'Blog Details Page'
    }
  }
}
</script>
