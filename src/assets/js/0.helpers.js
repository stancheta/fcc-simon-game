// helper function for event listener
function $on(target, type, callback) {
  target.addEventListener(type, callback, false);
}

// helper function for get elements by class name
function $class(target, className) {
  return target.getElementsByClassName(className);
}

// helper function for get element by id
function $id(target, id) {
  return target.getElementById(id);
}

// helper function for query selector (first element found)
function $qs(target, selectors) {
  return target.querySelector(selectors);
}

// helper function for query selector all (all element found)
function $qsa(target, selectors) {
  return target.querySelectorAll(selectors);
}

// helper function to add classes
function $addClass(target, className) {
  target.classList.add(className);
}

function $hasClass(target, className) {
  if (target.classList) {
    return target.classList.contains(className);
  }
}

// helper function to remove classes
function $removeClass(target, className) {
  if (target.classList) {
    target.classList.remove(className);
  }
}

// helper function for toggling classes
function $toggleClass(target, oldClassName, newClassName) {
  $removeClass(target, oldClassName);
  $addClass(target, newClassName);
}

// helper function to remove all children from a node
function $removeAllChildren(target) {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
}
