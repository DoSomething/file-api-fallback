/**
 * Provides a fallback for customized file input if the File API is not supported.
 */

var FileApiFallback = {

  component: {
    $container: null,
    $fileInterface: null,
    $indicator: null,
    $input: null,
    fileName: null,
    id: null
  },


  init: function ($input, container) {
    // console.log($input);
    // console.log(container);

    this.component.$input = $input;
    this.component.$container = this.component.$input.closest(container);

    this.activateInput(this.component.$input);
  },


  /**
   * Activate the input to watch for file input change event.
   * @param  {jQuery}  $input Specific file input.
   * 
   * @return void
   */
  activateInput: function ($input) {
    var _this = this;

    $input.on('change', function (event) {
      _this.component.fileName = _this.getFileName(event.target.value);

      if (_this.component.$fileInterface) {
        _this.updateFileSelection();
      }
      else {
        _this.buildUpatedComponent();
      }

      console.log(_this);
    });
  },


  buildUpatedComponent: function () {
    var template = '';
    var data = {
      // 'id': this.component.id,
      'classes': 'button', //this.component.classes.join(' '),
      'file': this.component.fileName    
    };

    template += '<div class="file-selection">';
    template += '<p class="file-selection__indicator"><strong>Selected File:</strong> <span class="file-selection__name">' + data.file +'</span></p>';
    template += '<label class="' + data.classes + '"><span>Change file</span></label>';
    template += '</div>';
    $markup = $(template);


    this.component.$input.detach();
    $markup.find('label').append(this.component.$input);

    this.emptyContainer();
    this.component.$indicator = $markup.find('.file-selection__name');
    this.component.$fileInterface = $markup;
    this.insertUpdatedComponent();
    
    console.log($markup.html());
  },


  /**
   * Remove markup from the specified container.
   * Clear it out to insert new interface.
   * 
   * @return void
   */
  emptyContainer: function () {
    this.component.$container.html('');
  },


  /**
   * Get the file name for the uploaded file.
   * @param  {string}  path  Full path string for uploaded image.
   * 
   * @return string          Extracted file name from the full path.
   */
  getFileName: function (path) {
    var start = path.indexOf("fakepath\\");

    if (start >= 0) {
      return path.substring(start + 9, path.length); // 9 is length of "fakepath\"
    }

    return path;
  },


  /**
   * Insert the new interface into the specified container.
   * 
   * @return void
   */
  insertUpdatedComponent: function () {
    this.component.$container.prepend(this.component.$fileInterface);
  },


  /**
   * Update just the file name displayed in the new file api interface.
   * 
   * @return void
   */
  updateFileSelection: function () {
    this.component.$indicator.text(this.component.fileName);
  }  

};
