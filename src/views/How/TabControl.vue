<template>
  <ul class="nav nav-pills nav-tab-custom mb-3" id="pills-tab" role="tablist">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'tab-control'
}
</script>

<style scss scoped>
.nav-tab-custom .nav-link {
  padding: 1rem 3rem;
  font-size: 20px;
  border-bottom: solid 5px;
  background: none !important;
  color:#000 !important;
  border-radius:0 !important;
  border-bottom-color: #aaa;
}

.nav-tab-custom .nav-link.active {
  border-bottom-color: #652392;
}

@media only screen and (max-width: 768px) {
  .nav-tab-custom {
    width:100% !important;
  }
}
</style>
