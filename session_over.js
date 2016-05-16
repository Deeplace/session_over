Drupal.behaviors.userbar = function(context) {
  // Check each 60 seconds if the session is timed out
  setTimeout("check_session_over()", 60000);
};

function check_session_over() {
  $.getJSON(Drupal.settings.session_over.check_url, function(data) {
    if (data.is_active) {
      setTimeout("check_session_over()", 60000);
    }
    else {
      alert(Drupal.t(Drupal.settings.session_over.message));
      document.location = Drupal.settings.session_over.logout_url;
    }
  });
}
