/* globals $rngInt */

/**
 * Model Object
 */
function Model() {
  this.MAXSEQUENCE = 20;
  // stores simon sequence and the place tracker
  this.simonSequence = [];
  this.simonCount = 0;
  this.playerCount = 0;
  // array for converting numbers to rgby
  this.converterArray = ['btn-r', 'btn-g', 'btn-b', 'btn-y'];
}

// creates a new sequence and resets model variables
Model.prototype.startSimon = function() {
  this.createSequence();
  this.simonCount = 0;
  this.playerCount = 0;
};

// creates a simon sequence using a random number generating helper function
Model.prototype.createSequence = function() {
  for (var i = 0; i < this.MAXSEQUENCE; i++) {
    this.simonSequence.push(this.converterArray[$rngInt(0, 4)]);
  }
};

// increments the simon count
Model.prototype.incMove = function() {
  this.simonCount++;
};

// returns a portion of the generated move list
Model.prototype.getMoveList = function() {
  var returnArray = this.simonSequence.slice(0, this.simonCount);
  return returnArray;
};

// compares the playermove to the simon sequence and displays the result
// in a callback when applicable.
Model.prototype.inputPlayerMove = function(move, callback) {
  console.log(this.playerCount);
  if (move === this.simonSequence[this.playerCount]) {
    this.playerCount++;
  } else {
    this.playerCount = 0;
    callback('error');
  }

  if (this.playerCount === this.simonCount) {
    this.playerCount = 0;
    callback('success');
  }
};
