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