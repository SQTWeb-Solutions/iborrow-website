<template>
<div class="home-blog-section">
  <div class="container">
    <div class="theme-title text-center">
      <h6>Our News</h6>
      <h2>News from iBorrow</h2>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <div class="single-blog color-one">
          <h5><router-link tag="a" :to="{ name: 'blog-details', params: { slug: 'news-details' } }" class="tran3s">Challange yourself to win the future</router-link></h5>
          <p>Their testimonial videos aren't production quality, but they get message across, cover useful & relevant information with tips.</p>
          <router-link tag="a" :to="{ name: 'blog-details', params: { slug: 'news-details' } }"  class="tran3s hvr-icon-wobble-horizontal">More Details <i class="flaticon-arrows" aria-hidden="true"></i></router-link>
        </div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="single-blog color-two">
          <h5><router-link tag="a" :to="{ name: 'blog-details', params: { slug: 'news-details' } }"  class="tran3s">Challange yourself to win the future</router-link></h5>
          <p>Their testimonial videos aren't production quality, but they get message across, cover useful & relevant information with tips.</p>
          <router-link tag="a" :to="{ name: 'blog-details', params: { slug: 'news-details' } }"  class="tran3s hvr-icon-wobble-horizontal">More Details <i class="flaticon-arrows" aria-hidden="true"></i></router-link>
        </div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="single-blog color-three">
          <h5><router-link tag="a" :to="{ name: 'blog-details', params: { slug: 'news-details' } }"  class="tran3s">Challange yourself to win the future</router-link></h5>
          <p>Their testimonial videos aren't production quality, but they get message across, cover useful & relevant information with tips.</p>
          <router-link tag="a" :to="{ name: 'blog-details', params: { slug: 'news-details' } }"  class="tran3s hvr-icon-wobble-horizontal">More Details <i class="flaticon-arrows" aria-hidden="true"></i></router-link>
        </div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="single-blog color-four">
          <h5><router-link tag="a" :to="{ name: 'blog-details', params: { slug: 'news-details' } }"  class="tran3s">Challange yourself to win the future</router-link></h5>
          <p>Their testimonial videos aren't production quality, but they get message across, cover useful & relevant information with tips.</p>
          <router-link tag="a" :to="{ name: 'blog-details', params: { slug: 'news-details' } }"  class="tran3s hvr-icon-wobble-horizontal">More Details <i class="flaticon-arrows" aria-hidden="true"></i></router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// TODO: Select news from the adatabase which are the featured ones
export default {
  name: 'home-news'
}
</script>
