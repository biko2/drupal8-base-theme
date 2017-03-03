(function() {
  if (store.get('show-code')) {
    showCode();
  }

  $('.js-toggle-code').click(toggleCodeVisibility);

  function showCode() {
    $('.codeBlock').addClass('is-visible');
    store.set('show-code', true);
  }

  function hideCode() {
    $('.codeBlock').removeClass('is-visible');
    store.set('show-code', false)
  }

  function toggleCodeVisibility(event) {
    event.preventDefault();

    if (store.get('show-code')) {
      hideCode();
    } else {
      showCode();
    }

  }
})();
