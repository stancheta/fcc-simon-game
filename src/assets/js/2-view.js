/* globals $on, $id, $class, $qs, $toggleClass, $hasClass, document,
   $removeAllChildren*/

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
  this.simonClickable = false;

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
    var id = tar.getAttribute('id');
    if ((that.simonClickable === true ||
        (that.simonClickable === false && id.charAt(0) !== 'b')) &&
        tar && $hasClass(tar, 'btn')) {
      callback(id);
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

// enables the simon buttons
View.prototype.enableSimon = function() {
  this.simonClickable = true;
};

// disables the simon buttons
View.prototype.disableSimon = function() {
  this.simonClickable = false;
};

// helper function for toggling events since all buttons toggle something
View.prototype._toggle = function(target, className1, className2) {
  if ($hasClass(target, className1)) {
    $toggleClass(target, className1, className2);
  } else {
    $toggleClass(target, className2, className1);
  }
};

// shows a click effect for pressing a simon button
View.prototype.displaySimonButton = function(id) {
  var that = this;
  this.toggleButton(id);
  setTimeout(function() {
    that.toggleButton(id);
  }, 200);
};

View.prototype.displayMove = function(move) {
  if (move < 10) {
    move = '0' + move;
  }
  var newTextNode = document.createTextNode(move);
  var screen = $qs(document, '#screen>span');
  $removeAllChildren(screen);
  screen.appendChild(newTextNode);
};
