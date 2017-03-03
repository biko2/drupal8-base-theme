(function() {
  function throttle(method, scope) {
    clearTimeout(method._tId);
    method._tId = setTimeout(function() {
        method.call(scope);
    }, 16);
  }

  window.app = window.app || {};
  window.app.utils = {
    throttle: throttle
  };
})();

(function($) {
  $(function () {
    function toggleMenu() {
      $('.js-sidebar-toggle').toggleClass('is-active');
      $('body').toggleClass('has-sidebar');
      $('.js-sidebar').toggleClass('is-active');
    }

    // Oculta el menú si está desplegado
    $('html').on('click', '.has-sidebar', function () {
      toggleMenu();
    });

    $('.js-sidebar-toggle').click(function(e) {
      toggleMenu();
      // Para evitar que se propague al evento del html
      e.stopPropagation();
    });

    $('.js-sidebar').click(function(e) {
      e.stopPropagation();
    })
  });
})(jQuery);

(function ($) {
  'use strict';

  function getItems($parent) {
    var items = [];

    $parent.find('.js-popup-slide').each(function () {
      items.push({
        src: $(this)
      });
    });
    return items;
  }

  function showPopup($container, current) {
    var itemNum = $(current).data('slick-index');
    createMagnificPopup($container, itemNum);
  }

  function createMagnificPopup($container, itemNum) {
    $.magnificPopup.open({
      items: getItems($container),
      gallery: {
        enabled: true
      },
      callbacks: {

        buildControls: function() {
          // re-appends controls inside the main container
          if (typeof this.arrowLeft != 'undefined' && typeof this.arrowRight != 'undefined') {
            this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
          }
        }

      }
    }, itemNum);
  }

  $(function () {
    $('.js-popup-slider').each(function () {
      var $container = $(this);
      $container.on('click', '.js-popup-link', function () {
        showPopup($container, this);
      });
    });

    $('.js-popup').magnificPopup({
      type: 'ajax'
    });

    $('.js-popup-slider-ajax').find('.js-popup-slider-ajax-slide').each(function () {
      var slide = $(this);
      var itemNum = slide.data('slide-index');
      var link = $('.js-snippet-link', slide);

      link.on('click', function (e) {
        e.preventDefault();
        var container = $(".js-popup-slider-content");
        if (typeof container.data('popup-loaded') === "undefined") {
          container.load(link.attr('href'), function () {
            createMagnificPopup(container, itemNum);
            container.data('popup-loaded', "1");
          });
        } else {
          createMagnificPopup(container, itemNum);
        }
      });
    });
  });
})(jQuery);
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

(function($) {
  $(function () {

    var url = document.location.toString();
    if (url.match('#')) {
      $('.tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    }

    // Actualizamos el hash, para que si recargan la página no perdamos la pestaña.
    $('.tabs a').on('shown.bs.tab', function (e) {
      // window.location.hash = e.target.hash;
    })

  });
})(jQuery);

(function($) {
  $(function () {
    $('.js-toggle-text').click(function(e) {
      var oldText = $(this).text();
      var newText = $(this).data('alt-text');
      $(this).data('alt-text', oldText);
      $(this).text(newText);
    });

    $('.js-long-description').click(function(e) {
      var description = $($(this).attr('href'));
      if (description.hasClass('is-collapsed')) {
        var childrenHeight = description.children().first().height();
        description.css('max-height', childrenHeight);
      }
      else {
        description.css('max-height', '');
      }
      description.toggleClass('is-collapsed');
      e.preventDefault();
    });

  });
})(jQuery);

(function ($) {
  'use strict';

  $(function() {
    $('.js-social-share').click(function(e) {
      e.preventDefault();
      var popUp = window.open($(this).attr("href"),'sharer','toolbar=0,status=0,width=648,height=395');
      popUp.focus();
      return false;

    });
  });
})(jQuery);