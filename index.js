module.exports = hasCanvas;

/**
 * Has canvas?
 *
 * @return {Boolean}
 */

function hasCanvas () {
  var el = document.createElement('canvas');
  return !!(el.getContext && el.getContext('2d'));
};
