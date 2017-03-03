(function($) {
  $(function() {
    var collapsibles = $('.js-collapsible-on-mobile');
    var state = {};

    function render() {
      var lastState = state;
      state = updateState(state);
      if (state.isMobile === lastState.isMobile) {
        return;
      }

      if (state.isMobile) {
        collapsibles.each(function() {
          $(this).removeClass('in');
        });
      } else {
        collapsibles.each(function() {
          $(this).addClass('in');
        });
      }
    }

    function updateState(lastState) {
      return {
        isMobile: !window.matchMedia("(min-width: 768px)").matches,
      };
    }

    $(window).on('resize', function() {
      window.app.utils.throttle(render, window);
    });

    render();
  })
})(jQuery);
