# File API Fallback

Micro library to provide a suitable fallback for browsers that lack support for the HTML5 File API.

This library depends on the **jQuery** library, as well as the `file-api` non-core detect in the Modernizr library.

Example use:

`````javascript

// Use jQuery to locate the file input button within a form.
var $button = $('.button');

// Next, use Modernizr to check whether the browser supports 
// the HTML5 File API. If it does, continue with your own processing,
// otherwise, use the FileApiFallback script.
if (Modernizr.filereader) {
  // Browser has support for File API, so do your thang!
}
else {
  FileApiFallback.init($button, '.container');
}

`````
