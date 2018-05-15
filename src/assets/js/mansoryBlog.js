/* eslint-disable */
import masonry from 'masonry-layout'
// Masonary Gallery
function MasonaryBlog () {
  if ($('.blog-masonary').length) {
    $('.blog-masonary').masonry({
    // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      // use element for option
      columnWidth: '.grid-sizer',
      percentPosition: true
    })
  }
}

let masonryBlog = () => {
  let $document = $(document)
  $document.on('load', function () {
    (function ($) {
      MasonaryBlog()
    })(jQuery)
  })
}

export default masonryBlog
