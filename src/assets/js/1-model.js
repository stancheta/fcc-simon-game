/* globals $rngInt */

/**
 * Model Object
 */
function Model() {
  this.MAXSEQUENCE = 25;
  // stores simon sequence and the place tracker
  this.simonSequence = [];
  this.simonCount = 0;

  // array for converting numbers to rgby
  this.converterArray = ['btn-r', 'btn-g', 'btn-b', 'btn-y'];
}

Model.prototype.startSimon = function() {
  this.createSequence();
  this.simonCount = 0;
};

Model.prototype.createSequence = function() {
  for (var i = 0; i < this.MAXSEQUENCE; i++) {
    this.simonSequence.push(this.converterArray[$rngInt(0, 4)]);
  }
  // console.log(this.simonSequence + ' ' + this.simonSequence.length);
};

Model.prototype.getMoveList = function() {
  var returnArray = this.simonSequence.slice(0, this.simonCount + 1);
  return returnArray;
};
