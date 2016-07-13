/* globals $on, $id, $class, $addClass, $removeClass, document */

/**
 * View Object
 */
function View() {
  // this.$board = $id(document, 'board');
  // this.$boxes = $class(document, 'box');
  this.$appbody = $id(document, 'appbody');
  this.$screen = $id(document, 'screen');
  this.$btng = $id(document, 'btn-g');
  this.$btnr = $id(document, 'btn-r');
  this.$btny = $id(document, 'btn-y');
  this.$btnb = $id(document, 'btn-b');
  this.$strict = $id(document, 'strict');
  this.$play = $id(document, 'play');
  this.$buttons = $class(document, 'btn');
}
