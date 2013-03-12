var nodes = require('/home/cst/Development/node_modules/stylus/lib/nodes');

exports.sin = function(unit) {
  return new nodes.Unit(Math.sin(unit.val));  
}
