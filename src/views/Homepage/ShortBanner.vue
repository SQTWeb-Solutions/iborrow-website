<template>
  <div class="short-banner">
    <div class="opacity">
      <div class="container">
        <h2>Make your business 10x faster <br>on iBorrow.</h2>
        <div class="row">
          <div class="col-12 mt-5">
            <a :href="applicationUrl" class="btn btn-custom-purple">Become an Investor</a>
            <a :href="applicationUrl" class="btn btn-custom">Start Borrowing</a>
          </div>
        </div>
      </div> <!-- /.container -->
    </div> <!-- /.opacity -->
  </div>
</template>

<script>
export default {
  name: 'short-banner',
  data () {
    return {
      applicationUrl: process.env.VUE_APP_APPLICATION_URL
    }
  }
}
</script>
