(function($) {
  function update(fixable) {
    var offset = fixable.$original.offset();
    if ($(window).scrollTop() >= offset.top) {
      showFixed(fixable);
    } else {
      showOriginal(fixable);
    }
  }

  function showFixed(fixable) {
    fixable.$fixed.show();
    fixable.$original.css('visibility', 'hidden');
  }

  function showOriginal(fixable) {
    fixable.$fixed.hide();
    fixable.$original.css('visibility', 'visible');
  }

  $(function () {
    var $elements = $('.js-sticky').map(function() {
      return {
        $original: $(this),
        $fixed: $(this).clone()
      };
    }).each(function () {
      this.$fixed.insertAfter(this.$original).addClass('u-fixed').hide();
    });

    function updateAll() {
      $elements.each(function() {
        update(this);
      });
    }

    $(window).on('scroll resize', function() {
      window.app.utils.throttle(updateAll, window);
    });

  });
})(jQuery);
