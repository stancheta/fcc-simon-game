/* global Model, View, Controller, $on, $id, document, $*/

/**
 *  MVC object for the Simon Says Game
 */
function Simon() {
  this.model = new Model();
  this.view = new View();
  this.controller = new Controller(this.model, this.view);
}

var simon = new Simon();

// allows setup function to be call after DOM has been built
function setup() {
  simon.controller.setup();
}

$on(document, 'DOMContentLoaded', setup);
