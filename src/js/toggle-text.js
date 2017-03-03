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
