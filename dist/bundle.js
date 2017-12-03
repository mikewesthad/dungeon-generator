(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Dungeon"] = factory();
	else
		root["Dungeon"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.iter_adjacent = iter_adjacent;
exports.iter_2d = iter_2d;
exports.iter_range = iter_range;
exports.intersects = intersects;
exports.array_test = array_test;
exports.add = add;
exports.shift = shift;
exports.shift_left = shift_left;
exports.shift_right = shift_right;

var _const = __webpack_require__(1);

function iter_adjacent(_ref, cb) {
    var _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    cb([x - 1, y]);
    cb([x, y - 1]);
    cb([x + 1, y]);
    cb([x, y + 1]);
}

function iter_2d(size, callback) {
    for (var y = 0; y < size[1]; y++) {
        for (var x = 0; x < size[0]; x++) {
            callback([x, y]);
        }
    }
}

function iter_range(from, to, callback) {
    var fx = void 0,
        fy = void 0,
        tx = void 0,
        ty = void 0;
    if (from[0] < to[0]) {
        fx = from[0];
        tx = to[0];
    } else {
        fx = to[0];
        tx = from[0];
    };
    if (from[1] < to[1]) {
        fy = from[1];
        ty = to[1];
    } else {
        fy = to[1];
        ty = from[1];
    };
    for (var x = fx; x <= tx; x++) {
        for (var y = fy; y <= ty; y++) {
            callback([x, y]);
        }
    }
}

function intersects(pos_1, size_1, pos_2, size_2) {
    return !pos_2[0] > pos_1[0] + size_1[0] || pos_2[0] + size_2[0] < pos_1[0] || pos_2[1] > pos_1[1] + size_1[1] || pos_2[1] + size_2[1] < size_1[1];
}

function array_test(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (test(array[i])) {
            return true;
        }
    }
    return false;
}

function add(p1, p2) {
    return [p1[0] + p2[0], p1[1] + p2[1]];
}

function shift(pos, facing) {
    return add(pos, _const.FACING_TO_MOD[facing]);
}

function shift_left(pos, facing) {
    return shift(pos, (facing - 90 + 360) % 360);
}

function shift_right(pos, facing) {
    return shift(pos, (facing + 90 + 360) % 360);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _FACING_TO_STRING, _FACING_TO_MOD, _FACING_INVERSE, _FACING_MOD_RIGHT, _FACING_MOD_LEFT;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TOP = exports.TOP = 0;
var RIGHT = exports.RIGHT = 90;
var BOTTOM = exports.BOTTOM = 180;
var LEFT = exports.LEFT = 270;

var FACING = exports.FACING = [TOP, RIGHT, BOTTOM, LEFT];

var FACING_TO_STRING = exports.FACING_TO_STRING = (_FACING_TO_STRING = {}, _defineProperty(_FACING_TO_STRING, TOP, 'top'), _defineProperty(_FACING_TO_STRING, RIGHT, 'right'), _defineProperty(_FACING_TO_STRING, BOTTOM, 'bottom'), _defineProperty(_FACING_TO_STRING, LEFT, 'left'), _FACING_TO_STRING);

var FACING_TO_MOD = exports.FACING_TO_MOD = (_FACING_TO_MOD = {}, _defineProperty(_FACING_TO_MOD, TOP, [0, -1]), _defineProperty(_FACING_TO_MOD, RIGHT, [1, 0]), _defineProperty(_FACING_TO_MOD, BOTTOM, [0, 1]), _defineProperty(_FACING_TO_MOD, LEFT, [-1, 0]), _FACING_TO_MOD);

var FACING_INVERSE = exports.FACING_INVERSE = (_FACING_INVERSE = {}, _defineProperty(_FACING_INVERSE, TOP, BOTTOM), _defineProperty(_FACING_INVERSE, RIGHT, LEFT), _defineProperty(_FACING_INVERSE, BOTTOM, TOP), _defineProperty(_FACING_INVERSE, LEFT, RIGHT), _FACING_INVERSE);

var FACING_MOD_RIGHT = exports.FACING_MOD_RIGHT = (_FACING_MOD_RIGHT = {}, _defineProperty(_FACING_MOD_RIGHT, TOP, RIGHT), _defineProperty(_FACING_MOD_RIGHT, RIGHT, BOTTOM), _defineProperty(_FACING_MOD_RIGHT, BOTTOM, LEFT), _defineProperty(_FACING_MOD_RIGHT, LEFT, TOP), _FACING_MOD_RIGHT);

var FACING_MOD_LEFT = exports.FACING_MOD_LEFT = (_FACING_MOD_LEFT = {}, _defineProperty(_FACING_MOD_LEFT, TOP, LEFT), _defineProperty(_FACING_MOD_LEFT, RIGHT, TOP), _defineProperty(_FACING_MOD_LEFT, BOTTOM, RIGHT), _defineProperty(_FACING_MOD_LEFT, LEFT, BOTTOM), _FACING_MOD_LEFT);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _array2d = __webpack_require__(11);

var _array2d2 = _interopRequireDefault(_array2d);

var _rectangle = __webpack_require__(3);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var next_piece_id = 0;

//base dungeon piece class, to be extended

var Piece = function () {
    function Piece(options) {
        _classCallCheck(this, Piece);

        options = Object.assign({
            size: [1, 1],
            position: [0, 0],
            parent: null,
            max_exits: 10,
            tag: ''
        }, options);

        Object.assign(this, options);

        this.options = options;

        this.id = next_piece_id++;
        this.walls = new _array2d2.default(this.size, true);
        this.perimeter = [];
        this.exits = [];
        this.children = [];
    }

    _createClass(Piece, [{
        key: 'is_exit',
        value: function is_exit(_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                x = _ref2[0],
                y = _ref2[1];

            return this.exits.filter(function (_ref3) {
                var _ref4 = _toArray(_ref3),
                    exit_x = _ref4[0],
                    exit_y = _ref4[1],
                    rest = _ref4.slice(2);

                return exit_x === x && exit_y === y;
            }).length !== 0;
        }
    }, {
        key: 'get_non_wall_tiles',
        value: function get_non_wall_tiles() {
            var retv = [];
            this.walls.iter(function (pos, is_wall) {
                if (!is_wall) {
                    retv.push(pos);
                }
            });
            return retv;
        }
    }, {
        key: 'get_perimeter_by_facing',
        value: function get_perimeter_by_facing(facing) {
            return this.perimeter.filter(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 2),
                    _ref6$ = _slicedToArray(_ref6[0], 2),
                    x = _ref6$[0],
                    y = _ref6$[1],
                    f = _ref6[1];

                return facing === f;
            });
        }
    }, {
        key: 'get_inner_perimeter',
        value: function get_inner_perimeter() {
            var _this = this;

            //returns array of tiles in the piece that are adjacent to a wall,
            // but not an exit;

            var retv = [],
                haswall = void 0,
                exit_adjacent = void 0;

            this.walls.iter(function (pos, is_wall) {
                if (!is_wall && !_this.is_exit(pos)) {
                    haswall = false;
                    exit_adjacent = false;
                    (0, _utils.iter_adjacent)(pos, function (p) {
                        haswall = haswall || _this.walls.get(p);
                        exit_adjacent = exit_adjacent || _this.is_exit(p);
                    });
                    if (haswall && !exit_adjacent) {
                        retv.push(pos);
                    }
                }
            });

            return retv;
        }

        //local position to parent position

    }, {
        key: 'parent_pos',
        value: function parent_pos(_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                x = _ref8[0],
                y = _ref8[1];

            return [this.position[0] + x, this.position[1] + y];
        }

        //local position to global position

    }, {
        key: 'global_pos',
        value: function global_pos(pos) {
            pos = this.parent_pos(pos);
            if (this.parent) {
                pos = this.parent.global_pos(pos);
            }
            return pos;
        }

        //parent position to local position

    }, {
        key: 'local_pos',
        value: function local_pos(pos) {
            return [pos[0] - this.position[0], pos[1] - this.position[1]];
        }

        //get (roughly) center tile position for the piece
        // @TODO consider if should use Math.floor instead of Math.round

    }, {
        key: 'get_center_pos',
        value: function get_center_pos() {
            return [Math.floor(this.size[0] / 2), Math.floor(this.size[1] / 2)];
        }
    }, {
        key: 'add_perimeter',
        value: function add_perimeter(p_from, p_to, facing) {
            var _this2 = this;

            (0, _utils.iter_range)(p_from, p_to, function (pos) {
                _this2.perimeter.push([pos, facing]);
            });
        }
    }, {
        key: 'remove_perimeter',
        value: function remove_perimeter(rect) {
            this.perimeter = this.perimeter.filter(function (_ref9) {
                var _ref10 = _slicedToArray(_ref9, 3),
                    x = _ref10[0],
                    y = _ref10[1],
                    facing = _ref10[2];

                return !rect.contains(x, y, 1, 1);
            });
        }
    }, {
        key: 'intersects',
        value: function intersects(piece) {
            return (0, _utils.intersects)(this.position, this.size, piece.position, piece.size);
        }
    }, {
        key: 'add_piece',
        value: function add_piece(piece) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if ((0, _utils.array_test)(this.children, function (c) {
                return c.id === piece.id;
            })) {
                return;
            }
            piece.parent = this;
            if (position) {
                piece.position = position;
            }
            this.children.push(piece);
            this.paste_in(piece);
        }
    }, {
        key: 'paste_in',
        value: function paste_in(piece) {
            var _this3 = this;

            (0, _utils.iter_2d)(piece.size, function (pos) {
                var is_wall = piece.walls.get(pos);
                if (!is_wall) {
                    _this3.walls.set(piece.parent_pos(pos), false);
                }
            });
        }
    }, {
        key: 'add_exit',
        value: function add_exit(exit, room) {
            this.walls.set(exit[0], false);
            if (this.parent) {
                this.parent.paste_in(this);
            }
            this.exits.push([exit[0], exit[1], room]);
        }
    }, {
        key: 'print',
        value: function print() {
            for (var y = 0; y < this.size[1]; y++) {
                var row = '';
                for (var x = 0; x < this.size[0]; x++) {
                    if (this.start_pos && this.start_pos[0] === x && this.start_pos[1] === y) {
                        row += 's';
                    } else {
                        row += this.walls.get([x, y]) ? 'x' : ' ';
                    }
                }
                console.log(row);
            }
        }
    }, {
        key: 'rect',
        get: function get() {
            return new _rectangle2.default(this.position[0], this.position[1], this.size[0], this.size[1]);
        }
    }]);

    return Piece;
}();

exports.default = Piece;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*
* Rectangle
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @module EaselJS
 */

// constructor:
/**
 * Represents a rectangle as defined by the points (x, y) and (x+width, y+height).
 *
 * <h4>Example</h4>
 *
 *      var rect = new createjs.Rectangle(0, 0, 100, 100);
 *
 * @class Rectangle
 * @param {Number} [x=0] X position.
 * @param {Number} [y=0] Y position.
 * @param {Number} [width=0] The width of the Rectangle.
 * @param {Number} [height=0] The height of the Rectangle.
 * @constructor
 **/
function Rectangle(x, y, width, height) {
  if (Array.isArray(x) && Array.isArray(y)) {
    var _y = y;

    var _y2 = _slicedToArray(_y, 2);

    width = _y2[0];
    height = _y2[1];
    var _x = x;

    var _x2 = _slicedToArray(_x, 2);

    x = _x2[0];
    y = _x2[1];
  }
  this.setValues(x, y, width, height);

  // public properties:
  // assigned in the setValues method.
  /**
   * X position.
   * @property x
   * @type Number
   **/

  /**
   * Y position.
   * @property y
   * @type Number
   **/

  /**
   * Width.
   * @property width
   * @type Number
   **/

  /**
   * Height.
   * @property height
   * @type Number
   **/
}
var p = Rectangle.prototype;

/**
 * <strong>REMOVED</strong>. Removed in favor of using `MySuperClass_constructor`.
 * See {{#crossLink "Utility Methods/extend"}}{{/crossLink}} and {{#crossLink "Utility Methods/promote"}}{{/crossLink}}
 * for details.
 *
 * There is an inheritance tutorial distributed with EaselJS in /tutorials/Inheritance.
 *
 * @method initialize
 * @protected
 * @deprecated
 */
// p.initialize = function() {}; // searchable for devs wondering where it is.


// public methods:
/** 
 * Sets the specified values on this instance.
 * @method setValues
 * @param {Number} [x=0] X position.
 * @param {Number} [y=0] Y position.
 * @param {Number} [width=0] The width of the Rectangle.
 * @param {Number} [height=0] The height of the Rectangle.
 * @return {Rectangle} This instance. Useful for chaining method calls.
 * @chainable
*/
p.setValues = function (x, y, width, height) {
  // don't forget to update docs in the constructor if these change:
  this.x = x || 0;
  this.y = y || 0;
  this.width = width || 0;
  this.height = height || 0;
  return this;
};

/** 
 * Extends the rectangle's bounds to include the described point or rectangle.
 * @method extend
 * @param {Number} x X position of the point or rectangle.
 * @param {Number} y Y position of the point or rectangle.
 * @param {Number} [width=0] The width of the rectangle.
 * @param {Number} [height=0] The height of the rectangle.
 * @return {Rectangle} This instance. Useful for chaining method calls.
 * @chainable
*/
p.extend = function (x, y, width, height) {
  width = width || 0;
  height = height || 0;
  if (x + width > this.x + this.width) {
    this.width = x + width - this.x;
  }
  if (y + height > this.y + this.height) {
    this.height = y + height - this.y;
  }
  if (x < this.x) {
    this.width += this.x - x;this.x = x;
  }
  if (y < this.y) {
    this.height += this.y - y;this.y = y;
  }
  return this;
};

/** 
 * Adds the specified padding to the rectangle's bounds.
 * @method pad
 * @param {Number} top
 * @param {Number} left
 * @param {Number} right
 * @param {Number} bottom
 * @return {Rectangle} This instance. Useful for chaining method calls.
 * @chainable
*/
p.pad = function (top, left, bottom, right) {
  this.x -= left;
  this.y -= top;
  this.width += left + right;
  this.height += top + bottom;
  return this;
};

/**
 * Copies all properties from the specified rectangle to this rectangle.
 * @method copy
 * @param {Rectangle} rectangle The rectangle to copy properties from.
 * @return {Rectangle} This rectangle. Useful for chaining method calls.
 * @chainable
*/
p.copy = function (rectangle) {
  return this.setValues(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
};

/** 
 * Returns true if this rectangle fully encloses the described point or rectangle.
 * @method contains
 * @param {Number} x X position of the point or rectangle.
 * @param {Number} y Y position of the point or rectangle.
 * @param {Number} [width=0] The width of the rectangle.
 * @param {Number} [height=0] The height of the rectangle.
 * @return {Boolean} True if the described point or rectangle is contained within this rectangle.
*/
p.contains = function (x, y, width, height) {
  width = width || 0;
  height = height || 0;
  return x >= this.x && x + width <= this.x + this.width && y >= this.y && y + height <= this.y + this.height;
};

/** 
 * Returns a new rectangle which contains this rectangle and the specified rectangle.
 * @method union
 * @param {Rectangle} rect The rectangle to calculate a union with.
 * @return {Rectangle} A new rectangle describing the union.
*/
p.union = function (rect) {
  return this.clone().extend(rect.x, rect.y, rect.width, rect.height);
};

/** 
 * Returns a new rectangle which describes the intersection (overlap) of this rectangle and the specified rectangle,
 * or null if they do not intersect.
 * @method intersection
 * @param {Rectangle} rect The rectangle to calculate an intersection with.
 * @return {Rectangle} A new rectangle describing the intersection or null.
*/
p.intersection = function (rect) {
  var x1 = rect.x,
      y1 = rect.y,
      x2 = x1 + rect.width,
      y2 = y1 + rect.height;
  if (this.x > x1) {
    x1 = this.x;
  }
  if (this.y > y1) {
    y1 = this.y;
  }
  if (this.x + this.width < x2) {
    x2 = this.x + this.width;
  }
  if (this.y + this.height < y2) {
    y2 = this.y + this.height;
  }
  return x2 <= x1 || y2 <= y1 ? null : new Rectangle(x1, y1, x2 - x1, y2 - y1);
};

/** 
 * Returns true if the specified rectangle intersects (has any overlap) with this rectangle.
 * @method intersects
 * @param {Rectangle} rect The rectangle to compare.
 * @return {Boolean} True if the rectangles intersect.
*/
p.intersects = function (rect) {
  return rect.x <= this.x + this.width && this.x <= rect.x + rect.width && rect.y <= this.y + this.height && this.y <= rect.y + rect.height;
};

/** 
 * Returns true if the width or height are equal or less than 0.
 * @method isEmpty
 * @return {Boolean} True if the rectangle is empty.
*/
p.isEmpty = function () {
  return this.width <= 0 || this.height <= 0;
};

/**
 * Returns a clone of the Rectangle instance.
 * @method clone
 * @return {Rectangle} a clone of the Rectangle instance.
 **/
p.clone = function () {
  return new Rectangle(this.x, this.y, this.width, this.height);
};

/**
 * Returns a string representation of this object.
 * @method toString
 * @return {String} a string representation of the instance.
 **/
p.toString = function () {
  return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]";
};

exports.default = Rectangle;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _piece = __webpack_require__(2);

var _piece2 = _interopRequireDefault(_piece);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Room = function (_Piece) {
    _inherits(Room, _Piece);

    function Room(options) {
        _classCallCheck(this, Room);

        /*
        note, size to be provided is size without walls.
        */
        options.room_size = options.size;
        options.size = [options.size[0] + 2, options.size[1] + 2];

        options = Object.assign({}, {
            symmetric: false //if true, 
        }, options);

        var _this = _possibleConstructorReturn(this, (Room.__proto__ || Object.getPrototypeOf(Room)).call(this, options));

        _this.walls.set_square([1, 1], _this.room_size, false, true);

        if (!_this.symmetric) {
            //any point at any wall can be exit
            _this.add_perimeter([1, 0], [_this.size[0] - 2, 0], 180);
            _this.add_perimeter([0, 1], [0, _this.size[1] - 2], 90);
            _this.add_perimeter([1, _this.size[1] - 1], [_this.size[0] - 2, _this.size[1] - 1], 0);
            _this.add_perimeter([_this.size[0] - 1, 1], [_this.size[0] - 1, _this.size[1] - 2], 270);
        } else {
            //only middle of each wall can be exit
            var _this$get_center_pos = _this.get_center_pos(),
                _this$get_center_pos2 = _slicedToArray(_this$get_center_pos, 2),
                w = _this$get_center_pos2[0],
                h = _this$get_center_pos2[1];

            _this.perimeter = [[[w, 0], 180], [[_this.size[0] - 1, h], 270], [[w, _this.size[1] - 1], 0], [[0, h], 90]];
        }
        return _this;
    }

    return Room;
}(_piece2.default);

exports.default = Room;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dungeon = __webpack_require__(6);

var _dungeon2 = _interopRequireDefault(_dungeon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _dungeon2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _generator = __webpack_require__(7);

var _generator2 = _interopRequireDefault(_generator);

var _corridor = __webpack_require__(12);

var _corridor2 = _interopRequireDefault(_corridor);

var _room = __webpack_require__(4);

var _room2 = _interopRequireDefault(_room);

var _const = __webpack_require__(1);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dungeon = function (_Generator) {
    _inherits(Dungeon, _Generator);

    function Dungeon(options) {
        _classCallCheck(this, Dungeon);

        options = Object.assign({}, {
            size: [100, 100],
            rooms: {
                initial: {
                    min_size: [3, 3],
                    max_size: [3, 3],
                    max_exits: 1
                },
                any: {
                    min_size: [2, 2],
                    max_size: [5, 5],
                    max_exits: 4
                }
            },
            max_corridor_length: 6,
            min_corridor_length: 2,
            corridor_density: 0.5, //corridors per room
            symmetric_rooms: false, // exits must be in the middle of walls
            interconnects: 1, //extra corridors to connect rooms and make circular paths. not guaranteed
            max_interconnect_length: 10,
            room_count: 10
        }, options);

        var _this = _possibleConstructorReturn(this, (Dungeon.__proto__ || Object.getPrototypeOf(Dungeon)).call(this, options));

        _this.room_tags = Object.keys(_this.rooms).filter(function (tag) {
            return tag !== 'any' && tag !== 'initial';
        });

        for (var i = _this.room_tags.length; i < _this.room_count; i++) {
            _this.room_tags.push('any');
        }

        _this.rooms = [];
        _this.corridors = [];
        return _this;
    }

    _createClass(Dungeon, [{
        key: 'add_room',
        value: function add_room(room, exit) {
            var add_to_room = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            var g_add_to_room = add_to_room;
            //add a new piece, exit is local perimeter pos for that exit;
            var choices = void 0,
                old_room = void 0,
                i = 0;
            while (true) {
                //pick a placed room to connect this piece to
                if (add_to_room) {
                    old_room = add_to_room;
                    add_to_room = null;
                } else {
                    choices = this.get_open_pieces(this.children);
                    if (choices && choices.length) {
                        old_room = this.random.choose(choices);
                    } else {
                        console.log('ran out of choices connecting');
                        break;
                    }
                }

                //if exit is specified, try joining  to this specific exit
                if (exit) {
                    //try joining the rooms
                    if (this.join(old_room, exit, room)) {
                        return true;
                    }
                    //else try all perims to see
                } else {
                    var perim = room.perimeter.slice();
                    while (perim.length) {
                        if (this.join(old_room, this.random.choose(perim, true), room)) {
                            return true;
                        }
                    }
                }

                if (i++ === 100) {
                    console.log('failed to connect 100 times :(', room, exit, g_add_to_room);
                    return false;
                }
            }
        }
    }, {
        key: 'new_corridor',
        value: function new_corridor() {
            return new _corridor2.default({
                length: this.random.int(this.min_corridor_length, this.max_corridor_length),
                facing: this.random.choose(_const.FACING)
            });
        }
    }, {
        key: 'add_interconnect',
        value: function add_interconnect() {
            var perims = {},
                hash = void 0,
                exit = void 0,
                p = void 0;

            //hash all possible exits
            this.children.forEach(function (child) {
                if (child.exits.length < child.max_exits) {
                    child.perimeter.forEach(function (exit) {
                        p = child.parent_pos(exit[0]);
                        hash = p[0] + '_' + p[1];
                        perims[hash] = [exit, child];
                    });
                }
            });

            //search each room for a possible interconnect, backwards
            var room = void 0,
                mod = void 0,
                length = void 0,
                corridor = void 0,
                room2 = void 0;
            for (var i = this.children.length - 1; i--; i >= 0) {
                room = this.children[i];

                //if room has exits available
                if (room.exits.length < room.max_exits) {

                    //iterate exits
                    for (var k = 0; k < room.perimeter.length; k++) {
                        exit = room.perimeter[k];
                        p = room.parent_pos(exit[0]);
                        length = -1;

                        //try to dig a tunnel from this exit and see if it hits anything
                        while (length <= this.max_interconnect_length) {
                            //check if space is not occupied
                            if (!this.walls.get(p) || !this.walls.get((0, _utils.shift_left)(p, exit[1])) || !this.walls.get((0, _utils.shift_right)(p, exit[1]))) {
                                break;
                            }
                            hash = p[0] + '_' + p[1];

                            //is there a potential exit at these coordiantes (not of the same room)
                            if (perims[hash] && perims[hash][1].id !== room.id) {
                                room2 = perims[hash][1];

                                //rooms cant be joined directly, add a corridor
                                if (length > -1) {
                                    corridor = new _corridor2.default({
                                        length: length,
                                        facing: exit[1]
                                    });

                                    if (this.join(room, corridor.perimeter[0], corridor, exit)) {
                                        this.join_exits(room2, perims[hash][0], corridor, corridor.perimeter[corridor.perimeter.length - 1]);
                                        return true;
                                    } else {
                                        return false;
                                    }
                                    //rooms can be joined directly
                                } else {
                                    this.join_exits(room2, perims[hash][0], room, exit);
                                    return true;
                                }
                            }

                            //exit not found, try to make the interconnect longer
                            p = (0, _utils.shift)(p, exit[1]);
                            length++;
                        }
                    }
                }
            }
        }
    }, {
        key: 'new_room',
        value: function new_room(key) {
            //spawn next room
            key = key || this.random.choose(this.room_tags, false);

            var opts = this.options.rooms[key];

            var room = new _room2.default({
                size: this.random.vec(opts.min_size, opts.max_size),
                max_exits: opts.max_exits,
                symmetric: this.symmetric_rooms,
                tag: key
            });

            this.room_tags.splice(this.room_tags.indexOf(key), 1);

            if (key === 'initial') {
                this.initial_room = room;
            }
            return room;
        }
    }, {
        key: 'generate',
        value: function generate() {
            var no_rooms = this.options.room_count - 1,
                room = this.new_room(this.options.rooms.initial ? 'initial' : undefined),
                no_corridors = Math.round(this.corridor_density * no_rooms);

            this.add_piece(room, this.options.rooms.initial && this.options.rooms.initial.position ? this.options.rooms.initial.position : this.get_center_pos());

            var k = void 0;

            while (no_corridors || no_rooms) {
                k = this.random.int(1, no_rooms + no_corridors);
                if (k <= no_corridors) {
                    var corridor = this.new_corridor();
                    var added = this.add_room(corridor, corridor.perimeter[0]);
                    no_corridors--;

                    //try to connect to this corridor next
                    if (no_rooms > 0 && added) {
                        this.add_room(this.new_room(), null, corridor);
                        no_rooms--;
                    }
                } else {
                    this.add_room(this.new_room());
                    no_rooms--;
                }
            }

            for (k = 0; k < this.interconnects; k++) {
                this.add_interconnect();
            }

            this.trim();

            if (this.initial_room) {
                this.start_pos = this.initial_room.global_pos(this.initial_room.get_center_pos());
            }
        }
    }]);

    return Dungeon;
}(_generator2.default);

exports.default = Dungeon;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _random = __webpack_require__(8);

var _random2 = _interopRequireDefault(_random);

var _piece = __webpack_require__(2);

var _piece2 = _interopRequireDefault(_piece);

var _rectangle = __webpack_require__(3);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _const = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Generator = function (_Piece) {
    _inherits(Generator, _Piece);

    function Generator(options) {
        _classCallCheck(this, Generator);

        var _this = _possibleConstructorReturn(this, (Generator.__proto__ || Object.getPrototypeOf(Generator)).call(this, options));

        _this.random = new _random2.default(_this.seed);

        _this.start_pos = [0, 0];
        _this.minx = _this.size[0];
        _this.maxx = 0;
        _this.miny = _this.size[1];
        _this.maxy = 0;
        return _this;
    }

    _createClass(Generator, [{
        key: 'add_piece',
        value: function add_piece(piece, position) {
            _get(Generator.prototype.__proto__ || Object.getPrototypeOf(Generator.prototype), 'add_piece', this).call(this, piece, position);

            this.minx = Math.min(this.minx, piece.position[0]);
            this.maxx = Math.max(this.maxx, piece.position[0] + piece.size[0]);

            this.miny = Math.min(this.miny, piece.position[1]);
            this.maxy = Math.max(this.maxy, piece.position[1] + piece.size[1]);
        }
    }, {
        key: 'trim',
        value: function trim() {
            var _this2 = this;

            this.size = [this.maxx - this.minx, this.maxy - this.miny];
            this.children.forEach(function (child) {
                child.position = [child.position[0] - _this2.minx, child.position[1] - _this2.miny];
            });

            this.start_pos = [this.start_pos[0] - this.minx, this.start_pos[1] - this.miny];
            this.walls = this.walls.get_square([this.minx, this.miny], this.size);

            this.minx = 0;
            this.maxx = this.size[0];

            this.miny = 0;
            this.maxy = this.size[1];
        }
    }, {
        key: 'generate',
        value: function generate() {
            throw new Error('not implemented');
        }
    }, {
        key: 'fits',
        value: function fits(piece, position) {
            var p = void 0,
                x = void 0,
                y = void 0;
            for (x = 0; x < piece.size[0]; x++) {
                for (y = 0; y < piece.size[1]; y++) {
                    p = this.walls.get([position[0] + x, position[1] + y]);
                    if (p === false || p === null || p === undefined) {
                        return false;
                    }
                }
            }
            return true;
        }
    }, {
        key: 'join_exits',
        value: function join_exits(piece1, piece1_exit, piece2, piece2_exit) {
            /*
            register an exit with each piece, remove intersecting perimeter tiles
            */

            piece1.add_exit(piece1_exit, piece2);
            piece2.add_exit(piece2_exit, piece1);

            var ic = piece1.rect.intersection(piece2.rect);
            if (ic) {
                piece1.remove_perimeter(new _rectangle2.default(piece1.local_pos([ic[0], ic[1]], [ic.width, ic.height])));
                piece2.remove_perimeter(new _rectangle2.default(piece2.local_pos([ic[0], ic[1]], [ic.width, ic.height])));
            }
        }
    }, {
        key: 'join',
        value: function join(piece1, piece2_exit, piece2, piece1_exit) {
            /*
            join piece 1 to piece2 provided at least one exit.
            piece1 should already be placed
            */
            if (!piece1_exit) {
                piece1_exit = this.random.choose(piece1.get_perimeter_by_facing(_const.FACING_INVERSE[piece2_exit[1]]));
            }

            //global piece2 exit pos
            var piece2_exit_pos = piece1.parent_pos(piece1_exit[0]);

            //figure out piece2 position
            var piece2_pos = [piece2_exit_pos[0] - piece2_exit[0][0], piece2_exit_pos[1] - piece2_exit[0][1]];

            if (!this.fits(piece2, piece2_pos)) {
                return false;
            }

            this.join_exits(piece1, piece1_exit, piece2, piece2_exit);
            this.add_piece(piece2, piece2_pos);

            return true;
        }
    }, {
        key: 'get_open_pieces',
        value: function get_open_pieces(pieces) {
            //filter out pieces
            return pieces.filter(function (piece) {
                return piece.exits.length < piece.max_exits && piece.perimeter.length;
            });
        }
    }]);

    return Generator;
}(_piece2.default);

exports.default = Generator;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _randomSeed = __webpack_require__(9);

var _randomSeed2 = _interopRequireDefault(_randomSeed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Random = function () {
    function Random(seed) {
        _classCallCheck(this, Random);

        this.rng = _randomSeed2.default.create(seed);
    }

    _createClass(Random, [{
        key: 'int',
        value: function int(min, max) {
            return this.rng.intBetween(min, max);
        }
    }, {
        key: 'float',
        value: function float() {
            var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            return this.rng.floatBetween(min, max);
        }
    }, {
        key: 'vec',
        value: function vec(min, max) {
            //min and max are vectors [int, int];
            //returns [min[0]<=x<=max[0], min[1]<=y<=max[1]]
            return [this.int(min[0], max[0]), this.int(min[1], max[1])];
        }
    }, {
        key: 'choose',
        value: function choose(items) {
            var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var idx = this.rng.intBetween(0, items.length - 1);
            if (remove) {
                return items.splice(idx, 1)[0];
            } else {
                return items[idx];
            }
        }
    }, {
        key: 'maybe',
        value: function maybe(probability) {
            return this.float() <= probability;
        }
    }]);

    return Random;
}();

exports.default = Random;
;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * random-seed
 * https://github.com/skratchdot/random-seed
 *
 * This code was originally written by Steve Gibson and can be found here:
 *
 * https://www.grc.com/otg/uheprng.htm
 *
 * It was slightly modified for use in node, to pass jshint, and a few additional
 * helper functions were added.
 *
 * Copyright (c) 2013 skratchdot
 * Dual Licensed under the MIT license and the original GRC copyright/license
 * included below.
 */
/*	============================================================================
									Gibson Research Corporation
				UHEPRNG - Ultra High Entropy Pseudo-Random Number Generator
	============================================================================
	LICENSE AND COPYRIGHT:  THIS CODE IS HEREBY RELEASED INTO THE PUBLIC DOMAIN
	Gibson Research Corporation releases and disclaims ALL RIGHTS AND TITLE IN
	THIS CODE OR ANY DERIVATIVES. Anyone may be freely use it for any purpose.
	============================================================================
	This is GRC's cryptographically strong PRNG (pseudo-random number generator)
	for JavaScript. It is driven by 1536 bits of entropy, stored in an array of
	48, 32-bit JavaScript variables.  Since many applications of this generator,
	including ours with the "Off The Grid" Latin Square generator, may require
	the deteriministic re-generation of a sequence of PRNs, this PRNG's initial
	entropic state can be read and written as a static whole, and incrementally
	evolved by pouring new source entropy into the generator's internal state.
	----------------------------------------------------------------------------
	ENDLESS THANKS are due Johannes Baagoe for his careful development of highly
	robust JavaScript implementations of JS PRNGs.  This work was based upon his
	JavaScript "Alea" PRNG which is based upon the extremely robust Multiply-
	With-Carry (MWC) PRNG invented by George Marsaglia. MWC Algorithm References:
	http://www.GRC.com/otg/Marsaglia_PRNGs.pdf
	http://www.GRC.com/otg/Marsaglia_MWC_Generators.pdf
	----------------------------------------------------------------------------
	The quality of this algorithm's pseudo-random numbers have been verified by
	multiple independent researchers. It handily passes the fermilab.ch tests as
	well as the "diehard" and "dieharder" test suites.  For individuals wishing
	to further verify the quality of this algorithm's pseudo-random numbers, a
	256-megabyte file of this algorithm's output may be downloaded from GRC.com,
	and a Microsoft Windows scripting host (WSH) version of this algorithm may be
	downloaded and run from the Windows command prompt to generate unique files
	of any size:
	The Fermilab "ENT" tests: http://fourmilab.ch/random/
	The 256-megabyte sample PRN file at GRC: https://www.GRC.com/otg/uheprng.bin
	The Windows scripting host version: https://www.GRC.com/otg/wsh-uheprng.js
	----------------------------------------------------------------------------
	Qualifying MWC multipliers are: 187884, 686118, 898134, 1104375, 1250205,
	1460910 and 1768863. (We use the largest one that's < 2^21)
	============================================================================ */

var stringify = __webpack_require__(10);

/*	============================================================================
This is based upon Johannes Baagoe's carefully designed and efficient hash
function for use with JavaScript.  It has a proven "avalanche" effect such
that every bit of the input affects every bit of the output 50% of the time,
which is good.	See: http://baagoe.com/en/RandomMusings/hash/avalanche.xhtml
============================================================================
*/
var Mash = function () {
	var n = 0xefc8249d;
	var mash = function (data) {
		if (data) {
			data = data.toString();
			for (var i = 0; i < data.length; i++) {
				n += data.charCodeAt(i);
				var h = 0.02519603282416938 * n;
				n = h >>> 0;
				h -= n;
				h *= n;
				n = h >>> 0;
				h -= n;
				n += h * 0x100000000; // 2^32
			}
			return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
		} else {
			n = 0xefc8249d;
		}
	};
	return mash;
};

var uheprng = function (seed) {
	return (function () {
		var o = 48; // set the 'order' number of ENTROPY-holding 32-bit values
		var c = 1; // init the 'carry' used by the multiply-with-carry (MWC) algorithm
		var p = o; // init the 'phase' (max-1) of the intermediate variable pointer
		var s = new Array(o); // declare our intermediate variables array
		var i; // general purpose local
		var j; // general purpose local
		var k = 0; // general purpose local

		// when our "uheprng" is initially invoked our PRNG state is initialized from the
		// browser's own local PRNG. This is okay since although its generator might not
		// be wonderful, it's useful for establishing large startup entropy for our usage.
		var mash = new Mash(); // get a pointer to our high-performance "Mash" hash

		// fill the array with initial mash hash values
		for (i = 0; i < o; i++) {
			s[i] = mash(Math.random());
		}

		// this PRIVATE (internal access only) function is the heart of the multiply-with-carry
		// (MWC) PRNG algorithm. When called it returns a pseudo-random number in the form of a
		// 32-bit JavaScript fraction (0.0 to <1.0) it is a PRIVATE function used by the default
		// [0-1] return function, and by the random 'string(n)' function which returns 'n'
		// characters from 33 to 126.
		var rawprng = function () {
			if (++p >= o) {
				p = 0;
			}
			var t = 1768863 * s[p] + c * 2.3283064365386963e-10; // 2^-32
			return s[p] = t - (c = t | 0);
		};

		// this EXPORTED function is the default function returned by this library.
		// The values returned are integers in the range from 0 to range-1. We first
		// obtain two 32-bit fractions (from rawprng) to synthesize a single high
		// resolution 53-bit prng (0 to <1), then we multiply this by the caller's
		// "range" param and take the "floor" to return a equally probable integer.
		var random = function (range) {
			return Math.floor(range * (rawprng() + (rawprng() * 0x200000 | 0) * 1.1102230246251565e-16)); // 2^-53
		};

		// this EXPORTED function 'string(n)' returns a pseudo-random string of
		// 'n' printable characters ranging from chr(33) to chr(126) inclusive.
		random.string = function (count) {
			var i;
			var s = '';
			for (i = 0; i < count; i++) {
				s += String.fromCharCode(33 + random(94));
			}
			return s;
		};

		// this PRIVATE "hash" function is used to evolve the generator's internal
		// entropy state. It is also called by the EXPORTED addEntropy() function
		// which is used to pour entropy into the PRNG.
		var hash = function () {
			var args = Array.prototype.slice.call(arguments);
			for (i = 0; i < args.length; i++) {
				for (j = 0; j < o; j++) {
					s[j] -= mash(args[i]);
					if (s[j] < 0) {
						s[j] += 1;
					}
				}
			}
		};

		// this EXPORTED "clean string" function removes leading and trailing spaces and non-printing
		// control characters, including any embedded carriage-return (CR) and line-feed (LF) characters,
		// from any string it is handed. this is also used by the 'hashstring' function (below) to help
		// users always obtain the same EFFECTIVE uheprng seeding key.
		random.cleanString = function (inStr) {
			inStr = inStr.replace(/(^\s*)|(\s*$)/gi, ''); // remove any/all leading spaces
			inStr = inStr.replace(/[\x00-\x1F]/gi, ''); // remove any/all control characters
			inStr = inStr.replace(/\n /, '\n'); // remove any/all trailing spaces
			return inStr; // return the cleaned up result
		};

		// this EXPORTED "hash string" function hashes the provided character string after first removing
		// any leading or trailing spaces and ignoring any embedded carriage returns (CR) or Line Feeds (LF)
		random.hashString = function (inStr) {
			inStr = random.cleanString(inStr);
			mash(inStr); // use the string to evolve the 'mash' state
			for (i = 0; i < inStr.length; i++) { // scan through the characters in our string
				k = inStr.charCodeAt(i); // get the character code at the location
				for (j = 0; j < o; j++) { //	"mash" it into the UHEPRNG state
					s[j] -= mash(k);
					if (s[j] < 0) {
						s[j] += 1;
					}
				}
			}
		};

		// this EXPORTED function allows you to seed the random generator.
		random.seed = function (seed) {
			if (typeof seed === 'undefined' || seed === null) {
				seed = Math.random();
			}
			if (typeof seed !== 'string') {
				seed = stringify(seed, function (key, value) {
					if (typeof value === 'function') {
						return (value).toString();
					}
					return value;
				});
			}
			random.initState();
			random.hashString(seed);
		};

		// this handy exported function is used to add entropy to our uheprng at any time
		random.addEntropy = function ( /* accept zero or more arguments */ ) {
			var args = [];
			for (i = 0; i < arguments.length; i++) {
				args.push(arguments[i]);
			}
			hash((k++) + (new Date().getTime()) + args.join('') + Math.random());
		};

		// if we want to provide a deterministic startup context for our PRNG,
		// but without directly setting the internal state variables, this allows
		// us to initialize the mash hash and PRNG's internal state before providing
		// some hashing input
		random.initState = function () {
			mash(); // pass a null arg to force mash hash to init
			for (i = 0; i < o; i++) {
				s[i] = mash(' '); // fill the array with initial mash hash values
			}
			c = 1; // init our multiply-with-carry carry
			p = o; // init our phase
		};

		// we use this (optional) exported function to signal the JavaScript interpreter
		// that we're finished using the "Mash" hash function so that it can free up the
		// local "instance variables" is will have been maintaining.  It's not strictly
		// necessary, of course, but it's good JavaScript citizenship.
		random.done = function () {
			mash = null;
		};

		// if we called "uheprng" with a seed value, then execute random.seed() before returning
		if (typeof seed !== 'undefined') {
			random.seed(seed);
		}

		// Returns a random integer between 0 (inclusive) and range (exclusive)
		random.range = function (range) {
			return random(range);
		};

		// Returns a random float between 0 (inclusive) and 1 (exclusive)
		random.random = function () {
			return random(Number.MAX_VALUE - 1) / Number.MAX_VALUE;
		};

		// Returns a random float between min (inclusive) and max (exclusive)
		random.floatBetween = function (min, max) {
			return random.random() * (max - min) + min;
		};

		// Returns a random integer between min (inclusive) and max (inclusive)
		random.intBetween = function (min, max) {
			return Math.floor(random.random() * (max - min + 1)) + min;
		};

		// when our main outer "uheprng" function is called, after setting up our
		// initial variables and entropic state, we return an "instance pointer"
		// to the internal anonymous function which can then be used to access
		// the uheprng's various exported functions.  As with the ".done" function
		// above, we should set the returned value to 'null' once we're finished
		// using any of these functions.
		return random;
	}());
};

// Modification for use in node:
uheprng.create = function (seed) {
	return new uheprng(seed);
};
module.exports = uheprng;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = []

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    }
    else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Array2d = function () {
    function Array2d() {
        var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];
        var default_value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, Array2d);

        this.rows = [];
        this.size = [];

        for (var y = 0; y < size[1]; y++) {
            var row = [];
            for (var x = 0; x < size[0]; x++) {
                row.push(default_value);
            }
            this.rows.push(row);
        }
    }

    _createClass(Array2d, [{
        key: "iter",
        value: function iter(callback, context) {
            for (var y = 0; y < size[1]; y++) {
                for (var x = 0; x < size[0]; x++) {
                    callback.apply(context, [[x, y], this.get([x, y])]);
                }
            }
        }
    }, {
        key: "get",
        value: function get(_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                x = _ref2[0],
                y = _ref2[1];

            if (this.rows[y] === undefined) {
                return undefined;
            }
            return this.rows[y][x];
        }
    }, {
        key: "set",
        value: function set(_ref3, val) {
            var _ref4 = _slicedToArray(_ref3, 2),
                x = _ref4[0],
                y = _ref4[1];

            this.rows[y][x] = val;
        }
    }, {
        key: "set_horizontal_line",
        value: function set_horizontal_line(_ref5, delta_x, val) {
            var _ref6 = _slicedToArray(_ref5, 2),
                start_x = _ref6[0],
                start_y = _ref6[1];

            var c = Math.abs(delta_x),
                mod = delta_x < 0 ? -1 : 1;

            for (var x = 0; x <= c; x++) {
                this.set([pos[0] + x * mod, pos[1]], val);
            }
        }
    }, {
        key: "set_vertical_line",
        value: function set_vertical_line(_ref7, delta_y, val) {
            var _ref8 = _slicedToArray(_ref7, 2),
                start_x = _ref8[0],
                start_y = _ref8[1];

            var c = Math.abs(delta_y),
                mod = delta_y < 0 ? -1 : 1;

            for (var y = 0; y <= c; y++) {
                this.set([pos[0], pos[1] + y * mod], val);
            }
        }
    }, {
        key: "get_square",
        value: function get_square(_ref9, _ref10) {
            var _ref12 = _slicedToArray(_ref9, 2),
                x = _ref12[0],
                y = _ref12[1];

            var _ref11 = _slicedToArray(_ref10, 2),
                size_x = _ref11[0],
                size_y = _ref11[1];

            var retv = new Array2d([size_x, size_y]);
            for (var dx = 0; dx < size_x; dx++) {
                for (var dy = 0; dy < size_y; dy++) {
                    retv.set([dx, dy], this.get([x + dx, y + dy]));
                }
            }
            return retv;
        }
    }, {
        key: "set_square",
        value: function set_square(_ref13, _ref14, val) {
            var _ref16 = _slicedToArray(_ref13, 2),
                x = _ref16[0],
                y = _ref16[1];

            var _ref15 = _slicedToArray(_ref14, 2),
                size_x = _ref15[0],
                size_y = _ref15[1];

            var fill = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            if (!fill) {
                this.line_h([x, y], size_x - 1, val);
                this.line_h([x, y + size_y - 1], size_x - 1, val);
                this.line_v([x, y], size_y - 1, val);
                this.line_v([x + size_x - 1, y], size_y - 1, val);
            } else {
                for (var dx = 0; dx < size_x; dx++) {
                    for (var dy = 0; dy < size_y; dy++) {
                        this.set([x + dx, y + dy], val);
                    }
                }
            }
        }
    }]);

    return Array2d;
}();

exports.default = Array2d;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _room = __webpack_require__(4);

var _room2 = _interopRequireDefault(_room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Corridor = function (_Room) {
    _inherits(Corridor, _Room);

    function Corridor(options) {
        _classCallCheck(this, Corridor);

        options = Object.assign({}, {
            length: 2,
            facing: 0,
            max_exits: 4
        }, options);

        options.size = options.facing === 0 || options.facing === 180 ? [1, options.length] : [options.length, 1];

        var _this = _possibleConstructorReturn(this, (Corridor.__proto__ || Object.getPrototypeOf(Corridor)).call(this, options));

        var w = _this.size[0] - 1;
        var h = _this.size[1] - 1;

        //special perimeter: allow only 4 exit points, to keep this corridor corridor-like..
        if (_this.facing === 180) _this.perimeter = [[[1, h], 0], [[0, 1], 90], [[2, 1], 270], [[1, 0], 180]];else if (_this.facing === 270) _this.perimeter = [[[0, 1], 90], [[w - 1, 0], 180], [[w - 1, 2], 0], [[w, 1], 270]];else if (_this.facing === 0) _this.perimeter = [[[1, 0], 180], [[2, h - 1], 270], [[0, h - 1], 90], [[1, h], 0]];else if (_this.facing === 90) _this.perimeter = [[[w, 1], 270], [[1, 2], 0], [[1, 0], 180], [[0, 1], 90]];
        return _this;
    }

    return Corridor;
}(_room2.default);

exports.default = Corridor;

/***/ })
/******/ ]);
});