'use strict';
(function (root, definition) {
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = definition;
  }
  else {
    this.className = definition;
  }
})(this,

(function () {
  var hasOwn = Object.prototype.hasOwnProperty;
  var toString = Object.prototype.toString;
  var slice = Array.prototype.slice;

  var className = function className() {
    var args = slice.call(arguments);
    if (args.length === 0) {
      return '';
    }

    var res = [], arg;
    for (var i = 0, l = args.length; i !== l; ++i) {
      arg = args[i];
      if (typeof arg === 'string') {
        res = res.concat(arg);
      }
      else if (typeof arg === 'number' && arg > 0) {
        res = res.concat(arg);
      }
      else if (toString.call(arg) === '[object Array]') {
        res = res.concat(className.apply(this, arg));
      }
      else if (typeof arg === 'function') {
        var val = arg();
        if (typeof val === 'string') {
          res = res.concat(val);
        }
      }
      else if (typeof arg === 'object') {
        for (var o in arg) {
          if (hasOwn.call(arg, o)) {
            var tar = arg[o];
            if (typeof tar === 'string') {
              res = res.concat(tar);
            }
            else if (typeof tar === 'number' && tar > 0) {
              res = res.concat(o);
            }
            else if (typeof tar === 'boolean' && tar === true) {
              res = res.concat(o);
            }
            else if (typeof tar === 'function') {
              var val = tar();
              if (typeof val === 'boolean' && val === true) {
                res = res.concat(o);
              }
              else if (typeof val === 'number' && val > 0 ) {
                res = res.concat(o);
              }
              else if (typeof val === 'string'){
                res = res.concat(val);
              }
            }
          }
        }
      }
    }

    return res.join(' ');
  };

  return className;
})()

);