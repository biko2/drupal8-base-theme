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
