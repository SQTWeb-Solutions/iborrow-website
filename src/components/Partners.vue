<template>
  <div class="partent-logo-section">
      <div class="container">
        <carousel :scrollPerPage="true" :perPageCustom="[[480, 2], [768, 3], [992, 5]]">
          <slide>
            <div class="item"><img src="@/assets/images/logo/p-2.png" alt="logo"></div>
          </slide>
          <slide>
            <div class="item"><img src="@/assets/images/logo/p-2.png" alt="logo"></div>
          </slide>
          <slide>
            <div class="item"><img src="@/assets/images/logo/p-2.png" alt="logo"></div>
          </slide>
          <slide>
            <div class="item"><img src="@/assets/images/logo/p-2.png" alt="logo"></div>
          </slide>
          <slide>
            <div class="item"><img src="@/assets/images/logo/p-2.png" alt="logo"></div>
          </slide>
        </carousel>
      </div>
  </div>
</template>

<script>
export default {
  name: 'partners'
}
</script>
