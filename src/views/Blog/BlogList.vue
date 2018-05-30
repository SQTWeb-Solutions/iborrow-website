<template>
  <div class="grid-item">
    <div class="single-blog">
      <div class="image"><img src="@/assets/images/home/2.jpg" alt=""></div>
      <div class="text">
        <h6>New Category</h6>
        <h5><router-link tag="a" :to="{ name: 'blog-details', params: { slug: 'news-details' } }" class="tran3s color-one"><span>iBorrow news and updates win the future</span></router-link></h5>
        <router-link :to="{ name:'blog-details', params: { slug: 'news-details' } }" class="tran3s"><i class="flaticon-arrows" aria-hidden="true"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog-list'
}
</script>
