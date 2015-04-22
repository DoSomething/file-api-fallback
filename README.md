# File API Fallback

## Introduction

Micro library to provide a suitable fallback for browsers that lack support for the HTML5 File API.

This library depends on the **jQuery** library, as well as the `file-api` non-core detect in the Modernizr library.

[File API Fallback demo](http://tech.dosomething.org/file-api-fallback/).


## Usage

Sample markup:

```html
  <form action="." method="post">
    <div class="container">
      <label class="button">
        <span>Upload a file</span>
        <input id="example" name="example" type="file" aria-label="file browser">
      </label>
    </div>
  </form>
```


1) Add [Modernizr](http://modernizr.com/download/) to your project to feature detect whether the browser supports the HTML5 File API. Make sure to include the `file-api` non-core detect in your custom Modernizr build:

```html
  <script src="src/modernizr.js"></script>
```

2) Include both jQuery and the File API Fallback script source on the page:

```html
  <script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
  <script src="src/FileApiFallback.js"></script>
```

3) Use jQuery to select the file input and if the `Modernizr.filereader` test fails, then pass the selected input along with name of the enclosing container to the `FileApiFallback.init()` method. This method will handle inserting a new interface that can be customized with CSS.

```javascript
  var $input = $('input[type="file"]');

  if (Modernizr.filereader) {
    // Modern browser support for File Reader API, continue
    // with custom file input interface.
  }  
  else {
    FileApiFallback.init($input, '.container');
  }
```



