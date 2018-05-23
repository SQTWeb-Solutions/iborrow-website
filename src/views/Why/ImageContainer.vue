<template>
  <div class="col-md-6 col-xs-12">
    <div class="image-box">
      <slot></slot>
      <div class="opacity tran3s">
        <p class="one" v-if="topText">{{topText}}</p>
        <p class="two" v-if="bottomText">{{bottomText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'image-container',
  props: {
    topText: {
      type: String
    },
    bottomText: {
      type: String
    }
  }
}
</script>
