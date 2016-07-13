/* globals $on, $id, $class, $qs, $toggleClass, $hasClass, document */

/**
 * View Object
 */
function View() {
  // shortcuts for all ids, important classes
  this.$appbody = $id(document, 'app-body');
  this.$screen = $id(document, 'screen');
  this.$btng = $id(document, 'btn-g');
  this.$btnr = $id(document, 'btn-r');
  this.$btny = $id(document, 'btn-y');
  this.$btnb = $id(document, 'btn-b');
  this.$strict = $id(document, 'strict');
  this.$play = $id(document, 'play');
  this.$buttons = $class(document, 'btn');

  // variables that handle state of view
  this.appClickable = true;

  // dictionary for btn colors (ex. btn-r)
  this.colorDict = {
    r: 'red',
    g: 'green',
    b: 'blue',
    y: 'yellow'
  };
}

// sets app click event, uses deferred click event model
View.prototype.setAppEvents = function(callback) {
  var that = this;
  $on(this.$appbody, 'click', function(e) {
    var tar = e.target;
    if (that.appClickable === true && tar && $hasClass(tar, 'btn')) {
      callback(tar.getAttribute('id'));
    }
  });
};

// sets click event for play button, toggles icon
View.prototype.togglePlay = function() {
  var playIcon = $qs(document, '#play>i');
  this._toggle(playIcon, 'fa-play', 'fa-stop');
};

// sets click event for strict button, toggles indicator color
View.prototype.toggleStrict = function() {
  var strictIndicator = $qs(document, '#strict>i');
  this._toggle(strictIndicator, 'indicator-off', 'indicator-on');
};

// sets click event for simon says buttons, toggles button color
View.prototype.toggleButton = function(id) {
  var workingButton = $id(document, id);
  var buttonColor = this.colorDict[id.split('-')[1]];
  this._toggle(workingButton, buttonColor, 'bright-' + buttonColor);
};

// helper function for toggling events since all buttons toggle something
View.prototype._toggle = function(target, className1, className2) {
  if ($hasClass(target, className1)) {
    $toggleClass(target, className1, className2);
  } else {
    $toggleClass(target, className2, className1);
  }
};
