# File API Fallback

## Introduction

Micro library to provide a suitable fallback for browsers that lack support for the HTML5 File API.

This library depends on the **jQuery** library, as well as the `file-api` non-core detect in the Modernizr library.

[File API Fallback demo](http://tech.dosomething.org/file-api-fallback/).


## Usage

1. Add Modernizr to your project to feature detect whether the browser supports the HTML5 File API. Make sure to include the `file-api` non-core detect:

```
  <script src="src/modernizr.js"></script>
```

1. Include both jQuery and the File API Fallback script source on the page:

```
  <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
  <script src="src/FileApiFallback.js"></script>
```

1. Use jQuery to select the file input and if the `Modernizr.filereader` test fails, then pass the selected input along with name of the enclosing container to the `FileAPIFallback.init()` method:

```
  var $input = $('input[type="file"]');

  if (Modernizr.filereader) {
    // Modern browser support for File Reader API, continue
    // with custom file input interface.
  }  
  else {
    FileApiFallback.init($input, '.container');
  }
```





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
