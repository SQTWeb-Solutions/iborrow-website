/* eslint-disable */
import jQuery from 'jquery'

require('wowjs')
// WOW animation
function WowAnimation () {
  if ($('.wow').length) {
    var wow = new WOW(
      {
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
      }
    )
    wow.init()
  }
}

let wowAnimation = () => {
  let $document = $(document)
  $document.on('ready', function () {
    (function ($) {
      WowAnimation()
    })(jQuery)
  })
}

export default wowAnimation
