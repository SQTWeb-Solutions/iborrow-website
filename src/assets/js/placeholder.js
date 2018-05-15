/* eslint-disable */
import jQuery from 'jquery'

function removePlaceholderFunction () {
  if ($('input,textarea').length) {
    $('input,textarea').each(function () {
      $(this).data('holder', $(this).attr('placeholder'))
      $(this).on('focusin', function () {
        $(this).attr('placeholder', '')
      })
      $(this).on('focusout', function () {
        $(this).attr('placeholder', $(this).data('holder'))
      })
    })
  }
}

let removePlaceholder = () => {
  let $document = $(document)
  $document.on('ready', function () {
    (function ($) {
      removePlaceholderFunction()
    })(jQuery)
  })
}

export default removePlaceholder
