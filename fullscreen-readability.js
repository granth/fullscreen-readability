(function () {
  var keyFocus = function () {
    // wait for Readability to format the page
    if (document.getElementById('readInner')) {
      clearInterval(keyFocusInterval);

      // add a tabindex so we can focus the text
      var h1 = document.getElementsByTagName('h1')[0];
      h1.setAttribute('tabindex', -1);
      h1.focus();
    }
  };

  var keyFocusInterval = window.setInterval(keyFocus, 100);
})();
