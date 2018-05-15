<template>
  <button class="scroll-top tran3s">
    <font-awesome-icon icon="angle-up" />
  </button>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'scroll-up',
  mounted () {
    if ($('.scroll-top').length) {
      // Check to see if the window is top if not then display button
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
          $('.scroll-top').fadeIn()
        } else {
          $('.scroll-top').fadeOut()
        }
      })

      // Click event to scroll to top
      $('.scroll-top').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 1500)
        return false
      })
    }
  }
}
</script>
