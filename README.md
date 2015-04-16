# File API Fallback

Micro library to provide a suitable fallback for browsers that lack support for the HTML5 File API.



Example use:

`````javascript
 if (Modernizr.filereader) {
  // Browser has support for File API, so do your thang!
}
else {
  var fallback = new FileApiFallback('button', 'container');
}
`````
