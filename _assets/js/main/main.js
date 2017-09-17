
// @codekit-prepend "../vendor/modernizr-2.8.3.min.js";

var hideLoader = function() {
	var body = $('body');
    body.removeClass('loader--active');
}

$(document).ready(function() {
	hideLoader();
});


// Register the service worker if available.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js', { scope: '' })
    .then(function(registration) {
      console.log("Service Worker Registered");
    })
    .catch(function(err) {
      console.log("Service Worker Failed to Register", err);
    });
}