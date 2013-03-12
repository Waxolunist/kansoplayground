var stylus = require('stylus')
  , nodes = stylus.nodes
  , utils = stylus.utils

exports = module.exports = plugin;

function sin(unit) {
  return new nodes.Unit(Math.sin(20));  
}

function plugin() {
  return function(style){
    style.define('sin', sin);
  }
}
