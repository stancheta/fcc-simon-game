/* globals document, $id */

/**
 * Controller Object
 * @param {Model} model instance
 * @param {View} view instance
 */
function Controller(model, view) {
  this.model = model;
  this.view = view;
}

Controller.prototype.setup = function() {
  var that = this;
  this.view.setAppEvents(function(id) {
    that.buttonHandler(id);
  });
};

Controller.prototype.buttonHandler = function(id) {
  var that = this;
  if (id === 'play') {
    that._playHandler();
  } else if (id === 'strict') {
    that._strictHandler();
  } else {
    that._buttonHandler(id);
  }
};

Controller.prototype._playHandler = function() {
  this.view.togglePlay();
};

Controller.prototype._strictHandler = function() {
  this.view.toggleStrict();
};

Controller.prototype._buttonHandler = function(id) {
  this.view.toggleButton(id);
};
