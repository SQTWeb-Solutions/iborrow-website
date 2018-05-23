<template>
  <div class="single-block">
    <div class="icon color-one" :class="{'middle-block': middle}"><slot/></div>
    <h5 ><a :href="`${applicationUrl}/${link}`" class="tran3s">{{title}}</a></h5>
    <p >{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'single-block',
  data () {
    return {
      applicationUrl: process.env.VUE_APP_APPLICATION_URL
    }
  },
  props: {
    description: {
      type: String
    },
    link: {
      type: String
    },
    title: {
      type: String
    },
    middle: {
      type: Boolean
    }
  }
}
</script>
