<template>
<div class="about">
  <breadcrumb page="404 Error" title="Not Found"></breadcrumb>
  <div class="contact-us">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2 text-center">
          <img src="@/assets/images/error-404.svg" style="max-height:200px" class="mb-2" />
          <h2>Page/Resource Not Found</h2>
          <h5>We could not find the page you are looking for. This happens because you followed a broken link or the link does not exist on our server.</h5>
          <a href="/" class="btn-custom-purple mt-3">Back to home</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'not-found-view',
  components: {
    Breadcrumb
  },
  metaInfo () {
    return {
      title: 'Error 404'
    }
  }
}
</script>
