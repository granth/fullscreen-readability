This is an extension to [Readability][] for fullscreen viewing.

* it hides the Readability tools (hover to reveal)
* it makes a minimal scrollbar

To use, add the [bookmarklet][] to your bookmarks. It's the Readability
bookmarklet, with extra CSS (for the tools and scrollbar) and JavaScript (to
fix keyboard focus).

The [Bookmarks Bar Keyboard Shortcuts extension][bookmarks-extension] for
Chrome makes it easy to use the bookmarklet with the keyboard.

[Readability]: http://lab.arc90.com/experiments/readability/
[bookmarklet]: javascript:(function(){readStyle='style-apertura';readSize='size-x-large';readMargin='margin-medium';_readability_script=document.createElement('SCRIPT');_readability_script.type='text/javascript';_readability_script.src='http://lab.arc90.com/experiments/readability/js/readability.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(_readability_script);_fullscreen_script=document.createElement('SCRIPT');_fullscreen_script.type='text/javascript';_fullscreen_script.src='http://github.com/granth/fullscreen-readability/raw/master/fullscreen-readability.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(_fullscreen_script);_readability_css=document.createElement('LINK');_readability_css.rel='stylesheet';_readability_css.href='http://lab.arc90.com/experiments/readability/css/readability.css';_readability_css.type='text/css';_readability_css.media='all';document.getElementsByTagName('head')[0].appendChild(_readability_css);_fullscreen_css=document.createElement('LINK');_fullscreen_css.rel='stylesheet';_fullscreen_css.href='http://github.com/granth/fullscreen-readability/raw/master/fullscreen-readability.css';_fullscreen_css.type='text/css';_fullscreen_css.media='all';document.getElementsByTagName('head')[0].appendChild(_fullscreen_css);_readability_print_css=document.createElement('LINK');_readability_print_css.rel='stylesheet';_readability_print_css.href='http://lab.arc90.com/experiments/readability/css/readability-print.css';_readability_print_css.media='print';_readability_print_css.type='text/css';document.getElementsByTagName('head')[0].appendChild(_readability_print_css);})();
[bookmarks-extension]: https://chrome.google.com/extensions/detail/omgmmhpgegfcifjmhpenmjpignkegpal?hl=en
