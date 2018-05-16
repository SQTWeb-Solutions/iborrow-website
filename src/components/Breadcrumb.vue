<template>
<div class="inner-page-banner">
  <div class="opacity">
    <h2>{{title}}</h2>
    <ul>
      <li><router-link :to="{ name: 'landing-page' }" tag="a">Home</router-link></li>
      <li>/</li>
      <li>{{page}}</li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  name: 'breadcrumb',
  props: {
    title: {
      type: String
    },
    page: {
      type: String
    }
  }
}
</script>
