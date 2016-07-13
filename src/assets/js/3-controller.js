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
  this.view.setApp();
};
