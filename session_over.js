(function ($) {

Drupal.behaviors.session_over = {
  attach: function (context, settings) {
    // Check every 60 seconds if the session is timed out
    if (!$('body').hasClass('session-over')) {
      $('body').addClass('session-over');
      var intervalId = setInterval(function () {
        $.getJSON(settings.session_over.checkUrl, function(data) {
          if (!data.is_active) {
            clearInterval(intervalId);
            alert(settings.session_over.message);
            document.location = settings.session_over.logoutUrl;
          }
        });
      }, 60000);
    }
  }
};

}) (jQuery);
