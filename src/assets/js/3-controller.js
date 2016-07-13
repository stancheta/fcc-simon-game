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

// setup function for controller of Simon App
Controller.prototype.setup = function() {
  var that = this;
  this.view.setAppEvents(function(id) {
    that.buttonHandler(id);
  });
};

// button handler for all click events
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

// handles play button click event
Controller.prototype._playHandler = function() {
  this.view.togglePlay();
};

// handles strict button click event
Controller.prototype._strictHandler = function() {
  this.view.toggleStrict();
};

// handles simon buttons click event
Controller.prototype._buttonHandler = function(id) {
  this.view.toggleButton(id);
};
