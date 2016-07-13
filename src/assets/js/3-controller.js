/* globals document, $id */

/**
 * Controller Object
 * @param {Model} model instance
 * @param {View} view instance
 */
function Controller(model, view) {
  this.model = model;
  this.view = view;

  this.MOVETIMERLENGTH = 1000;
  this.moveTimer = null;
  this.timeoutTimer = null;
  this.simonStatus = false; // is app on or off?
}

// setup function for controller of Simon App
Controller.prototype.setup = function() {
  var that = this;
  this.model.startSimon();
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
  this.simonStatus = !this.simonStatus;
  if (this.simonStatus) {
    this.view.disableSimon();
    this._displayMoves(this.model.getMoveList());
  } else {
    if (this.moveTimer) {
      clearInterval(this.moveTimer);
    }
  }
};

// handles strict button click event
Controller.prototype._strictHandler = function() {
  this.view.toggleStrict();
};

// handles simon buttons click event
Controller.prototype._buttonHandler = function(id) {
  this.view.toggleButton(id);
};

Controller.prototype._displayMoves = function(moveList) {
  var that = this;
  var count = 0;
  var turnOn = true;

  this.moveTimer = setInterval(function() {
    if (count === moveList.length) {
      clearInterval(that.moveTimer);
    }
    if (turnOn) {
      turnOn = !turnOn;
      that.view.toggleButton(moveList[count]);
      count++;
    } else {
      turnOn = !turnOn;
      that.view.toggleButton(moveList[count - 1]);
    }
  }, this.MOVETIMERLENGTH);
};
