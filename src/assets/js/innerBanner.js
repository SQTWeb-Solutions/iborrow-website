/* eslint-disable */
import jQuery from 'jquery'
import ripples from 'jquery.riples'
// Inner Banner
function InnerBanner () {
  if ($('.inner-page-banner').length) {
    $('.inner-page-banner').ripples({
      resolution: 312,
      dropRadius: 10,
      perturbance: 0.001
    })
  }
}

let innerBanner = () => {
  let $document = $(document)
  $document.on('load', function () {
    (function ($) {
      InnerBanner()
    })(jQuery)
  })
}

export default innerBanner
