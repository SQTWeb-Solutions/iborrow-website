/* eslint-disable */
import jQuery from 'jquery'

function BannerSlider () {
  var banner = $('#theme-main-banner')
  if (banner.length) {
    banner.camera({ // here I declared some settings, the height and the presence of the thumbnails
      height: '47%',
      pagination: false,
      navigation: true,
      thumbnails: false,
      playPause: false,
      pauseOnClick: false,
      autoPlay: true,
      hover: false,
      overlayer: true,
      loader: 'none',
      minHeight: '700px',
      time: 4000
    })
  };
}

let bannerSlider = () => {
  let $document = $(document)
  $document.on('ready', function () {
    (function ($) {
      BannerSlider()
    })(jQuery)
  })
}

export default bannerSlider
