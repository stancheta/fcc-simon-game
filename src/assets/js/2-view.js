/* globals $on, $id, $class, $qs, $toggleClass, $hasClass, document */

/**
 * View Object
 */
function View() {
  // this.$board = $id(document, 'board');
  // this.$boxes = $class(document, 'box');
  this.$appbody = $id(document, 'app-body');
  this.$screen = $id(document, 'screen');
  this.$btng = $id(document, 'btn-g');
  this.$btnr = $id(document, 'btn-r');
  this.$btny = $id(document, 'btn-y');
  this.$btnb = $id(document, 'btn-b');
  this.$strict = $id(document, 'strict');
  this.$play = $id(document, 'play');
  this.$buttons = $class(document, 'btn');

  this.AppClickable = true;

  this.colorDict = {
    r: 'red',
    g: 'green',
    b: 'blue',
    y: 'yellow'
  };
}

View.prototype.setAppEvents = function(callback) {
  $on(this.$appbody, 'click', function(e) {
    var tar = e.target;
    callback(tar.getAttribute('id'));
    // console.log(tar.getAttribute('id'));
  });
};

View.prototype.togglePlay = function() {
  var playIcon = $qs(document, '#play>i');

  if ($hasClass(playIcon, 'fa-play')) {
    $toggleClass(playIcon, 'fa-play', 'fa-stop');
  } else {
    $toggleClass(playIcon, 'fa-stop', 'fa-play');
  }
};

View.prototype.toggleStrict = function() {
  var strictIndicator = $qs(document, '#strict>i');

  if ($hasClass(strictIndicator, 'indicator-off')) {
    $toggleClass(strictIndicator, 'indicator-off', 'indicator-on');
  } else {
    $toggleClass(strictIndicator, 'indicator-on', 'indicator-off');
  }
};

View.prototype.toggleButton = function(id) {
  var workingButton = $id(document, id);
  var buttonColor = this.colorDict[id.split('-')[1]];

  if ($hasClass(workingButton, buttonColor)) {
    $toggleClass(workingButton, buttonColor, 'bright-' + buttonColor);
  } else {
    $toggleClass(workingButton, 'bright-' + buttonColor, buttonColor);
  }
};
