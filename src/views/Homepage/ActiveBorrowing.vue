<template>
  <div class="our-portfolio">
    <div class="container">
      <div class="theme-title">
        <h6>Trending Requests</h6>
        <h2>Active request on the platform</h2>
        <a href="#" class="tran3s">See All Requests</a>
      </div>
    </div>

    <div class="wrapper">
      <div class="row">
        <div class="portfolio-slider">
          <carousel :scrollPerPage="true" :perPageCustom="[[480, 1], [768, 2], [996, 3], [1024, 4]]">
            <slide>
              <loan-item></loan-item>
            </slide>
            <slide>
              <loan-item></loan-item>
            </slide>
            <slide>
              <loan-item></loan-item>
            </slide>
            <slide>
              <loan-item></loan-item>
            </slide>
          </carousel>
        </div> <!-- /.portfolio-slider -->
      </div> <!-- /.row -->
    </div> <!-- /.wrapper -->
  </div>
</template>

<script>
import LoanItem from '@/components/LoanItem'
export default {
  name: 'active-borrowings',
  components: {
    LoanItem
  }
}
</script>
