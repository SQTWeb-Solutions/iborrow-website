<template>
<div class="how it works">
  <breadcrumb page="How it works" title="How to use iBorrow"></breadcrumb>
  <div class="service-version-one">
    <div class="container">
      <h2 class="text-center">Get the best of iBorrow in simple steps</h2>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Investors</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Borrowers</a>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">First</div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Second</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'how-it-works',
  components: {
    Breadcrumb
  },
  metaInfo () {
    return {
      title: 'How iBorrow Works'
    }
  }
}
</script>
