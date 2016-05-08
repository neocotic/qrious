/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.QRious = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":13}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":14}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":15}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":16}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":17}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":18}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":19}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"babel-runtime/core-js/object/define-property":3}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"babel-runtime/core-js/object/create":2,"babel-runtime/core-js/object/set-prototype-of":5,"babel-runtime/helpers/typeof":12}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"babel-runtime/helpers/typeof":12}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("babel-runtime/core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"babel-runtime/core-js/symbol":6,"babel-runtime/core-js/symbol/iterator":7}],13:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":25,"../../modules/es6.object.assign":80}],14:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":25,"../../modules/es6.object.create":81}],15:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":25,"../../modules/es6.object.define-property":82}],16:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":25,"../../modules/es6.object.get-prototype-of":83}],17:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":25,"../../modules/es6.object.set-prototype-of":84}],18:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":25,"../../modules/es6.object.to-string":85,"../../modules/es6.symbol":87,"../../modules/es7.symbol.async-iterator":88,"../../modules/es7.symbol.observable":89}],19:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":77,"../../modules/es6.string.iterator":86,"../../modules/web.dom.iterable":90}],20:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],21:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],22:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":41}],23:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":69,"./_to-iobject":71,"./_to-length":72}],24:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],25:[function(require,module,exports){
var core = module.exports = {version: '2.3.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],26:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":20}],27:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],28:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":33}],29:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":34,"./_is-object":41}],30:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],31:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":56,"./_object-keys":59,"./_object-pie":60}],32:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":25,"./_ctx":26,"./_global":34,"./_hide":36}],33:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],34:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],35:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],36:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":28,"./_object-dp":51,"./_property-desc":62}],37:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":34}],38:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":28,"./_dom-create":29,"./_fails":33}],39:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":24}],40:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":24}],41:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],42:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":36,"./_object-create":50,"./_property-desc":62,"./_set-to-string-tag":65,"./_wks":78}],43:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":32,"./_has":35,"./_hide":36,"./_iter-create":42,"./_iterators":45,"./_library":47,"./_object-gpo":57,"./_redefine":63,"./_set-to-string-tag":65,"./_wks":78}],44:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],45:[function(require,module,exports){
module.exports = {};
},{}],46:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":59,"./_to-iobject":71}],47:[function(require,module,exports){
module.exports = true;
},{}],48:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":33,"./_has":35,"./_is-object":41,"./_object-dp":51,"./_uid":75}],49:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":33,"./_iobject":39,"./_object-gops":56,"./_object-keys":59,"./_object-pie":60,"./_to-object":73}],50:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
},{"./_an-object":22,"./_dom-create":29,"./_enum-bug-keys":30,"./_html":37,"./_object-dps":52,"./_shared-key":66}],51:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":22,"./_descriptors":28,"./_ie8-dom-define":38,"./_to-primitive":74}],52:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":22,"./_descriptors":28,"./_object-dp":51,"./_object-keys":59}],53:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":28,"./_has":35,"./_ie8-dom-define":38,"./_object-pie":60,"./_property-desc":62,"./_to-iobject":71,"./_to-primitive":74}],54:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":55,"./_to-iobject":71}],55:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":30,"./_object-keys-internal":58}],56:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],57:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":35,"./_shared-key":66,"./_to-object":73}],58:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":23,"./_has":35,"./_shared-key":66,"./_to-iobject":71}],59:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":30,"./_object-keys-internal":58}],60:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],61:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":25,"./_export":32,"./_fails":33}],62:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],63:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":36}],64:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":22,"./_ctx":26,"./_is-object":41,"./_object-gopd":53}],65:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":35,"./_object-dp":51,"./_wks":78}],66:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":67,"./_uid":75}],67:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":34}],68:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":27,"./_to-integer":70}],69:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":70}],70:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],71:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":27,"./_iobject":39}],72:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":70}],73:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":27}],74:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":41}],75:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],76:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":25,"./_global":34,"./_library":47,"./_object-dp":51,"./_wks-ext":77}],77:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":78}],78:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":34,"./_shared":67,"./_uid":75}],79:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":21,"./_iter-define":43,"./_iter-step":44,"./_iterators":45,"./_to-iobject":71}],80:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":32,"./_object-assign":49}],81:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":32,"./_object-create":50}],82:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":28,"./_export":32,"./_object-dp":51}],83:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":57,"./_object-sap":61,"./_to-object":73}],84:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":32,"./_set-proto":64}],85:[function(require,module,exports){

},{}],86:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":43,"./_string-at":68}],87:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: function(value){
        if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      }
    });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":22,"./_descriptors":28,"./_enum-keys":31,"./_export":32,"./_fails":33,"./_global":34,"./_has":35,"./_hide":36,"./_is-array":40,"./_keyof":46,"./_library":47,"./_meta":48,"./_object-create":50,"./_object-dp":51,"./_object-gopd":53,"./_object-gopn":55,"./_object-gopn-ext":54,"./_object-gops":56,"./_object-keys":59,"./_object-pie":60,"./_property-desc":62,"./_redefine":63,"./_set-to-string-tag":65,"./_shared":67,"./_to-iobject":71,"./_to-primitive":74,"./_uid":75,"./_wks":78,"./_wks-define":76,"./_wks-ext":77}],88:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":76}],89:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":76}],90:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":34,"./_hide":36,"./_iterators":45,"./_wks":78,"./es6.array.iterator":79}],91:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alignment = function () {
  function Alignment() {
    (0, _classCallCheck3.default)(this, Alignment);
  }

  (0, _createClass3.default)(Alignment, null, [{
    key: "BLOCK",
    get: function get() {
      return [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28];
    }
  }]);
  return Alignment;
}();

module.exports = Alignment;

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}],92:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorCorrection = function () {
  function ErrorCorrection() {
    (0, _classCallCheck3.default)(this, ErrorCorrection);
  }

  (0, _createClass3.default)(ErrorCorrection, null, [{
    key: "BLOCKS",
    get: function get() {
      return [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30];
    }
  }, {
    key: "FINAL_FORMAT",
    get: function get() {
      return [0x77c4, 0x72f3, 0x7daa, 0x789d, 0x662f, 0x6318, 0x6c41, 0x6976, 0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0, 0x355f, 0x3068, 0x3f31, 0x3a06, 0x24b4, 0x2183, 0x2eda, 0x2bed, 0x1689, 0x13be, 0x1ce7, 0x19d0, 0x0762, 0x0255, 0x0d0c, 0x083b];
    }
  }, {
    key: "LEVELS",
    get: function get() {
      return {
        L: 1,
        M: 2,
        Q: 3,
        H: 4
      };
    }
  }]);
  return ErrorCorrection;
}();

module.exports = ErrorCorrection;

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}],93:[function(require,module,exports){
'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alignment = require('./Alignment');
var ErrorCorrection = require('./ErrorCorrection');
var Galois = require('./Galois');
var Version = require('./Version');

var Frame = function () {
  (0, _createClass3.default)(Frame, null, [{
    key: '_createArray',
    value: function _createArray(length) {
      var array = [];

      for (var i = 0; i < length; i++) {
        array[i] = 0;
      }

      return array;
    }
  }, {
    key: '_getMaskBit',
    value: function _getMaskBit(x, y) {
      var bit = void 0;

      if (x > y) {
        bit = x;
        x = y;
        y = bit;
      }

      bit = y;
      bit += y * y;
      bit >>= 1;
      bit += x;

      return bit;
    }
  }, {
    key: '_modN',
    value: function _modN(x) {
      while (x >= 255) {
        x -= 255;
        x = (x >> 8) + (x & 255);
      }

      return x;
    }
  }, {
    key: 'N1',
    get: function get() {
      return 3;
    }
  }, {
    key: 'N2',
    get: function get() {
      return 3;
    }
  }, {
    key: 'N3',
    get: function get() {
      return 40;
    }
  }, {
    key: 'N4',
    get: function get() {
      return 10;
    }
  }]);

  function Frame(options) {
    (0, _classCallCheck3.default)(this, Frame);

    this._badness = [];

    this._level = ErrorCorrection.LEVELS[options.level];

    this._polynomial = [];

    this._value = options.value;

    this._valueLength = this._value.length;

    this._version = 0;

    this._stringBuffer = this._value.slice(0);

    var dataBlock = void 0;
    var eccBlock = void 0;
    var neccBlock1 = void 0;
    var neccBlock2 = void 0;

    while (this._version < 40) {
      this._version++;

      var index = (this._level - 1) * 4 + (this._version - 1) * 16;

      neccBlock1 = ErrorCorrection.BLOCKS[index++];
      neccBlock2 = ErrorCorrection.BLOCKS[index++];
      dataBlock = ErrorCorrection.BLOCKS[index++];
      eccBlock = ErrorCorrection.BLOCKS[index];

      index = dataBlock * (neccBlock1 + neccBlock2) + neccBlock2 - 3 + (this._version <= 9);

      if (this._valueLength <= index) {
        break;
      }
    }

    this._dataBlock = dataBlock;

    this._eccBlock = eccBlock;
    this._neccBlock1 = neccBlock1;
    this._neccBlock2 = neccBlock2;

    this.width = 17 + 4 * this._version;

    this.buffer = Frame._createArray(this.width * this.width);

    this._ecc = Frame._createArray(this._dataBlock + (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2);

    this._mask = Frame._createArray((this.width * (this.width + 1) + 1) / 2);

    this._insertFinders();
    this._insertAlignments();

    this.buffer[8 + this.width * (this.width - 8)] = 1;

    this._insertTimingGap();
    this._reverseMask();
    this._insertTimingRowAndColumn();
    this._insertVersion();
    this._syncMask();
    this._convertBitStream(this._stringBuffer.length);
    this._calculatePolynomial();
    this._appendEccToData();
    this._interleaveBlocks();
    this._pack();
    this._finish();
  }

  (0, _createClass3.default)(Frame, [{
    key: '_addAlignment',
    value: function _addAlignment(x, y) {
      this.buffer[x + this.width * y] = 1;

      for (var i = -2; i < 2; i++) {
        this.buffer[x + i + this.width * (y - 2)] = 1;
        this.buffer[x - 2 + this.width * (y + i + 1)] = 1;
        this.buffer[x + 2 + this.width * (y + i)] = 1;
        this.buffer[x + i + 1 + this.width * (y + 2)] = 1;
      }

      for (var _i = 0; _i < 2; _i++) {
        this._setMask(x - 1, y + _i);
        this._setMask(x + 1, y - _i);
        this._setMask(x - _i, y - 1);
        this._setMask(x + _i, y + 1);
      }
    }
  }, {
    key: '_appendData',
    value: function _appendData(data, dataLength, ecc, eccLength) {
      for (var i = 0; i < eccLength; i++) {
        this._stringBuffer[ecc + i] = 0;
      }

      for (var _i2 = 0; _i2 < dataLength; _i2++) {
        var bit = Galois.LOG[this._stringBuffer[data + _i2] ^ this._stringBuffer[ecc]];

        if (bit !== 255) {
          for (var j = 1; j < eccLength; j++) {
            this._stringBuffer[ecc + j - 1] = this._stringBuffer[ecc + j] ^ Galois.EXPONENT[Frame._modN(bit + this._polynomial[eccLength - j])];
          }
        } else {
          for (var _j = ecc; _j < ecc + eccLength; _j++) {
            this._stringBuffer[_j] = this._stringBuffer[_j + 1];
          }
        }

        this._stringBuffer[ecc + eccLength - 1] = bit === 255 ? 0 : Galois.EXPONENT[Frame._modN(bit + this._polynomial[0])];
      }
    }
  }, {
    key: '_appendEccToData',
    value: function _appendEccToData() {
      var data = 0;
      var ecc = this._calculateMaxLength();

      for (var i = 0; i < this._neccBlock1; i++) {
        this._appendData(data, this._dataBlock, ecc, this._eccBlock);

        data += this._dataBlock;
        ecc += this._eccBlock;
      }

      for (var _i3 = 0; _i3 < this._neccBlock2; _i3++) {
        this._appendData(data, this._dataBlock + 1, ecc, this._eccBlock);

        data += this._dataBlock + 1;
        ecc += this._eccBlock;
      }
    }
  }, {
    key: '_applyMask',
    value: function _applyMask(mask) {
      var width = this.width;

      switch (mask) {
        case 0:
          for (var y = 0; y < width; y++) {
            for (var x = 0; x < width; x++) {
              if (!(x + y & 1) && !this._isMasked(x, y)) {
                this.buffer[x + y * width] ^= 1;
              }
            }
          }

          break;
        case 1:
          for (var _y = 0; _y < width; _y++) {
            for (var _x = 0; _x < width; _x++) {
              if (!(_y & 1) && !this._isMasked(_x, _y)) {
                this.buffer[_x + _y * width] ^= 1;
              }
            }
          }

          break;
        case 2:
          for (var _y2 = 0; _y2 < width; _y2++) {
            for (var r3x = 0, _x2 = 0; _x2 < width; _x2++, r3x++) {
              if (r3x === 3) {
                r3x = 0;
              }

              if (!r3x && !this._isMasked(_x2, _y2)) {
                this.buffer[_x2 + _y2 * width] ^= 1;
              }
            }
          }

          break;
        case 3:
          for (var r3y = 0, _y3 = 0; _y3 < width; _y3++, r3y++) {
            if (r3y === 3) {
              r3y = 0;
            }

            for (var _r3x = r3y, _x3 = 0; _x3 < width; _x3++, _r3x++) {
              if (_r3x === 3) {
                _r3x = 0;
              }

              if (!_r3x && !this._isMasked(_x3, _y3)) {
                this.buffer[_x3 + _y3 * width] ^= 1;
              }
            }
          }

          break;
        case 4:
          for (var _y4 = 0; _y4 < width; _y4++) {
            for (var _r3x2 = 0, _r3y = _y4 >> 1 & 1, _x4 = 0; _x4 < width; _x4++, _r3x2++) {
              if (_r3x2 === 3) {
                _r3x2 = 0;
                _r3y = !_r3y;
              }

              if (!_r3y && !this._isMasked(_x4, _y4)) {
                this.buffer[_x4 + _y4 * width] ^= 1;
              }
            }
          }

          break;
        case 5:
          for (var _r3y2 = 0, _y5 = 0; _y5 < width; _y5++, _r3y2++) {
            if (_r3y2 === 3) {
              _r3y2 = 0;
            }

            for (var _r3x3 = 0, _x5 = 0; _x5 < width; _x5++, _r3x3++) {
              if (_r3x3 === 3) {
                _r3x3 = 0;
              }

              if (!((_x5 & _y5 & 1) + !(!_r3x3 | !_r3y2)) && !this._isMasked(_x5, _y5)) {
                this.buffer[_x5 + _y5 * width] ^= 1;
              }
            }
          }

          break;
        case 6:
          for (var _r3y3 = 0, _y6 = 0; _y6 < width; _y6++, _r3y3++) {
            if (_r3y3 === 3) {
              _r3y3 = 0;
            }

            for (var _r3x4 = 0, _x6 = 0; _x6 < width; _x6++, _r3x4++) {
              if (_r3x4 === 3) {
                _r3x4 = 0;
              }

              if (!(_x6 & _y6 & 1 + (_r3x4 && _r3x4 === _r3y3) & 1) && !this._isMasked(_x6, _y6)) {
                this.buffer[_x6 + _y6 * width] ^= 1;
              }
            }
          }

          break;
        case 7:
          for (var _r3y4 = 0, _y7 = 0; _y7 < width; _y7++, _r3y4++) {
            if (_r3y4 === 3) {
              _r3y4 = 0;
            }

            for (var _r3x5 = 0, _x7 = 0; _x7 < width; _x7++, _r3x5++) {
              if (_r3x5 === 3) {
                _r3x5 = 0;
              }

              if (!((_r3x5 && _r3x5 === _r3y4) + (_x7 + _y7 & 1) & 1) && !this._isMasked(_x7, _y7)) {
                this.buffer[_x7 + _y7 * width] ^= 1;
              }
            }
          }

          break;
      }
    }
  }, {
    key: '_calculateMaxLength',
    value: function _calculateMaxLength() {
      return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
    }
  }, {
    key: '_calculatePolynomial',
    value: function _calculatePolynomial() {
      this._polynomial[0] = 1;

      for (var i = 0; i < this._eccBlock; i++) {
        this._polynomial[i + 1] = 1;

        for (var j = i; j > 0; j--) {
          this._polynomial[j] = this._polynomial[j] ? this._polynomial[j - 1] ^ Galois.EXPONENT[Frame._modN(Galois.LOG[this._polynomial[j]] + i)] : this._polynomial[j - 1];
        }

        this._polynomial[0] = Galois.EXPONENT[Frame._modN(Galois.LOG[this._polynomial[0]] + i)];
      }

      for (var _i4 = 0; _i4 <= this._eccBlock; _i4++) {
        this._polynomial[_i4] = Galois.LOG[this._polynomial[_i4]];
      }
    }
  }, {
    key: '_checkBadness',
    value: function _checkBadness() {
      var bad = 0;
      var width = this.width;

      for (var y = 0; y < width - 1; y++) {
        for (var x = 0; x < width - 1; x++) {
          if (this.buffer[x + width * y] && this.buffer[x + 1 + width * y] && this.buffer[x + width * (y + 1)] && this.buffer[x + 1 + width * (y + 1)] || !(this.buffer[x + width * y] || this.buffer[x + 1 + width * y] || this.buffer[x + width * (y + 1)] || this.buffer[x + 1 + width * (y + 1)])) {
            bad += Frame.N2;
          }
        }
      }

      var bw = 0;

      for (var _y8 = 0; _y8 < width; _y8++) {
        var h = 0;

        this._badness[0] = 0;

        for (var b = 0, _x8 = 0; _x8 < width; _x8++) {
          var b1 = this.buffer[_x8 + width * _y8];

          if (b === b1) {
            this._badness[h]++;
          } else {
            this._badness[++h] = 1;
          }

          b = b1;
          bw += b ? 1 : -1;
        }

        bad += this._getBadness(h);
      }

      if (bw < 0) {
        bw = -bw;
      }

      var count = 0;
      var big = bw;
      big += big << 2;
      big <<= 1;

      while (big > width * width) {
        big -= width * width;
        count++;
      }

      bad += count * Frame.N4;

      for (var _x9 = 0; _x9 < width; _x9++) {
        var _h = 0;

        this._badness[0] = 0;

        for (var _b = 0, _y9 = 0; _y9 < width; _y9++) {
          var _b2 = this.buffer[_x9 + width * _y9];

          if (_b === _b2) {
            this._badness[_h]++;
          } else {
            this._badness[++_h] = 1;
          }

          _b = _b2;
        }

        bad += this._getBadness(_h);
      }

      return bad;
    }
  }, {
    key: '_convertBitStream',
    value: function _convertBitStream(length) {

      for (var i = 0; i < length; i++) {
        this._ecc[i] = this._stringBuffer.charCodeAt(i);
      }

      this._stringBuffer = this._ecc.slice(0);

      var maxLength = this._calculateMaxLength();

      if (length >= maxLength - 2) {
        length = maxLength - 2;

        if (this._version > 9) {
          length--;
        }
      }

      var index = length;

      if (this._version > 9) {
        this._stringBuffer[index + 2] = 0;
        this._stringBuffer[index + 3] = 0;

        while (index--) {
          var bit = this._stringBuffer[index];

          this._stringBuffer[index + 3] |= 255 & bit << 4;
          this._stringBuffer[index + 2] = bit >> 4;
        }

        this._stringBuffer[2] |= 255 & length << 4;
        this._stringBuffer[1] = length >> 4;
        this._stringBuffer[0] = 0x40 | length >> 12;
      } else {
        this._stringBuffer[index + 1] = 0;
        this._stringBuffer[index + 2] = 0;

        while (index--) {
          var _bit = this._stringBuffer[index];

          this._stringBuffer[index + 2] |= 255 & _bit << 4;
          this._stringBuffer[index + 1] = _bit >> 4;
        }

        this._stringBuffer[1] |= 255 & length << 4;
        this._stringBuffer[0] = 0x40 | length >> 4;
      }

      index = length + 3 - (this._version < 10);

      while (index < maxLength) {
        this._stringBuffer[index++] = 0xec;
        this._stringBuffer[index++] = 0x11;
      }
    }
  }, {
    key: '_getBadness',
    value: function _getBadness(length) {
      var badRuns = 0;

      for (var i = 0; i <= length; i++) {
        if (this._badness[i] >= 5) {
          badRuns += Frame.N1 + this._badness[i] - 5;
        }
      }

      for (var _i5 = 3; _i5 < length - 1; _i5 += 2) {
        if (this._badness[_i5 - 2] === this._badness[_i5 + 2] && this._badness[_i5 + 2] === this._badness[_i5 - 1] && this._badness[_i5 - 1] === this._badness[_i5 + 1] && this._badness[_i5 - 1] * 3 === this._badness[_i5] && (this._badness[_i5 - 3] === 0 || _i5 + 3 > length || this._badness[_i5 - 3] * 3 >= this._badness[_i5] * 4 || this._badness[_i5 + 3] * 3 >= this._badness[_i5] * 4)) {
          badRuns += Frame.N3;
        }
      }

      return badRuns;
    }
  }, {
    key: '_finish',
    value: function _finish() {
      this._stringBuffer = this.buffer.slice(0);

      var bit = 0;
      var i = void 0;
      var mask = 30000;

      for (i = 0; i < 8; i++) {
        this._applyMask(i);

        var currentMask = this._checkBadness();

        if (currentMask < mask) {
          mask = currentMask;
          bit = i;
        }

        if (bit === 7) {
          break;
        }

        this.buffer = this._stringBuffer.slice(0);
      }

      if (bit !== i) {
        this._applyMask(bit);
      }

      mask = ErrorCorrection.FINAL_FORMAT[bit + (this._level - 1 << 3)];

      for (i = 0; i < 8; i++, mask >>= 1) {
        if (mask & 1) {
          this.buffer[this.width - 1 - i + this.width * 8] = 1;

          if (i < 6) {
            this.buffer[8 + this.width * i] = 1;
          } else {
            this.buffer[8 + this.width * (i + 1)] = 1;
          }
        }
      }

      for (i = 0; i < 7; i++, mask >>= 1) {
        if (mask & 1) {
          this.buffer[8 + this.width * (this.width - 7 + i)] = 1;

          if (i) {
            this.buffer[6 - i + this.width * 8] = 1;
          } else {
            this.buffer[7 + this.width * 8] = 1;
          }
        }
      }
    }
  }, {
    key: '_interleaveBlocks',
    value: function _interleaveBlocks() {
      var maxLength = this._calculateMaxLength();
      var i = void 0;
      var k = 0;

      for (i = 0; i < this._dataBlock; i++) {
        for (var j = 0; j < this._neccBlock1; j++) {
          this._ecc[k++] = this._stringBuffer[i + j * this._dataBlock];
        }

        for (var _j2 = 0; _j2 < this._neccBlock2; _j2++) {
          this._ecc[k++] = this._stringBuffer[this._neccBlock1 * this._dataBlock + i + _j2 * (this._dataBlock + 1)];
        }
      }

      for (var _j3 = 0; _j3 < this._neccBlock2; _j3++) {
        this._ecc[k++] = this._stringBuffer[this._neccBlock1 * this._dataBlock + i + _j3 * (this._dataBlock + 1)];
      }

      for (i = 0; i < this._eccBlock; i++) {
        for (var _j4 = 0; _j4 < this._neccBlock1 + this._neccBlock2; _j4++) {
          this._ecc[k++] = this._stringBuffer[maxLength + i + _j4 * this._eccBlock];
        }
      }

      this._stringBuffer = this._ecc;
    }
  }, {
    key: '_insertAlignments',
    value: function _insertAlignments() {
      var width = this.width;

      if (this._version > 1) {
        var i = Alignment.BLOCK[this._version];
        var y = width - 7;

        for (;;) {
          var x = width - 7;

          while (x > i - 3) {
            this._addAlignment(x, y);

            if (x < i) {
              break;
            }

            x -= i;
          }

          if (y <= i + 9) {
            break;
          }

          y -= i;

          this._addAlignment(6, y);
          this._addAlignment(y, 6);
        }
      }
    }
  }, {
    key: '_insertFinders',
    value: function _insertFinders() {
      var width = this.width;

      for (var i = 0; i < 3; i++) {
        var j = 0;
        var y = 0;

        if (i === 1) {
          j = width - 7;
        }
        if (i === 2) {
          y = width - 7;
        }

        this.buffer[y + 3 + width * (j + 3)] = 1;

        for (var x = 0; x < 6; x++) {
          this.buffer[y + x + width * j] = 1;
          this.buffer[y + width * (j + x + 1)] = 1;
          this.buffer[y + 6 + width * (j + x)] = 1;
          this.buffer[y + x + 1 + width * (j + 6)] = 1;
        }

        for (var _x10 = 1; _x10 < 5; _x10++) {
          this._setMask(y + _x10, j + 1);
          this._setMask(y + 1, j + _x10 + 1);
          this._setMask(y + 5, j + _x10);
          this._setMask(y + _x10 + 1, j + 5);
        }

        for (var _x11 = 2; _x11 < 4; _x11++) {
          this.buffer[y + _x11 + width * (j + 2)] = 1;
          this.buffer[y + 2 + width * (j + _x11 + 1)] = 1;
          this.buffer[y + 4 + width * (j + _x11)] = 1;
          this.buffer[y + _x11 + 1 + width * (j + 4)] = 1;
        }
      }
    }
  }, {
    key: '_insertTimingGap',
    value: function _insertTimingGap() {
      var width = this.width;

      for (var y = 0; y < 7; y++) {
        this._setMask(7, y);
        this._setMask(width - 8, y);
        this._setMask(7, y + width - 7);
      }

      for (var x = 0; x < 8; x++) {
        this._setMask(x, 7);
        this._setMask(x + width - 8, 7);
        this._setMask(x, width - 8);
      }
    }
  }, {
    key: '_insertTimingRowAndColumn',
    value: function _insertTimingRowAndColumn() {
      var width = this.width;

      for (var x = 0; x < width - 14; x++) {
        if (x & 1) {
          this._setMask(8 + x, 6);
          this._setMask(6, 8 + x);
        } else {
          this.buffer[8 + x + width * 6] = 1;
          this.buffer[6 + width * (8 + x)] = 1;
        }
      }
    }
  }, {
    key: '_insertVersion',
    value: function _insertVersion() {
      var width = this.width;

      if (this._version > 6) {
        var i = Version.BLOCK[this._version - 7];
        var j = 17;

        for (var x = 0; x < 6; x++) {
          for (var y = 0; y < 3; y++, j--) {
            if (1 & (j > 11 ? this._version >> j - 12 : i >> j)) {
              this.buffer[5 - x + width * (2 - y + width - 11)] = 1;
              this.buffer[2 - y + width - 11 + width * (5 - x)] = 1;
            } else {
              this._setMask(5 - x, 2 - y + width - 11);
              this._setMask(2 - y + width - 11, 5 - x);
            }
          }
        }
      }
    }
  }, {
    key: '_isMasked',
    value: function _isMasked(x, y) {
      var bit = Frame._getMaskBit(x, y);

      return this._mask[bit] === 1;
    }
  }, {
    key: '_pack',
    value: function _pack() {
      var x = this.width - 1;
      var y = this.width - 1;
      var k = 1;
      var v = 1;

      var length = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;

      for (var i = 0; i < length; i++) {
        var bit = this._stringBuffer[i];

        for (var j = 0; j < 8; j++, bit <<= 1) {
          if (0x80 & bit) {
            this.buffer[x + this.width * y] = 1;
          }

          do {
            if (v) {
              x--;
            } else {
              x++;

              if (k) {
                if (y !== 0) {
                  y--;
                } else {
                  x -= 2;
                  k = !k;

                  if (x === 6) {
                    x--;
                    y = 9;
                  }
                }
              } else if (y !== this.width - 1) {
                y++;
              } else {
                x -= 2;
                k = !k;

                if (x === 6) {
                  x--;
                  y -= 8;
                }
              }
            }

            v = !v;
          } while (this._isMasked(x, y));
        }
      }
    }
  }, {
    key: '_reverseMask',
    value: function _reverseMask() {
      var width = this.width;

      for (var x = 0; x < 9; x++) {
        this._setMask(x, 8);
      }

      for (var _x12 = 0; _x12 < 8; _x12++) {
        this._setMask(_x12 + width - 8, 8);
        this._setMask(8, _x12);
      }

      for (var y = 0; y < 7; y++) {
        this._setMask(8, y + width - 7);
      }
    }
  }, {
    key: '_setMask',
    value: function _setMask(x, y) {
      var bit = Frame._getMaskBit(x, y);

      this._mask[bit] = 1;
    }
  }, {
    key: '_syncMask',
    value: function _syncMask() {
      var width = this.width;

      for (var y = 0; y < width; y++) {
        for (var x = 0; x <= y; x++) {
          if (this.buffer[x + width * y]) {
            this._setMask(x, y);
          }
        }
      }
    }
  }]);
  return Frame;
}();

module.exports = Frame;

},{"./Alignment":91,"./ErrorCorrection":92,"./Galois":94,"./Version":96,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}],94:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Galois = function () {
  function Galois() {
    (0, _classCallCheck3.default)(this, Galois);
  }

  (0, _createClass3.default)(Galois, null, [{
    key: "EXPONENT",
    get: function get() {
      return [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1d, 0x3a, 0x74, 0xe8, 0xcd, 0x87, 0x13, 0x26, 0x4c, 0x98, 0x2d, 0x5a, 0xb4, 0x75, 0xea, 0xc9, 0x8f, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0, 0x9d, 0x27, 0x4e, 0x9c, 0x25, 0x4a, 0x94, 0x35, 0x6a, 0xd4, 0xb5, 0x77, 0xee, 0xc1, 0x9f, 0x23, 0x46, 0x8c, 0x05, 0x0a, 0x14, 0x28, 0x50, 0xa0, 0x5d, 0xba, 0x69, 0xd2, 0xb9, 0x6f, 0xde, 0xa1, 0x5f, 0xbe, 0x61, 0xc2, 0x99, 0x2f, 0x5e, 0xbc, 0x65, 0xca, 0x89, 0x0f, 0x1e, 0x3c, 0x78, 0xf0, 0xfd, 0xe7, 0xd3, 0xbb, 0x6b, 0xd6, 0xb1, 0x7f, 0xfe, 0xe1, 0xdf, 0xa3, 0x5b, 0xb6, 0x71, 0xe2, 0xd9, 0xaf, 0x43, 0x86, 0x11, 0x22, 0x44, 0x88, 0x0d, 0x1a, 0x34, 0x68, 0xd0, 0xbd, 0x67, 0xce, 0x81, 0x1f, 0x3e, 0x7c, 0xf8, 0xed, 0xc7, 0x93, 0x3b, 0x76, 0xec, 0xc5, 0x97, 0x33, 0x66, 0xcc, 0x85, 0x17, 0x2e, 0x5c, 0xb8, 0x6d, 0xda, 0xa9, 0x4f, 0x9e, 0x21, 0x42, 0x84, 0x15, 0x2a, 0x54, 0xa8, 0x4d, 0x9a, 0x29, 0x52, 0xa4, 0x55, 0xaa, 0x49, 0x92, 0x39, 0x72, 0xe4, 0xd5, 0xb7, 0x73, 0xe6, 0xd1, 0xbf, 0x63, 0xc6, 0x91, 0x3f, 0x7e, 0xfc, 0xe5, 0xd7, 0xb3, 0x7b, 0xf6, 0xf1, 0xff, 0xe3, 0xdb, 0xab, 0x4b, 0x96, 0x31, 0x62, 0xc4, 0x95, 0x37, 0x6e, 0xdc, 0xa5, 0x57, 0xae, 0x41, 0x82, 0x19, 0x32, 0x64, 0xc8, 0x8d, 0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xdd, 0xa7, 0x53, 0xa6, 0x51, 0xa2, 0x59, 0xb2, 0x79, 0xf2, 0xf9, 0xef, 0xc3, 0x9b, 0x2b, 0x56, 0xac, 0x45, 0x8a, 0x09, 0x12, 0x24, 0x48, 0x90, 0x3d, 0x7a, 0xf4, 0xf5, 0xf7, 0xf3, 0xfb, 0xeb, 0xcb, 0x8b, 0x0b, 0x16, 0x2c, 0x58, 0xb0, 0x7d, 0xfa, 0xe9, 0xcf, 0x83, 0x1b, 0x36, 0x6c, 0xd8, 0xad, 0x47, 0x8e, 0x00];
    }
  }, {
    key: "LOG",
    get: function get() {
      return [0xff, 0x00, 0x01, 0x19, 0x02, 0x32, 0x1a, 0xc6, 0x03, 0xdf, 0x33, 0xee, 0x1b, 0x68, 0xc7, 0x4b, 0x04, 0x64, 0xe0, 0x0e, 0x34, 0x8d, 0xef, 0x81, 0x1c, 0xc1, 0x69, 0xf8, 0xc8, 0x08, 0x4c, 0x71, 0x05, 0x8a, 0x65, 0x2f, 0xe1, 0x24, 0x0f, 0x21, 0x35, 0x93, 0x8e, 0xda, 0xf0, 0x12, 0x82, 0x45, 0x1d, 0xb5, 0xc2, 0x7d, 0x6a, 0x27, 0xf9, 0xb9, 0xc9, 0x9a, 0x09, 0x78, 0x4d, 0xe4, 0x72, 0xa6, 0x06, 0xbf, 0x8b, 0x62, 0x66, 0xdd, 0x30, 0xfd, 0xe2, 0x98, 0x25, 0xb3, 0x10, 0x91, 0x22, 0x88, 0x36, 0xd0, 0x94, 0xce, 0x8f, 0x96, 0xdb, 0xbd, 0xf1, 0xd2, 0x13, 0x5c, 0x83, 0x38, 0x46, 0x40, 0x1e, 0x42, 0xb6, 0xa3, 0xc3, 0x48, 0x7e, 0x6e, 0x6b, 0x3a, 0x28, 0x54, 0xfa, 0x85, 0xba, 0x3d, 0xca, 0x5e, 0x9b, 0x9f, 0x0a, 0x15, 0x79, 0x2b, 0x4e, 0xd4, 0xe5, 0xac, 0x73, 0xf3, 0xa7, 0x57, 0x07, 0x70, 0xc0, 0xf7, 0x8c, 0x80, 0x63, 0x0d, 0x67, 0x4a, 0xde, 0xed, 0x31, 0xc5, 0xfe, 0x18, 0xe3, 0xa5, 0x99, 0x77, 0x26, 0xb8, 0xb4, 0x7c, 0x11, 0x44, 0x92, 0xd9, 0x23, 0x20, 0x89, 0x2e, 0x37, 0x3f, 0xd1, 0x5b, 0x95, 0xbc, 0xcf, 0xcd, 0x90, 0x87, 0x97, 0xb2, 0xdc, 0xfc, 0xbe, 0x61, 0xf2, 0x56, 0xd3, 0xab, 0x14, 0x2a, 0x5d, 0x9e, 0x84, 0x3c, 0x39, 0x53, 0x47, 0x6d, 0x41, 0xa2, 0x1f, 0x2d, 0x43, 0xd8, 0xb7, 0x7b, 0xa4, 0x76, 0xc4, 0x17, 0x49, 0xec, 0x7f, 0x0c, 0x6f, 0xf6, 0x6c, 0xa1, 0x3b, 0x52, 0x29, 0x9d, 0x55, 0xaa, 0xfb, 0x60, 0x86, 0xb1, 0xbb, 0xcc, 0x3e, 0x5a, 0xcb, 0x59, 0x5f, 0xb0, 0x9c, 0xa9, 0xa0, 0x51, 0x0b, 0xf5, 0x16, 0xeb, 0x7a, 0x75, 0x2c, 0xd7, 0x4f, 0xae, 0xd5, 0xe9, 0xe6, 0xe7, 0xad, 0xe8, 0x74, 0xd6, 0xf4, 0xea, 0xa8, 0x50, 0x58, 0xaf];
    }
  }]);
  return Galois;
}();

module.exports = Galois;

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}],95:[function(require,module,exports){
'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CanvasRenderer = require('./renderer/CanvasRenderer');
var ElementServiceProvider = require('./service/element/ElementServiceProvider');
var Frame = require('./Frame');
var ImageRenderer = require('./renderer/ImageRenderer');
var Utilities = require('./util/Utilities');

var QRious = function () {
  (0, _createClass3.default)(QRious, null, [{
    key: '_parseOptions',
    value: function _parseOptions(options) {
      options = (0, _assign2.default)({}, QRious.DEFAULTS, options);
      options.level = Utilities.toUpperCase(options.level);
      options.size = Math.abs(options.size);

      return options;
    }
  }, {
    key: 'DEFAULTS',
    get: function get() {
      return {
        background: 'white',
        foreground: 'black',
        level: 'L',
        mime: 'image/png',
        size: 100,
        value: ''
      };
    }
  }, {
    key: 'VERSION',
    get: function get() {
      return '2.0.0';
    }
  }]);

  function QRious(options) {
    (0, _classCallCheck3.default)(this, QRious);

    options = QRious._parseOptions(options);

    Utilities.privatize(this, options);

    this._elementService = new ElementServiceProvider().getService();

    this.canvas = this._element && this._elementService.isCanvas(this._element) ? this._element : this._elementService.createCanvas();
    this.canvas.qrious = this;

    this.image = this._element && this._elementService.isImage(this._element) ? this._element : this._elementService.createImage();
    this.image.qrious = this;

    this._renderers = [new CanvasRenderer(this), new ImageRenderer(this)];

    this.update();
  }

  (0, _createClass3.default)(QRious, [{
    key: 'toDataURL',
    value: function toDataURL(mime) {
      return this.canvas.toDataURL(mime || this.mime);
    }
  }, {
    key: 'update',
    value: function update() {
      var frame = new Frame({
        level: this.level,
        value: this.value
      });

      this._renderers.forEach(function (renderer) {
        return renderer.render(frame);
      });
    }
  }, {
    key: 'background',
    get: function get() {
      return this._background;
    },
    set: function set(background) {
      var changed = Utilities.setter(this, '_background', background, QRious.DEFAULTS.background);

      if (changed) {
        this.update();
      }
    }
  }, {
    key: 'foreground',
    get: function get() {
      return this._foreground;
    },
    set: function set(foreground) {
      var changed = Utilities.setter(this, '_foreground', foreground, QRious.DEFAULTS.foreground);

      if (changed) {
        this.update();
      }
    }
  }, {
    key: 'level',
    get: function get() {
      return this._level;
    },
    set: function set(level) {
      var changed = Utilities.setter(this, '_level', level, QRious.DEFAULTS.level, Utilities.toUpperCase);

      if (changed) {
        this.update();
      }
    }
  }, {
    key: 'mime',
    get: function get() {
      return this._mime;
    },
    set: function set(mime) {
      var changed = Utilities.setter(this, '_mime', mime, QRious.DEFAULTS.mime);

      if (changed) {
        this.update();
      }
    }
  }, {
    key: 'size',
    get: function get() {
      return this._size;
    },
    set: function set(size) {
      var changed = Utilities.setter(this, '_size', size, QRious.DEFAULTS.size, Math.abs);

      if (changed) {
        this.update();
      }
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      var changed = Utilities.setter(this, '_value', value, QRious.DEFAULTS.value);

      if (changed) {
        this.update();
      }
    }
  }]);
  return QRious;
}();

module.exports = QRious;

},{"./Frame":93,"./renderer/CanvasRenderer":98,"./renderer/ImageRenderer":99,"./service/element/ElementServiceProvider":105,"./util/Utilities":107,"babel-runtime/core-js/object/assign":1,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}],96:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Version = function () {
  function Version() {
    (0, _classCallCheck3.default)(this, Version);
  }

  (0, _createClass3.default)(Version, null, [{
    key: "BLOCK",
    get: function get() {
      return [0xc94, 0x5bc, 0xa99, 0x4d3, 0xbf6, 0x762, 0x847, 0x60d, 0x928, 0xb78, 0x45d, 0xa17, 0x532, 0x9a6, 0x683, 0x8c9, 0x7ec, 0xec4, 0x1e1, 0xfab, 0x08e, 0xc1a, 0x33f, 0xd75, 0x250, 0x9d5, 0x6f0, 0x8ba, 0x79f, 0xb0b, 0x42e, 0xa64, 0x541, 0xc69];
    }
  }]);
  return Version;
}();

module.exports = Version;

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}],97:[function(require,module,exports){
'use strict';

module.exports = require('./QRious');

},{"./QRious":95}],98:[function(require,module,exports){
'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Renderer = require('./Renderer');

var CanvasRenderer = function (_Renderer) {
  (0, _inherits3.default)(CanvasRenderer, _Renderer);

  function CanvasRenderer() {
    (0, _classCallCheck3.default)(this, CanvasRenderer);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CanvasRenderer).apply(this, arguments));
  }

  (0, _createClass3.default)(CanvasRenderer, [{
    key: 'draw',
    value: function draw(frame) {
      var qrious = this.qrious;
      var pixels = this.getPixels(frame);
      var offset = this.getOffset(frame);
      var context = qrious.canvas.getContext('2d');

      context.fillStyle = qrious.foreground;

      for (var i = 0; i < frame.width; i++) {
        for (var j = 0; j < frame.width; j++) {
          if (frame.buffer[j * frame.width + i]) {
            context.fillRect(pixels * i + offset, pixels * j + offset, pixels, pixels);
          }
        }
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      var qrious = this.qrious;
      var context = qrious.canvas.getContext('2d');

      context.lineWidth = 1;
      context.clearRect(0, 0, qrious.size, qrious.size);
      context.fillStyle = qrious.background;
      context.fillRect(0, 0, qrious.size, qrious.size);
    }
  }, {
    key: 'resize',
    value: function resize() {
      var qrious = this.qrious;
      var canvas = qrious.canvas;

      canvas.width = qrious.size;
      canvas.height = qrious.size;
    }
  }]);
  return CanvasRenderer;
}(Renderer);

module.exports = CanvasRenderer;

},{"./Renderer":100,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11}],99:[function(require,module,exports){
'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Renderer = require('./Renderer');

var ImageRenderer = function (_Renderer) {
  (0, _inherits3.default)(ImageRenderer, _Renderer);

  function ImageRenderer() {
    (0, _classCallCheck3.default)(this, ImageRenderer);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ImageRenderer).apply(this, arguments));
  }

  (0, _createClass3.default)(ImageRenderer, [{
    key: 'draw',
    value: function draw() {
      var qrious = this.qrious;

      qrious.image.src = qrious.toDataURL();
    }
  }, {
    key: 'reset',
    value: function reset() {
      var qrious = this.qrious;

      qrious.image.src = '';
    }
  }, {
    key: 'resize',
    value: function resize() {
      var qrious = this.qrious;
      var image = qrious.image;

      image.width = qrious.size;
      image.height = qrious.size;
    }
  }]);
  return ImageRenderer;
}(Renderer);

module.exports = ImageRenderer;

},{"./Renderer":100,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11}],100:[function(require,module,exports){
'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utilities = require('../util/Utilities');

var Renderer = function () {
  function Renderer(qrious) {
    (0, _classCallCheck3.default)(this, Renderer);

    this.qrious = qrious;
  }

  (0, _createClass3.default)(Renderer, [{
    key: 'draw',
    value: function draw(frame) {
      Utilities.throwUnimplemented('Renderer', 'draw');
    }
  }, {
    key: 'getOffset',
    value: function getOffset(frame) {
      var pixels = this.getPixels(frame);

      return Math.floor((this.qrious.size - pixels * frame.width) / 2);
    }
  }, {
    key: 'getPixels',
    value: function getPixels(frame) {
      var pixels = this.qrious.size / frame.width;

      return Math.floor(pixels);
    }
  }, {
    key: 'render',
    value: function render(frame) {
      this.resize();
      this.reset();
      this.draw(frame);
    }
  }, {
    key: 'reset',
    value: function reset() {
      Utilities.throwUnimplemented('Renderer', 'reset');
    }
  }, {
    key: 'resize',
    value: function resize() {
      Utilities.throwUnimplemented('Renderer', 'resize');
    }
  }]);
  return Renderer;
}();

module.exports = Renderer;

},{"../util/Utilities":107,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}],101:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Service = function () {
  function Service() {
    (0, _classCallCheck3.default)(this, Service);
  }

  (0, _createClass3.default)(Service, null, [{
    key: "isSupported",
    value: function isSupported() {
      return true;
    }
  }]);
  return Service;
}();

module.exports = Service;

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}],102:[function(require,module,exports){
'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServiceProvider = function () {
  function ServiceProvider(implementations) {
    (0, _classCallCheck3.default)(this, ServiceProvider);

    this.implementations = implementations ? implementations.slice(0) : [];
  }

  (0, _createClass3.default)(ServiceProvider, [{
    key: 'getService',
    value: function getService() {
      var Service = this.implementations.find(function (Implementation) {
        return typeof Implementation.isSupported === 'function' && Implementation.isSupported();
      });

      if (!Service) {
        throw new Error('Unable to provide service implementation');
      }

      return new Service();
    }
  }]);
  return ServiceProvider;
}();

module.exports = ServiceProvider;

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}],103:[function(require,module,exports){
'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ElementService = require('./ElementService');

var BrowserElementService = function (_ElementService) {
  (0, _inherits3.default)(BrowserElementService, _ElementService);

  function BrowserElementService() {
    (0, _classCallCheck3.default)(this, BrowserElementService);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BrowserElementService).apply(this, arguments));
  }

  (0, _createClass3.default)(BrowserElementService, [{
    key: 'createCanvas',
    value: function createCanvas() {
      return document.createElement('canvas');
    }
  }, {
    key: 'createImage',
    value: function createImage() {
      return document.createElement('img');
    }
  }, {
    key: 'isCanvas',
    value: function isCanvas(element) {
      return element instanceof HTMLCanvasElement;
    }
  }, {
    key: 'isImage',
    value: function isImage(element) {
      return element instanceof HTMLImageElement;
    }
  }]);
  return BrowserElementService;
}(ElementService);

module.exports = BrowserElementService;

},{"./ElementService":104,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11}],104:[function(require,module,exports){
'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Service = require('../Service');
var Utilities = require('../../util/Utilities');

var ElementService = function (_Service) {
  (0, _inherits3.default)(ElementService, _Service);

  function ElementService() {
    (0, _classCallCheck3.default)(this, ElementService);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ElementService).apply(this, arguments));
  }

  (0, _createClass3.default)(ElementService, [{
    key: 'createCanvas',
    value: function createCanvas() {
      Utilities.throwUnimplemented('ElementService', 'createCanvas');
    }
  }, {
    key: 'createImage',
    value: function createImage() {
      Utilities.throwUnimplemented('ElementService', 'createImage');
    }
  }, {
    key: 'isCanvas',
    value: function isCanvas(element) {
      Utilities.throwUnimplemented('ElementService', 'isCanvas');
    }
  }, {
    key: 'isImage',
    value: function isImage(element) {
      Utilities.throwUnimplemented('ElementService', 'isImage');
    }
  }]);
  return ElementService;
}(Service);

module.exports = ElementService;

},{"../../util/Utilities":107,"../Service":101,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11}],105:[function(require,module,exports){
'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrowserElementService = require('./BrowserElementService');
var NodeElementService = require('./NodeElementService');
var ServiceProvider = require('../ServiceProvider');

var ElementServiceProvider = function (_ServiceProvider) {
  (0, _inherits3.default)(ElementServiceProvider, _ServiceProvider);

  function ElementServiceProvider() {
    (0, _classCallCheck3.default)(this, ElementServiceProvider);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ElementServiceProvider).call(this, [NodeElementService, BrowserElementService]));
  }

  return ElementServiceProvider;
}(ServiceProvider);

module.exports = ElementServiceProvider;

},{"../ServiceProvider":102,"./BrowserElementService":103,"./NodeElementService":106,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11}],106:[function(require,module,exports){
'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Canvas = void 0;
try {
  Canvas = require('canvas');
} catch (error) {}

var ElementService = require('./ElementService');

var NodeElementService = function (_ElementService) {
  (0, _inherits3.default)(NodeElementService, _ElementService);

  function NodeElementService() {
    (0, _classCallCheck3.default)(this, NodeElementService);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NodeElementService).apply(this, arguments));
  }

  (0, _createClass3.default)(NodeElementService, [{
    key: 'createCanvas',
    value: function createCanvas() {
      return new Canvas();
    }
  }, {
    key: 'createImage',
    value: function createImage() {
      return new Canvas.Image();
    }
  }, {
    key: 'isCanvas',
    value: function isCanvas(element) {
      return element instanceof Canvas;
    }
  }, {
    key: 'isImage',
    value: function isImage(element) {
      return element instanceof Canvas.Image;
    }
  }], [{
    key: 'isSupported',
    value: function isSupported() {
      return Canvas != null;
    }
  }]);
  return NodeElementService;
}(ElementService);

module.exports = NodeElementService;

},{"./ElementService":104,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11,"canvas":"canvas"}],107:[function(require,module,exports){
'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utilities = function () {
  function Utilities() {
    (0, _classCallCheck3.default)(this, Utilities);
  }

  (0, _createClass3.default)(Utilities, null, [{
    key: 'privatize',
    value: function privatize(target, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          target['_' + key] = source[key];
        }
      }

      return target;
    }
  }, {
    key: 'setter',
    value: function setter(object, fieldName, value, defaultValue, transformer) {
      var oldValue = object[fieldName];
      var newValue = value != null ? value : defaultValue;
      if (typeof transformer === 'function') {
        newValue = transformer(newValue);
      }

      object[fieldName] = newValue;

      return newValue !== oldValue;
    }
  }, {
    key: 'throwUnimplemented',
    value: function throwUnimplemented(className, methodName) {
      throw new Error('"' + methodName + '" method must be implemented on the ' + className + ' class');
    }
  }, {
    key: 'toUpperCase',
    value: function toUpperCase(string) {
      return string != null && string.toUpperCase();
    }
  }]);
  return Utilities;
}();

module.exports = Utilities;

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}]},{},[97])(97)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJzcmNcXEFsaWdubWVudC5qcyIsInNyY1xcRXJyb3JDb3JyZWN0aW9uLmpzIiwic3JjXFxGcmFtZS5qcyIsInNyY1xcR2Fsb2lzLmpzIiwic3JjXFxRUmlvdXMuanMiLCJzcmNcXFZlcnNpb24uanMiLCJzcmNcXGluZGV4LmpzIiwic3JjXFxyZW5kZXJlclxcQ2FudmFzUmVuZGVyZXIuanMiLCJzcmNcXHJlbmRlcmVyXFxJbWFnZVJlbmRlcmVyLmpzIiwic3JjXFxyZW5kZXJlclxcUmVuZGVyZXIuanMiLCJzcmNcXHNlcnZpY2VcXFNlcnZpY2UuanMiLCJzcmNcXHNlcnZpY2VcXFNlcnZpY2VQcm92aWRlci5qcyIsInNyY1xcc2VydmljZVxcZWxlbWVudFxcQnJvd3NlckVsZW1lbnRTZXJ2aWNlLmpzIiwic3JjXFxzZXJ2aWNlXFxlbGVtZW50XFxFbGVtZW50U2VydmljZS5qcyIsInNyY1xcc2VydmljZVxcZWxlbWVudFxcRWxlbWVudFNlcnZpY2VQcm92aWRlci5qcyIsInNyY1xcc2VydmljZVxcZWxlbWVudFxcTm9kZUVsZW1lbnRTZXJ2aWNlLmpzIiwic3JjXFx1dGlsXFxVdGlsaXRpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTs7QUNGQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LENBQWpCO0FBQ0EsVUFBSSxXQUFXLFNBQVMsSUFBVCxHQUFnQixLQUFoQixHQUF3QixZQUF2QztBQUNBLFVBQUksT0FBTyxXQUFQLEtBQXVCLFVBQTNCLEVBQXVDO0FBQ3JDLG1CQUFXLFlBQVksUUFBWixDQUFYO0FBQ0Q7O0FBRUQsYUFBTyxTQUFQLElBQW9CLFFBQXBCOztBQUVBLGFBQU8sYUFBYSxRQUFwQjtBQUNEOzs7dUNBV3lCLFMsRUFBVyxVLEVBQVk7QUFDL0MsWUFBTSxJQUFJLEtBQUosT0FBYyxVQUFkLDRDQUErRCxTQUEvRCxZQUFOO0FBQ0Q7OztnQ0FVa0IsTSxFQUFRO0FBQ3pCLGFBQU8sVUFBVSxJQUFWLElBQWtCLE9BQU8sV0FBUCxFQUF6QjtBQUNEOzs7OztBQUdILE9BQU8sT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuMy4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xyXG5tb2R1bGUuZXhwb3J0cyA9IChcclxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xyXG4pLnNwbGl0KCcsJyk7IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcclxuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XHJcbn0pOyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxyXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxyXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcclxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXHJcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxyXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XHJcbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xyXG5cclxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxyXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XHJcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcclxuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxyXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcclxuICAgICwgZ3QgICAgID0gJz4nXHJcbiAgICAsIGlmcmFtZURvY3VtZW50O1xyXG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcclxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xyXG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcclxuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xyXG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcclxuICBpZnJhbWVEb2N1bWVudC53cml0ZSgnPHNjcmlwdD5kb2N1bWVudC5GPU9iamVjdDwvc2NyaXB0JyArIGd0KTtcclxuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xyXG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xyXG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcclxuICByZXR1cm4gY3JlYXRlRGljdCgpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcclxuICB2YXIgcmVzdWx0O1xyXG4gIGlmKE8gIT09IG51bGwpe1xyXG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xyXG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xyXG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XHJcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXHJcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcclxuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xyXG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcclxufTsiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXHJcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXHJcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XHJcbiAgYW5PYmplY3QoTyk7XHJcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcclxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICwgaSA9IDBcclxuICAgICwgUDtcclxuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XHJcbiAgcmV0dXJuIE87XHJcbn07IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXHJcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxyXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcclxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcclxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxyXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xyXG5cclxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XHJcbiAgTyA9IHRvSU9iamVjdChPKTtcclxuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XHJcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcclxuICAgIHJldHVybiBnT1BEKE8sIFApO1xyXG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xyXG59OyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXHJcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxyXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcclxuXHJcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XHJcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xyXG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcclxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcclxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXHJcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcclxuICBPID0gdG9PYmplY3QoTyk7XHJcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XHJcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XHJcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XHJcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcclxufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcclxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxyXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcclxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XHJcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwgcmVzdWx0ID0gW11cclxuICAgICwga2V5O1xyXG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcclxuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXHJcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xyXG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcclxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxyXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XHJcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcclxufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTsiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXHJcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xyXG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XHJcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxyXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcclxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXHJcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxyXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xyXG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XHJcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XHJcbn07IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXHJcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxyXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pOyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XHJcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXHJcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0fSk7IiwiIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICB2YXIgRCA9IGdPUEQoaXQgPSB0b0lPYmplY3QoaXQpLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICBERVNDUklQVE9SUyAmJiBzZXR0ZXIgJiYgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn0iLCIvKlxuICogUVJpb3VzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQWxhc2RhaXIgTWVyY2VyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAgVG9tIFplcnVjaGFcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tbXVsdGktc3BhY2VzOiAwICovXG5cbi8qKlxuICogVE9ETzogRG9jdW1lbnRcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEFsaWdubWVudCB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFsaWdubWVudCBwYXR0ZXJuIGJsb2NrLlxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0gVGhlIGFsaWdubWVudCBwYXR0ZXJuIGJsb2NrLlxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXQgQkxPQ0soKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIDAsICAxMSwgMTUsIDE5LCAyMywgMjcsIDMxLFxuICAgICAgMTYsIDE4LCAyMCwgMjIsIDI0LCAyNiwgMjgsIDIwLCAyMiwgMjQsIDI0LCAyNiwgMjgsIDI4LCAyMiwgMjQsIDI0LFxuICAgICAgMjYsIDI2LCAyOCwgMjgsIDI0LCAyNCwgMjYsIDI2LCAyNiwgMjgsIDI4LCAyNCwgMjYsIDI2LCAyNiwgMjgsIDI4XG4gICAgXVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWxpZ25tZW50XG4iLCIvKlxuICogUVJpb3VzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQWxhc2RhaXIgTWVyY2VyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAgVG9tIFplcnVjaGFcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tbXVsdGktc3BhY2VzOiAwICovXG5cbi8qKlxuICogVE9ETzogRG9jdW1lbnRcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEVycm9yQ29ycmVjdGlvbiB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVycm9yIGNvcnJlY3Rpb24gYmxvY2tzLlxuICAgKlxuICAgKiBUaGVyZSBhcmUgZm91ciBlbGVtZW50cyBwZXIgdmVyc2lvbi4gVGhlIGZpcnN0IHR3byBpbmRpY2F0ZSB0aGUgbnVtYmVyIG9mIGJsb2NrcywgdGhlbiB0aGUgZGF0YSB3aWR0aCwgYW5kIGZpbmFsbHlcbiAgICogdGhlIEVDQyB3aWR0aC5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyW119IFRoZSBFQ0MgYmxvY2tzLlxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXQgQkxPQ0tTKCkge1xuICAgIHJldHVybiBbXG4gICAgICAxLCAgMCwgIDE5LCAgNywgICAgIDEsICAwLCAgMTYsICAxMCwgICAgMSwgIDAsICAxMywgIDEzLCAgICAxLCAgMCwgIDksICAgMTcsXG4gICAgICAxLCAgMCwgIDM0LCAgMTAsICAgIDEsICAwLCAgMjgsICAxNiwgICAgMSwgIDAsICAyMiwgIDIyLCAgICAxLCAgMCwgIDE2LCAgMjgsXG4gICAgICAxLCAgMCwgIDU1LCAgMTUsICAgIDEsICAwLCAgNDQsICAyNiwgICAgMiwgIDAsICAxNywgIDE4LCAgICAyLCAgMCwgIDEzLCAgMjIsXG4gICAgICAxLCAgMCwgIDgwLCAgMjAsICAgIDIsICAwLCAgMzIsICAxOCwgICAgMiwgIDAsICAyNCwgIDI2LCAgICA0LCAgMCwgIDksICAgMTYsXG4gICAgICAxLCAgMCwgIDEwOCwgMjYsICAgIDIsICAwLCAgNDMsICAyNCwgICAgMiwgIDIsICAxNSwgIDE4LCAgICAyLCAgMiwgIDExLCAgMjIsXG4gICAgICAyLCAgMCwgIDY4LCAgMTgsICAgIDQsICAwLCAgMjcsICAxNiwgICAgNCwgIDAsICAxOSwgIDI0LCAgICA0LCAgMCwgIDE1LCAgMjgsXG4gICAgICAyLCAgMCwgIDc4LCAgMjAsICAgIDQsICAwLCAgMzEsICAxOCwgICAgMiwgIDQsICAxNCwgIDE4LCAgICA0LCAgMSwgIDEzLCAgMjYsXG4gICAgICAyLCAgMCwgIDk3LCAgMjQsICAgIDIsICAyLCAgMzgsICAyMiwgICAgNCwgIDIsICAxOCwgIDIyLCAgICA0LCAgMiwgIDE0LCAgMjYsXG4gICAgICAyLCAgMCwgIDExNiwgMzAsICAgIDMsICAyLCAgMzYsICAyMiwgICAgNCwgIDQsICAxNiwgIDIwLCAgICA0LCAgNCwgIDEyLCAgMjQsXG4gICAgICAyLCAgMiwgIDY4LCAgMTgsICAgIDQsICAxLCAgNDMsICAyNiwgICAgNiwgIDIsICAxOSwgIDI0LCAgICA2LCAgMiwgIDE1LCAgMjgsXG4gICAgICA0LCAgMCwgIDgxLCAgMjAsICAgIDEsICA0LCAgNTAsICAzMCwgICAgNCwgIDQsICAyMiwgIDI4LCAgICAzLCAgOCwgIDEyLCAgMjQsXG4gICAgICAyLCAgMiwgIDkyLCAgMjQsICAgIDYsICAyLCAgMzYsICAyMiwgICAgNCwgIDYsICAyMCwgIDI2LCAgICA3LCAgNCwgIDE0LCAgMjgsXG4gICAgICA0LCAgMCwgIDEwNywgMjYsICAgIDgsICAxLCAgMzcsICAyMiwgICAgOCwgIDQsICAyMCwgIDI0LCAgICAxMiwgNCwgIDExLCAgMjIsXG4gICAgICAzLCAgMSwgIDExNSwgMzAsICAgIDQsICA1LCAgNDAsICAyNCwgICAgMTEsIDUsICAxNiwgIDIwLCAgICAxMSwgNSwgIDEyLCAgMjQsXG4gICAgICA1LCAgMSwgIDg3LCAgMjIsICAgIDUsICA1LCAgNDEsICAyNCwgICAgNSwgIDcsICAyNCwgIDMwLCAgICAxMSwgNywgIDEyLCAgMjQsXG4gICAgICA1LCAgMSwgIDk4LCAgMjQsICAgIDcsICAzLCAgNDUsICAyOCwgICAgMTUsIDIsICAxOSwgIDI0LCAgICAzLCAgMTMsIDE1LCAgMzAsXG4gICAgICAxLCAgNSwgIDEwNywgMjgsICAgIDEwLCAxLCAgNDYsICAyOCwgICAgMSwgIDE1LCAyMiwgIDI4LCAgICAyLCAgMTcsIDE0LCAgMjgsXG4gICAgICA1LCAgMSwgIDEyMCwgMzAsICAgIDksICA0LCAgNDMsICAyNiwgICAgMTcsIDEsICAyMiwgIDI4LCAgICAyLCAgMTksIDE0LCAgMjgsXG4gICAgICAzLCAgNCwgIDExMywgMjgsICAgIDMsICAxMSwgNDQsICAyNiwgICAgMTcsIDQsICAyMSwgIDI2LCAgICA5LCAgMTYsIDEzLCAgMjYsXG4gICAgICAzLCAgNSwgIDEwNywgMjgsICAgIDMsICAxMywgNDEsICAyNiwgICAgMTUsIDUsICAyNCwgIDMwLCAgICAxNSwgMTAsIDE1LCAgMjgsXG4gICAgICA0LCAgNCwgIDExNiwgMjgsICAgIDE3LCAwLCAgNDIsICAyNiwgICAgMTcsIDYsICAyMiwgIDI4LCAgICAxOSwgNiwgIDE2LCAgMzAsXG4gICAgICAyLCAgNywgIDExMSwgMjgsICAgIDE3LCAwLCAgNDYsICAyOCwgICAgNywgIDE2LCAyNCwgIDMwLCAgICAzNCwgMCwgIDEzLCAgMjQsXG4gICAgICA0LCAgNSwgIDEyMSwgMzAsICAgIDQsICAxNCwgNDcsICAyOCwgICAgMTEsIDE0LCAyNCwgIDMwLCAgICAxNiwgMTQsIDE1LCAgMzAsXG4gICAgICA2LCAgNCwgIDExNywgMzAsICAgIDYsICAxNCwgNDUsICAyOCwgICAgMTEsIDE2LCAyNCwgIDMwLCAgICAzMCwgMiwgIDE2LCAgMzAsXG4gICAgICA4LCAgNCwgIDEwNiwgMjYsICAgIDgsICAxMywgNDcsICAyOCwgICAgNywgIDIyLCAyNCwgIDMwLCAgICAyMiwgMTMsIDE1LCAgMzAsXG4gICAgICAxMCwgMiwgIDExNCwgMjgsICAgIDE5LCA0LCAgNDYsICAyOCwgICAgMjgsIDYsICAyMiwgIDI4LCAgICAzMywgNCwgIDE2LCAgMzAsXG4gICAgICA4LCAgNCwgIDEyMiwgMzAsICAgIDIyLCAzLCAgNDUsICAyOCwgICAgOCwgIDI2LCAyMywgIDMwLCAgICAxMiwgMjgsIDE1LCAgMzAsXG4gICAgICAzLCAgMTAsIDExNywgMzAsICAgIDMsICAyMywgNDUsICAyOCwgICAgNCwgIDMxLCAyNCwgIDMwLCAgICAxMSwgMzEsIDE1LCAgMzAsXG4gICAgICA3LCAgNywgIDExNiwgMzAsICAgIDIxLCA3LCAgNDUsICAyOCwgICAgMSwgIDM3LCAyMywgIDMwLCAgICAxOSwgMjYsIDE1LCAgMzAsXG4gICAgICA1LCAgMTAsIDExNSwgMzAsICAgIDE5LCAxMCwgNDcsICAyOCwgICAgMTUsIDI1LCAyNCwgIDMwLCAgICAyMywgMjUsIDE1LCAgMzAsXG4gICAgICAxMywgMywgIDExNSwgMzAsICAgIDIsICAyOSwgNDYsICAyOCwgICAgNDIsIDEsICAyNCwgIDMwLCAgICAyMywgMjgsIDE1LCAgMzAsXG4gICAgICAxNywgMCwgIDExNSwgMzAsICAgIDEwLCAyMywgNDYsICAyOCwgICAgMTAsIDM1LCAyNCwgIDMwLCAgICAxOSwgMzUsIDE1LCAgMzAsXG4gICAgICAxNywgMSwgIDExNSwgMzAsICAgIDE0LCAyMSwgNDYsICAyOCwgICAgMjksIDE5LCAyNCwgIDMwLCAgICAxMSwgNDYsIDE1LCAgMzAsXG4gICAgICAxMywgNiwgIDExNSwgMzAsICAgIDE0LCAyMywgNDYsICAyOCwgICAgNDQsIDcsICAyNCwgIDMwLCAgICA1OSwgMSwgIDE2LCAgMzAsXG4gICAgICAxMiwgNywgIDEyMSwgMzAsICAgIDEyLCAyNiwgNDcsICAyOCwgICAgMzksIDE0LCAyNCwgIDMwLCAgICAyMiwgNDEsIDE1LCAgMzAsXG4gICAgICA2LCAgMTQsIDEyMSwgMzAsICAgIDYsICAzNCwgNDcsICAyOCwgICAgNDYsIDEwLCAyNCwgIDMwLCAgICAyLCAgNjQsIDE1LCAgMzAsXG4gICAgICAxNywgNCwgIDEyMiwgMzAsICAgIDI5LCAxNCwgNDYsICAyOCwgICAgNDksIDEwLCAyNCwgIDMwLCAgICAyNCwgNDYsIDE1LCAgMzAsXG4gICAgICA0LCAgMTgsIDEyMiwgMzAsICAgIDEzLCAzMiwgNDYsICAyOCwgICAgNDgsIDE0LCAyNCwgIDMwLCAgICA0MiwgMzIsIDE1LCAgMzAsXG4gICAgICAyMCwgNCwgIDExNywgMzAsICAgIDQwLCA3LCAgNDcsICAyOCwgICAgNDMsIDIyLCAyNCwgIDMwLCAgICAxMCwgNjcsIDE1LCAgMzAsXG4gICAgICAxOSwgNiwgIDExOCwgMzAsICAgIDE4LCAzMSwgNDcsICAyOCwgICAgMzQsIDM0LCAyNCwgIDMwLCAgICAyMCwgNjEsIDE1LCAgMzBcbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmluYWwgZm9ybWF0IGJpdHMgd2l0aCBtYXNrIChsZXZlbCA8PCAzIHwgbWFzaykuXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcltdfSBUaGUgZmluYWwgZm9ybWF0IGJpdHMuXG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGdldCBGSU5BTF9GT1JNQVQoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIExcbiAgICAgIDB4NzdjNCwgMHg3MmYzLCAweDdkYWEsIDB4Nzg5ZCwgMHg2NjJmLCAweDYzMTgsIDB4NmM0MSwgMHg2OTc2LFxuICAgICAgLy8gTVxuICAgICAgMHg1NDEyLCAweDUxMjUsIDB4NWU3YywgMHg1YjRiLCAweDQ1ZjksIDB4NDBjZSwgMHg0Zjk3LCAweDRhYTAsXG4gICAgICAvLyBRXG4gICAgICAweDM1NWYsIDB4MzA2OCwgMHgzZjMxLCAweDNhMDYsIDB4MjRiNCwgMHgyMTgzLCAweDJlZGEsIDB4MmJlZCxcbiAgICAgIC8vIEhcbiAgICAgIDB4MTY4OSwgMHgxM2JlLCAweDFjZTcsIDB4MTlkMCwgMHgwNzYyLCAweDAyNTUsIDB4MGQwYywgMHgwODNiXG4gICAgXVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBtYXAgb2YgaHVtYW4tcmVhZGFibGUgRUNDIGxldmVscy5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0PFN0cmluZywgTnVtYmVyPn0gQSBFQ0MgbGV2ZWwgbWFwcGluZy5cbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0IExFVkVMUygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgTDogMSxcbiAgICAgIE06IDIsXG4gICAgICBROiAzLFxuICAgICAgSDogNFxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yQ29ycmVjdGlvblxuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuY29uc3QgQWxpZ25tZW50ID0gcmVxdWlyZSgnLi9BbGlnbm1lbnQnKVxuY29uc3QgRXJyb3JDb3JyZWN0aW9uID0gcmVxdWlyZSgnLi9FcnJvckNvcnJlY3Rpb24nKVxuY29uc3QgR2Fsb2lzID0gcmVxdWlyZSgnLi9HYWxvaXMnKVxuY29uc3QgVmVyc2lvbiA9IHJlcXVpcmUoJy4vVmVyc2lvbicpXG5cbi8qKlxuICogVE9ETzogRG9jdW1lbnRcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEZyYW1lIHtcblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAtXG4gICAqIEByZXR1cm4ge051bWJlcltdfVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgX2NyZWF0ZUFycmF5KGxlbmd0aCkge1xuICAgIGNvbnN0IGFycmF5ID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycmF5W2ldID0gMFxuICAgIH1cblxuICAgIHJldHVybiBhcnJheVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IC1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgLVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBfZ2V0TWFza0JpdCh4LCB5KSB7XG4gICAgbGV0IGJpdFxuXG4gICAgaWYgKHggPiB5KSB7XG4gICAgICBiaXQgPSB4XG4gICAgICB4ID0geVxuICAgICAgeSA9IGJpdFxuICAgIH1cblxuICAgIGJpdCA9IHlcbiAgICBiaXQgKz0geSAqIHlcbiAgICBiaXQgPj49IDFcbiAgICBiaXQgKz0geFxuXG4gICAgcmV0dXJuIGJpdFxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIFJldHVybnMgdGhlIGV4cG9uZW50aWF0aW9uIG1vZCBOLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0geCAtXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIF9tb2ROKHgpIHtcbiAgICB3aGlsZSAoeCA+PSAyNTUpIHtcbiAgICAgIHggLT0gMjU1XG4gICAgICB4ID0gKHggPj4gOCkgKyAoeCAmIDI1NSlcbiAgICB9XG5cbiAgICByZXR1cm4geFxuICB9XG5cbiAgLy8gKkJhZG5lc3MqIGNvZWZmaWNpZW50cy5cbiAgc3RhdGljIGdldCBOMSgpIHtcbiAgICByZXR1cm4gM1xuICB9XG4gIHN0YXRpYyBnZXQgTjIoKSB7XG4gICAgcmV0dXJuIDNcbiAgfVxuICBzdGF0aWMgZ2V0IE4zKCkge1xuICAgIHJldHVybiA0MFxuICB9XG4gIHN0YXRpYyBnZXQgTjQoKSB7XG4gICAgcmV0dXJuIDEwXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtGcmFtZX5PcHRpb25zfSBvcHRpb25zIC1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIC8qKlxuICAgICAqIFRoZSBydW4gbGVuZ3RocyBmb3IgYmFkbmVzcy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge051bWJlcltdfVxuICAgICAqL1xuICAgIHRoaXMuX2JhZG5lc3MgPSBbXVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHRoZSBFQ0MgbGV2ZWwgdG8gYmUgYXBwbGllZC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9sZXZlbCA9IEVycm9yQ29ycmVjdGlvbi5MRVZFTFNbb3B0aW9ucy5sZXZlbF1cblxuICAgIC8qKlxuICAgICAqIFRoZSBnZW5lcmF0b3IgcG9seW5vbWlhbC5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge051bWJlcltdfVxuICAgICAqL1xuICAgIHRoaXMuX3BvbHlub21pYWwgPSBbXVxuXG4gICAgLyoqXG4gICAgICogVE9ETzogRG9jdW1lbnRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92YWx1ZSA9IG9wdGlvbnMudmFsdWVcblxuICAgIC8qKlxuICAgICAqIFRPRE86IERvY3VtZW50XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fdmFsdWVMZW5ndGggPSB0aGlzLl92YWx1ZS5sZW5ndGhcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIGZvciB0aGUgZGF0YS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gMFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgaW5wdXQgYnVmZmVyLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHRoaXMuX3ZhbHVlLnNsaWNlKDApXG5cbiAgICBsZXQgZGF0YUJsb2NrXG4gICAgbGV0IGVjY0Jsb2NrXG4gICAgbGV0IG5lY2NCbG9jazFcbiAgICBsZXQgbmVjY0Jsb2NrMlxuXG4gICAgd2hpbGUgKHRoaXMuX3ZlcnNpb24gPCA0MCkge1xuICAgICAgdGhpcy5fdmVyc2lvbisrXG5cbiAgICAgIGxldCBpbmRleCA9ICh0aGlzLl9sZXZlbCAtIDEpICogNCArICh0aGlzLl92ZXJzaW9uIC0gMSkgKiAxNlxuXG4gICAgICBuZWNjQmxvY2sxID0gRXJyb3JDb3JyZWN0aW9uLkJMT0NLU1tpbmRleCsrXVxuICAgICAgbmVjY0Jsb2NrMiA9IEVycm9yQ29ycmVjdGlvbi5CTE9DS1NbaW5kZXgrK11cbiAgICAgIGRhdGFCbG9jayA9IEVycm9yQ29ycmVjdGlvbi5CTE9DS1NbaW5kZXgrK11cbiAgICAgIGVjY0Jsb2NrID0gRXJyb3JDb3JyZWN0aW9uLkJMT0NLU1tpbmRleF1cblxuICAgICAgaW5kZXggPSBkYXRhQmxvY2sgKiAobmVjY0Jsb2NrMSArIG5lY2NCbG9jazIpICsgbmVjY0Jsb2NrMiAtIDMgKyAodGhpcy5fdmVyc2lvbiA8PSA5KVxuXG4gICAgICBpZiAodGhpcy5fdmFsdWVMZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSBibG9jay5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9kYXRhQmxvY2sgPSBkYXRhQmxvY2tcblxuICAgIHRoaXMuX2VjY0Jsb2NrID0gZWNjQmxvY2tcbiAgICB0aGlzLl9uZWNjQmxvY2sxID0gbmVjY0Jsb2NrMVxuICAgIHRoaXMuX25lY2NCbG9jazIgPSBuZWNjQmxvY2syXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSB3aWR0aCBpcyBiYXNlZCBvbiB2ZXJzaW9uLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgLy8gRklYTUU6IEVuc3VyZSB0aGF0IGl0IGZpdHMgaW5zdGVhZCBvZiBiZWluZyB0cnVuY2F0ZWQuXG4gICAgdGhpcy53aWR0aCA9IDE3ICsgNCAqIHRoaXMuX3ZlcnNpb25cblxuICAgIC8qKlxuICAgICAqIFRoZSBpbWFnZSBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQHR5cGUge051bWJlcltdfVxuICAgICAqL1xuICAgIHRoaXMuYnVmZmVyID0gRnJhbWUuX2NyZWF0ZUFycmF5KHRoaXMud2lkdGggKiB0aGlzLndpZHRoKVxuXG4gICAgLyoqXG4gICAgICogVGhlIGVycm9yIGNvcnJlY3Rpb24gYnVmZmVyLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7TnVtYmVyW119XG4gICAgICovXG4gICAgdGhpcy5fZWNjID0gRnJhbWUuX2NyZWF0ZUFycmF5KHRoaXMuX2RhdGFCbG9jayArICh0aGlzLl9kYXRhQmxvY2sgKyB0aGlzLl9lY2NCbG9jaykgKiAodGhpcy5fbmVjY0Jsb2NrMSArIHRoaXMuX25lY2NCbG9jazIpICsgdGhpcy5fbmVjY0Jsb2NrMilcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaXhlZCBwYXJ0IG9mIHRoZSBpbWFnZS5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge051bWJlcltdfVxuICAgICAqL1xuICAgIHRoaXMuX21hc2sgPSBGcmFtZS5fY3JlYXRlQXJyYXkoKHRoaXMud2lkdGggKiAodGhpcy53aWR0aCArIDEpICsgMSkgLyAyKVxuXG4gICAgdGhpcy5faW5zZXJ0RmluZGVycygpXG4gICAgdGhpcy5faW5zZXJ0QWxpZ25tZW50cygpXG5cbiAgICAvLyBJbnNlcnQgc2luZ2xlIGZvcmVncm91bmQgY2VsbC5cbiAgICB0aGlzLmJ1ZmZlcls4ICsgdGhpcy53aWR0aCAqICh0aGlzLndpZHRoIC0gOCldID0gMVxuXG4gICAgdGhpcy5faW5zZXJ0VGltaW5nR2FwKClcbiAgICB0aGlzLl9yZXZlcnNlTWFzaygpXG4gICAgdGhpcy5faW5zZXJ0VGltaW5nUm93QW5kQ29sdW1uKClcbiAgICB0aGlzLl9pbnNlcnRWZXJzaW9uKClcbiAgICB0aGlzLl9zeW5jTWFzaygpXG4gICAgdGhpcy5fY29udmVydEJpdFN0cmVhbSh0aGlzLl9zdHJpbmdCdWZmZXIubGVuZ3RoKVxuICAgIHRoaXMuX2NhbGN1bGF0ZVBvbHlub21pYWwoKVxuICAgIHRoaXMuX2FwcGVuZEVjY1RvRGF0YSgpXG4gICAgdGhpcy5faW50ZXJsZWF2ZUJsb2NrcygpXG4gICAgdGhpcy5fcGFjaygpXG4gICAgdGhpcy5fZmluaXNoKClcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBFbnRlcnMgYWxpZ25tZW50IHBhdHRlcm4uIEZvcmVncm91bmQgY29sb3IgdG8gZnJhbWUsIGJhY2tncm91bmQgdG8gbWFzay4gRnJhbWUgd2lsbCBiZSBtZXJnZWQgd2l0aCBtYXNrIGxhdGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0geCAtXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IC1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hZGRBbGlnbm1lbnQoeCwgeSkge1xuICAgIHRoaXMuYnVmZmVyW3ggKyB0aGlzLndpZHRoICogeV0gPSAxXG5cbiAgICBmb3IgKGxldCBpID0gLTI7IGkgPCAyOyBpKyspIHtcbiAgICAgIHRoaXMuYnVmZmVyW3ggKyBpICsgdGhpcy53aWR0aCAqICh5IC0gMildID0gMVxuICAgICAgdGhpcy5idWZmZXJbeCAtIDIgKyB0aGlzLndpZHRoICogKHkgKyBpICsgMSldID0gMVxuICAgICAgdGhpcy5idWZmZXJbeCArIDIgKyB0aGlzLndpZHRoICogKHkgKyBpKV0gPSAxXG4gICAgICB0aGlzLmJ1ZmZlclt4ICsgaSArIDEgKyB0aGlzLndpZHRoICogKHkgKyAyKV0gPSAxXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgIHRoaXMuX3NldE1hc2soeCAtIDEsIHkgKyBpKVxuICAgICAgdGhpcy5fc2V0TWFzayh4ICsgMSwgeSAtIGkpXG4gICAgICB0aGlzLl9zZXRNYXNrKHggLSBpLCB5IC0gMSlcbiAgICAgIHRoaXMuX3NldE1hc2soeCArIGksIHkgKyAxKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBDYWxjdWxhdGVzIGFuZCBhcHBlbmRzIDxjb2RlPmVjYzwvY29kZT4gZGF0YSB0byB0aGUgPGNvZGU+ZGF0YTwvY29kZT4gYmxvY2suIElmIGJsb2NrIGlzIGluIHRoZSBzdHJpbmcgYnVmZmVyIHRoZVxuICAgKiBpbmRpY2VzIHRvIGJ1ZmZlcnMgYXJlIHVzZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhIC1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGFMZW5ndGggLVxuICAgKiBAcGFyYW0ge051bWJlcn0gZWNjIC1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGVjY0xlbmd0aCAtXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwZW5kRGF0YShkYXRhLCBkYXRhTGVuZ3RoLCBlY2MsIGVjY0xlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWNjTGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlcltlY2MgKyBpXSA9IDBcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYml0ID0gR2Fsb2lzLkxPR1t0aGlzLl9zdHJpbmdCdWZmZXJbZGF0YSArIGldIF4gdGhpcy5fc3RyaW5nQnVmZmVyW2VjY11dXG5cbiAgICAgIGlmIChiaXQgIT09IDI1NSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IGVjY0xlbmd0aDsgaisrKSB7XG4gICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyW2VjYyArIGogLSAxXSA9IHRoaXMuX3N0cmluZ0J1ZmZlcltlY2MgKyBqXSBeIEdhbG9pcy5FWFBPTkVOVFtGcmFtZS5fbW9kTihiaXQgKyB0aGlzLl9wb2x5bm9taWFsW2VjY0xlbmd0aCAtIGpdKV1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IGVjYzsgaiA8IGVjYyArIGVjY0xlbmd0aDsgaisrKSB7XG4gICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyW2pdID0gdGhpcy5fc3RyaW5nQnVmZmVyW2ogKyAxXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlcltlY2MgKyBlY2NMZW5ndGggLSAxXSA9IGJpdCA9PT0gMjU1ID8gMCA6IEdhbG9pcy5FWFBPTkVOVFtGcmFtZS5fbW9kTihiaXQgKyB0aGlzLl9wb2x5bm9taWFsWzBdKV1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyB0aGUgRUNDIGJ1ZmZlciB0byB0aGUgZGF0YSBidWZmZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwZW5kRWNjVG9EYXRhKCkge1xuICAgIGxldCBkYXRhID0gMFxuICAgIGxldCBlY2MgPSB0aGlzLl9jYWxjdWxhdGVNYXhMZW5ndGgoKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9uZWNjQmxvY2sxOyBpKyspIHtcbiAgICAgIHRoaXMuX2FwcGVuZERhdGEoZGF0YSwgdGhpcy5fZGF0YUJsb2NrLCBlY2MsIHRoaXMuX2VjY0Jsb2NrKVxuXG4gICAgICBkYXRhICs9IHRoaXMuX2RhdGFCbG9ja1xuICAgICAgZWNjICs9IHRoaXMuX2VjY0Jsb2NrXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9uZWNjQmxvY2syOyBpKyspIHtcbiAgICAgIHRoaXMuX2FwcGVuZERhdGEoZGF0YSwgdGhpcy5fZGF0YUJsb2NrICsgMSwgZWNjLCB0aGlzLl9lY2NCbG9jaylcblxuICAgICAgZGF0YSArPSB0aGlzLl9kYXRhQmxvY2sgKyAxXG4gICAgICBlY2MgKz0gdGhpcy5fZWNjQmxvY2tcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQXBwbGllcyB0aGUgc2VsZWN0ZWQgbWFzayBvdXQgb2YgdGhlIDggb3B0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1hc2sgLVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FwcGx5TWFzayhtYXNrKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoXG5cbiAgICBzd2l0Y2ggKG1hc2spIHtcbiAgICBjYXNlIDA6XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHdpZHRoOyB5KyspIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgaWYgKCEoeCArIHkgJiAxKSAmJiAhdGhpcy5faXNNYXNrZWQoeCwgeSkpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyW3ggKyB5ICogd2lkdGhdIF49IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICBjYXNlIDE6XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHdpZHRoOyB5KyspIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgaWYgKCEoeSAmIDEpICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbeCArIHkgKiB3aWR0aF0gXj0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIGNhc2UgMjpcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2lkdGg7IHkrKykge1xuICAgICAgICBmb3IgKGxldCByM3ggPSAwLCB4ID0gMDsgeCA8IHdpZHRoOyB4KyssIHIzeCsrKSB7XG4gICAgICAgICAgaWYgKHIzeCA9PT0gMykge1xuICAgICAgICAgICAgcjN4ID0gMFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghcjN4ICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbeCArIHkgKiB3aWR0aF0gXj0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIGNhc2UgMzpcbiAgICAgIGZvciAobGV0IHIzeSA9IDAsIHkgPSAwOyB5IDwgd2lkdGg7IHkrKywgcjN5KyspIHtcbiAgICAgICAgaWYgKHIzeSA9PT0gMykge1xuICAgICAgICAgIHIzeSA9IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHIzeCA9IHIzeSwgeCA9IDA7IHggPCB3aWR0aDsgeCsrLCByM3grKykge1xuICAgICAgICAgIGlmIChyM3ggPT09IDMpIHtcbiAgICAgICAgICAgIHIzeCA9IDBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXIzeCAmJiAhdGhpcy5faXNNYXNrZWQoeCwgeSkpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyW3ggKyB5ICogd2lkdGhdIF49IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICBjYXNlIDQ6XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHdpZHRoOyB5KyspIHtcbiAgICAgICAgZm9yIChsZXQgcjN4ID0gMCwgcjN5ID0geSA+PiAxICYgMSwgeCA9IDA7IHggPCB3aWR0aDsgeCsrLCByM3grKykge1xuICAgICAgICAgIGlmIChyM3ggPT09IDMpIHtcbiAgICAgICAgICAgIHIzeCA9IDBcbiAgICAgICAgICAgIHIzeSA9ICFyM3lcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXIzeSAmJiAhdGhpcy5faXNNYXNrZWQoeCwgeSkpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyW3ggKyB5ICogd2lkdGhdIF49IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICBjYXNlIDU6XG4gICAgICBmb3IgKGxldCByM3kgPSAwLCB5ID0gMDsgeSA8IHdpZHRoOyB5KyssIHIzeSsrKSB7XG4gICAgICAgIGlmIChyM3kgPT09IDMpIHtcbiAgICAgICAgICByM3kgPSAwXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCByM3ggPSAwLCB4ID0gMDsgeCA8IHdpZHRoOyB4KyssIHIzeCsrKSB7XG4gICAgICAgICAgaWYgKHIzeCA9PT0gMykge1xuICAgICAgICAgICAgcjN4ID0gMFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghKCh4ICYgeSAmIDEpICsgISghcjN4IHwgIXIzeSkpICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbeCArIHkgKiB3aWR0aF0gXj0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIGNhc2UgNjpcbiAgICAgIGZvciAobGV0IHIzeSA9IDAsIHkgPSAwOyB5IDwgd2lkdGg7IHkrKywgcjN5KyspIHtcbiAgICAgICAgaWYgKHIzeSA9PT0gMykge1xuICAgICAgICAgIHIzeSA9IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHIzeCA9IDAsIHggPSAwOyB4IDwgd2lkdGg7IHgrKywgcjN4KyspIHtcbiAgICAgICAgICBpZiAocjN4ID09PSAzKSB7XG4gICAgICAgICAgICByM3ggPSAwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEoeCAmIHkgJiAxICsgKHIzeCAmJiByM3ggPT09IHIzeSkgJiAxKSAmJiAhdGhpcy5faXNNYXNrZWQoeCwgeSkpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyW3ggKyB5ICogd2lkdGhdIF49IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICBjYXNlIDc6XG4gICAgICBmb3IgKGxldCByM3kgPSAwLCB5ID0gMDsgeSA8IHdpZHRoOyB5KyssIHIzeSsrKSB7XG4gICAgICAgIGlmIChyM3kgPT09IDMpIHtcbiAgICAgICAgICByM3kgPSAwXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCByM3ggPSAwLCB4ID0gMDsgeCA8IHdpZHRoOyB4KyssIHIzeCsrKSB7XG4gICAgICAgICAgaWYgKHIzeCA9PT0gMykge1xuICAgICAgICAgICAgcjN4ID0gMFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghKChyM3ggJiYgcjN4ID09PSByM3kpICsgKHggKyB5ICYgMSkgJiAxKSAmJiAhdGhpcy5faXNNYXNrZWQoeCwgeSkpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyW3ggKyB5ICogd2lkdGhdIF49IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgbWF4aW11bSBzdHJpbmcgbGVuZ3RoLlxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBtYXhpbXVtIHN0cmluZyBsZW5ndGguXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2FsY3VsYXRlTWF4TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhQmxvY2sgKiAodGhpcy5fbmVjY0Jsb2NrMSArIHRoaXMuX25lY2NCbG9jazIpICsgdGhpcy5fbmVjY0Jsb2NrMlxuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGdlbmVyYXRvciBwb2x5bm9taWFsLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NhbGN1bGF0ZVBvbHlub21pYWwoKSB7XG4gICAgdGhpcy5fcG9seW5vbWlhbFswXSA9IDFcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZWNjQmxvY2s7IGkrKykge1xuICAgICAgdGhpcy5fcG9seW5vbWlhbFtpICsgMV0gPSAxXG5cbiAgICAgIGZvciAobGV0IGogPSBpOyBqID4gMDsgai0tKSB7XG4gICAgICAgIHRoaXMuX3BvbHlub21pYWxbal0gPSB0aGlzLl9wb2x5bm9taWFsW2pdID8gdGhpcy5fcG9seW5vbWlhbFtqIC0gMV0gXiBHYWxvaXMuRVhQT05FTlRbRnJhbWUuX21vZE4oR2Fsb2lzLkxPR1t0aGlzLl9wb2x5bm9taWFsW2pdXSArIGkpXSA6IHRoaXMuX3BvbHlub21pYWxbaiAtIDFdXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BvbHlub21pYWxbMF0gPSBHYWxvaXMuRVhQT05FTlRbRnJhbWUuX21vZE4oR2Fsb2lzLkxPR1t0aGlzLl9wb2x5bm9taWFsWzBdXSArIGkpXVxuICAgIH1cblxuICAgIC8vIFVzZSBsb2dzIGZvciBnZW5lcmF0b3IgcG9seW5vbWlhbCB0byBzYXZlIGNhbGN1bGF0aW9uIHN0ZXAuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5fZWNjQmxvY2s7IGkrKykge1xuICAgICAgdGhpcy5fcG9seW5vbWlhbFtpXSA9IEdhbG9pcy5MT0dbdGhpcy5fcG9seW5vbWlhbFtpXV1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQ2FsY3VsYXRlcyBob3cgYmFkIHRoZSBtYXNrZWQgaW1hZ2UgaXMgKGUuZy4gYmxvY2tzLCBpbWJhbGFuY2UsIHJ1bnMsIG9yIGZpbmRlcnMpLlxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2hlY2tCYWRuZXNzKCkge1xuICAgIGxldCBiYWQgPSAwXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoXG5cbiAgICAvLyBCbG9ja3Mgb2Ygc2FtZSBjb2xvdXIuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB3aWR0aCAtIDE7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aCAtIDE7IHgrKykge1xuICAgICAgICAvLyBBbGwgZm9yZWdyb3VuZCBjb2xvdXIuXG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlclt4ICsgd2lkdGggKiB5XSAmJlxuICAgICAgICAgIHRoaXMuYnVmZmVyW3ggKyAxICsgd2lkdGggKiB5XSAmJlxuICAgICAgICAgIHRoaXMuYnVmZmVyW3ggKyB3aWR0aCAqICh5ICsgMSldICYmXG4gICAgICAgICAgdGhpcy5idWZmZXJbeCArIDEgKyB3aWR0aCAqICh5ICsgMSldIHx8XG4gICAgICAgICAgLy8gQWxsIGJhY2tncm91bmQgY29sb3VyLlxuICAgICAgICAgICEodGhpcy5idWZmZXJbeCArIHdpZHRoICogeV0gfHxcbiAgICAgICAgICB0aGlzLmJ1ZmZlclt4ICsgMSArIHdpZHRoICogeV0gfHxcbiAgICAgICAgICB0aGlzLmJ1ZmZlclt4ICsgd2lkdGggKiAoeSArIDEpXSB8fFxuICAgICAgICAgIHRoaXMuYnVmZmVyW3ggKyAxICsgd2lkdGggKiAoeSArIDEpXSkpIHtcbiAgICAgICAgICBiYWQgKz0gRnJhbWUuTjJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBidyA9IDBcblxuICAgIC8vIFggcnVucy5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHdpZHRoOyB5KyspIHtcbiAgICAgIGxldCBoID0gMFxuXG4gICAgICB0aGlzLl9iYWRuZXNzWzBdID0gMFxuXG4gICAgICBmb3IgKGxldCBiID0gMCwgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgIGxldCBiMSA9IHRoaXMuYnVmZmVyW3ggKyB3aWR0aCAqIHldXG5cbiAgICAgICAgaWYgKGIgPT09IGIxKSB7XG4gICAgICAgICAgdGhpcy5fYmFkbmVzc1toXSsrXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fYmFkbmVzc1srK2hdID0gMVxuICAgICAgICB9XG5cbiAgICAgICAgYiA9IGIxXG4gICAgICAgIGJ3ICs9IGIgPyAxIDogLTFcbiAgICAgIH1cblxuICAgICAgYmFkICs9IHRoaXMuX2dldEJhZG5lc3MoaClcbiAgICB9XG5cbiAgICBpZiAoYncgPCAwKSB7XG4gICAgICBidyA9IC1id1xuICAgIH1cblxuICAgIGxldCBjb3VudCA9IDBcbiAgICBsZXQgYmlnID0gYndcbiAgICBiaWcgKz0gYmlnIDw8IDJcbiAgICBiaWcgPDw9IDFcblxuICAgIHdoaWxlIChiaWcgPiB3aWR0aCAqIHdpZHRoKSB7XG4gICAgICBiaWcgLT0gd2lkdGggKiB3aWR0aFxuICAgICAgY291bnQrK1xuICAgIH1cblxuICAgIGJhZCArPSBjb3VudCAqIEZyYW1lLk40XG5cbiAgICAvLyBZIHJ1bnMuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICBsZXQgaCA9IDBcblxuICAgICAgdGhpcy5fYmFkbmVzc1swXSA9IDBcblxuICAgICAgZm9yIChsZXQgYiA9IDAsIHkgPSAwOyB5IDwgd2lkdGg7IHkrKykge1xuICAgICAgICBsZXQgYjEgPSB0aGlzLmJ1ZmZlclt4ICsgd2lkdGggKiB5XVxuXG4gICAgICAgIGlmIChiID09PSBiMSkge1xuICAgICAgICAgIHRoaXMuX2JhZG5lc3NbaF0rK1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2JhZG5lc3NbKytoXSA9IDFcbiAgICAgICAgfVxuXG4gICAgICAgIGIgPSBiMVxuICAgICAgfVxuXG4gICAgICBiYWQgKz0gdGhpcy5fZ2V0QmFkbmVzcyhoKVxuICAgIH1cblxuICAgIHJldHVybiBiYWRcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBDb252ZXJ0cyB0aGUgc3RyaW5nIGJ1ZmZlciBpbnRvIGEgYml0IHN0cmVhbS4gOC1iaXQgZGF0YSB0byBRUi1jb2RlZCA4LWJpdCBkYXRhIChudW1lcmljLCBhbHBoYW51bSwgb3Iga2Fuamkgbm90XG4gICAqIHN1cHBvcnRlZCkuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggLVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbnZlcnRCaXRTdHJlYW0obGVuZ3RoKSB7XG4gICAgLy8gQ29udmVydCBzdHJpbmcgdG8gYml0IHN0cmVhbS4gOC1iaXQgZGF0YSB0byBRUi1jb2RlZCA4LWJpdCBkYXRhIChudW1lcmljLCBhbHBoYW51bSwgb3Iga2FuamlcbiAgICAvLyBub3Qgc3VwcG9ydGVkKS5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuX2VjY1tpXSA9IHRoaXMuX3N0cmluZ0J1ZmZlci5jaGFyQ29kZUF0KGkpXG4gICAgfVxuXG4gICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gdGhpcy5fZWNjLnNsaWNlKDApXG5cbiAgICBjb25zdCBtYXhMZW5ndGggPSB0aGlzLl9jYWxjdWxhdGVNYXhMZW5ndGgoKVxuXG4gICAgaWYgKGxlbmd0aCA+PSBtYXhMZW5ndGggLSAyKSB7XG4gICAgICBsZW5ndGggPSBtYXhMZW5ndGggLSAyXG5cbiAgICAgIGlmICh0aGlzLl92ZXJzaW9uID4gOSkge1xuICAgICAgICBsZW5ndGgtLVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNoaWZ0IGFuZCByZS1wYWNrIHRvIGluc2VydCBsZW5ndGggcHJlZml4LlxuICAgIGxldCBpbmRleCA9IGxlbmd0aFxuXG4gICAgaWYgKHRoaXMuX3ZlcnNpb24gPiA5KSB7XG4gICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbaW5kZXggKyAyXSA9IDBcbiAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlcltpbmRleCArIDNdID0gMFxuXG4gICAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgICBjb25zdCBiaXQgPSB0aGlzLl9zdHJpbmdCdWZmZXJbaW5kZXhdXG5cbiAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyW2luZGV4ICsgM10gfD0gMjU1ICYgYml0IDw8IDRcbiAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyW2luZGV4ICsgMl0gPSBiaXQgPj4gNFxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbMl0gfD0gMjU1ICYgbGVuZ3RoIDw8IDRcbiAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlclsxXSA9IGxlbmd0aCA+PiA0XG4gICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbMF0gPSAweDQwIHwgbGVuZ3RoID4+IDEyXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlcltpbmRleCArIDFdID0gMFxuICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyW2luZGV4ICsgMl0gPSAwXG5cbiAgICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgIGNvbnN0IGJpdCA9IHRoaXMuX3N0cmluZ0J1ZmZlcltpbmRleF1cblxuICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbaW5kZXggKyAyXSB8PSAyNTUgJiBiaXQgPDwgNFxuICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbaW5kZXggKyAxXSA9IGJpdCA+PiA0XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlclsxXSB8PSAyNTUgJiBsZW5ndGggPDwgNFxuICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyWzBdID0gMHg0MCB8IGxlbmd0aCA+PiA0XG4gICAgfVxuXG4gICAgLy8gRmlsbCB0byBlbmQgd2l0aCBwYWQgcGF0dGVybi5cbiAgICBpbmRleCA9IGxlbmd0aCArIDMgLSAodGhpcy5fdmVyc2lvbiA8IDEwKVxuXG4gICAgd2hpbGUgKGluZGV4IDwgbWF4TGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbaW5kZXgrK10gPSAweGVjXG4gICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbaW5kZXgrK10gPSAweDExXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIFVzaW5nIHRoZSB0YWJsZSBmb3IgdGhlIGxlbmd0aCBvZiBlYWNoIHJ1biwgY2FsY3VsYXRlIHRoZSBhbW91bnQgb2YgYmFkIGltYWdlLiBMb25nIHJ1bnMgb3IgdGhvc2UgdGhhdCBsb29rIGxpa2VcbiAgICogZmluZGVycyBhcmUgY2FsbGVkIHR3aWNlOyBvbmNlIGZvciBYIGFuZCBZLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIC1cbiAgICogQHJldHVybnMge051bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXRCYWRuZXNzKGxlbmd0aCkge1xuICAgIGxldCBiYWRSdW5zID0gMFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9iYWRuZXNzW2ldID49IDUpIHtcbiAgICAgICAgYmFkUnVucyArPSBGcmFtZS5OMSArIHRoaXMuX2JhZG5lc3NbaV0gLSA1XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRkJGRkZCRiBhcyBpbiBmaW5kZXIuXG4gICAgZm9yIChsZXQgaSA9IDM7IGkgPCBsZW5ndGggLSAxOyBpICs9IDIpIHtcbiAgICAgIGlmICh0aGlzLl9iYWRuZXNzW2kgLSAyXSA9PT0gdGhpcy5fYmFkbmVzc1tpICsgMl0gJiZcbiAgICAgICAgdGhpcy5fYmFkbmVzc1tpICsgMl0gPT09IHRoaXMuX2JhZG5lc3NbaSAtIDFdICYmXG4gICAgICAgIHRoaXMuX2JhZG5lc3NbaSAtIDFdID09PSB0aGlzLl9iYWRuZXNzW2kgKyAxXSAmJlxuICAgICAgICB0aGlzLl9iYWRuZXNzW2kgLSAxXSAqIDMgPT09IHRoaXMuX2JhZG5lc3NbaV0gJiZcbiAgICAgICAgLy8gQmFja2dyb3VuZCBhcm91bmQgdGhlIGZvcmVncm91bmQgcGF0dGVybj8gTm90IHBhcnQgb2YgdGhlIHNwZWNzLlxuICAgICAgICAodGhpcy5fYmFkbmVzc1tpIC0gM10gPT09IDAgfHwgaSArIDMgPiBsZW5ndGggfHxcbiAgICAgICAgdGhpcy5fYmFkbmVzc1tpIC0gM10gKiAzID49IHRoaXMuX2JhZG5lc3NbaV0gKiA0IHx8XG4gICAgICAgIHRoaXMuX2JhZG5lc3NbaSArIDNdICogMyA+PSB0aGlzLl9iYWRuZXNzW2ldICogNCkpIHtcbiAgICAgICAgYmFkUnVucyArPSBGcmFtZS5OM1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiYWRSdW5zXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9maW5pc2goKSB7XG4gICAgLy8gU2F2ZSBwcmUtbWFzayBjb3B5IG9mIGZyYW1lLlxuICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHRoaXMuYnVmZmVyLnNsaWNlKDApXG5cbiAgICBsZXQgYml0ID0gMFxuICAgIGxldCBpXG4gICAgbGV0IG1hc2sgPSAzMDAwMFxuXG4gICAgLypcbiAgICAgKiBVc2luZyBmb3IgaW5zdGVhZCBvZiB3aGlsZSBzaW5jZSBpbiBvcmlnaW5hbCBBcmR1aW5vIGNvZGUgaWYgYW4gZWFybHkgbWFzayB3YXMgXCJnb29kIGVub3VnaFwiIGl0IHdvdWxkbid0IHRyeSBmb3JcbiAgICAgKiBhIGJldHRlciBvbmUgc2luY2UgdGhleSBnZXQgbW9yZSBjb21wbGV4IGFuZCB0YWtlIGxvbmdlci5cbiAgICAgKi9cbiAgICBmb3IgKGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAvLyBSZXR1cm5zIGZvcmVncm91bmQtYmFja2dyb3VuZCBpbWJhbGFuY2UuXG4gICAgICB0aGlzLl9hcHBseU1hc2soaSlcblxuICAgICAgY29uc3QgY3VycmVudE1hc2sgPSB0aGlzLl9jaGVja0JhZG5lc3MoKVxuXG4gICAgICAvLyBJcyBjdXJyZW50IG1hc2sgYmV0dGVyIHRoYW4gcHJldmlvdXMgYmVzdD9cbiAgICAgIGlmIChjdXJyZW50TWFzayA8IG1hc2spIHtcbiAgICAgICAgbWFzayA9IGN1cnJlbnRNYXNrXG4gICAgICAgIGJpdCA9IGlcbiAgICAgIH1cblxuICAgICAgLy8gRG9uJ3QgaW5jcmVtZW50IFwiaVwiIHRvIGEgdm9pZCByZWRvaW5nIG1hc2suXG4gICAgICBpZiAoYml0ID09PSA3KSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIC8vIFJlc2V0IGZvciBuZXh0IHBhc3MuXG4gICAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuX3N0cmluZ0J1ZmZlci5zbGljZSgwKVxuICAgIH1cblxuICAgIC8vIFJlZG8gYmVzdCBtYXNrIGFzIG5vbmUgd2VyZSBcImdvb2QgZW5vdWdoXCIgKGkuZS4gbGFzdCB3YXNuJ3QgYml0KS5cbiAgICBpZiAoYml0ICE9PSBpKSB7XG4gICAgICB0aGlzLl9hcHBseU1hc2soYml0KVxuICAgIH1cblxuICAgIC8vIEFkZCBpbiBmaW5hbCBtYXNrL0VDQyBsZXZlbCBieXRlcy5cbiAgICBtYXNrID0gRXJyb3JDb3JyZWN0aW9uLkZJTkFMX0ZPUk1BVFtiaXQgKyAodGhpcy5fbGV2ZWwgLSAxIDw8IDMpXVxuXG4gICAgLy8gTG93IGJ5dGUuXG4gICAgZm9yIChpID0gMDsgaSA8IDg7IGkrKywgbWFzayA+Pj0gMSkge1xuICAgICAgaWYgKG1hc2sgJiAxKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyW3RoaXMud2lkdGggLSAxIC0gaSArIHRoaXMud2lkdGggKiA4XSA9IDFcblxuICAgICAgICBpZiAoaSA8IDYpIHtcbiAgICAgICAgICB0aGlzLmJ1ZmZlcls4ICsgdGhpcy53aWR0aCAqIGldID0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYnVmZmVyWzggKyB0aGlzLndpZHRoICogKGkgKyAxKV0gPSAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIaWdoIGJ5dGUuXG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKywgbWFzayA+Pj0gMSkge1xuICAgICAgaWYgKG1hc2sgJiAxKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyWzggKyB0aGlzLndpZHRoICogKHRoaXMud2lkdGggLSA3ICsgaSldID0gMVxuXG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgdGhpcy5idWZmZXJbNiAtIGkgKyB0aGlzLndpZHRoICogOF0gPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5idWZmZXJbNyArIHRoaXMud2lkdGggKiA4XSA9IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcmxlYXZlcyBibG9ja3MuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW50ZXJsZWF2ZUJsb2NrcygpIHtcbiAgICBjb25zdCBtYXhMZW5ndGggPSB0aGlzLl9jYWxjdWxhdGVNYXhMZW5ndGgoKVxuICAgIGxldCBpXG4gICAgbGV0IGsgPSAwXG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fZGF0YUJsb2NrOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fbmVjY0Jsb2NrMTsgaisrKSB7XG4gICAgICAgIHRoaXMuX2VjY1trKytdID0gdGhpcy5fc3RyaW5nQnVmZmVyW2kgKyBqICogdGhpcy5fZGF0YUJsb2NrXVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX25lY2NCbG9jazI7IGorKykge1xuICAgICAgICB0aGlzLl9lY2NbaysrXSA9IHRoaXMuX3N0cmluZ0J1ZmZlclt0aGlzLl9uZWNjQmxvY2sxICogdGhpcy5fZGF0YUJsb2NrICsgaSArIGogKiAodGhpcy5fZGF0YUJsb2NrICsgMSldXG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9uZWNjQmxvY2syOyBqKyspIHtcbiAgICAgIHRoaXMuX2VjY1trKytdID0gdGhpcy5fc3RyaW5nQnVmZmVyW3RoaXMuX25lY2NCbG9jazEgKiB0aGlzLl9kYXRhQmxvY2sgKyBpICsgaiAqICh0aGlzLl9kYXRhQmxvY2sgKyAxKV1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5fZWNjQmxvY2s7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9uZWNjQmxvY2sxICsgdGhpcy5fbmVjY0Jsb2NrMjsgaisrKSB7XG4gICAgICAgIHRoaXMuX2VjY1trKytdID0gdGhpcy5fc3RyaW5nQnVmZmVyW21heExlbmd0aCArIGkgKyBqICogdGhpcy5fZWNjQmxvY2tdXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gdGhpcy5fZWNjXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogSW5zZXJ0cyBhbGlnbm1lbnQgYmxvY2tzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luc2VydEFsaWdubWVudHMoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoXG5cbiAgICBpZiAodGhpcy5fdmVyc2lvbiA+IDEpIHtcbiAgICAgIGNvbnN0IGkgPSBBbGlnbm1lbnQuQkxPQ0tbdGhpcy5fdmVyc2lvbl1cbiAgICAgIGxldCB5ID0gd2lkdGggLSA3XG5cbiAgICAgIGZvciAoOzspIHtcbiAgICAgICAgbGV0IHggPSB3aWR0aCAtIDdcblxuICAgICAgICB3aGlsZSAoeCA+IGkgLSAzKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQWxpZ25tZW50KHgsIHkpXG5cbiAgICAgICAgICBpZiAoeCA8IGkpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeCAtPSBpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeSA8PSBpICsgOSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICB5IC09IGlcblxuICAgICAgICB0aGlzLl9hZGRBbGlnbm1lbnQoNiwgeSlcbiAgICAgICAgdGhpcy5fYWRkQWxpZ25tZW50KHksIDYpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEluc2VydHMgZmluZGVyczogZm9yZWdyb3VuZCBjb2xvdXIgdG8gZnJhbWUgYW5kIGJhY2tncm91bmQgdG8gbWFzay5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbnNlcnRGaW5kZXJzKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGxldCBqID0gMFxuICAgICAgbGV0IHkgPSAwXG5cbiAgICAgIGlmIChpID09PSAxKSB7XG4gICAgICAgIGogPSB3aWR0aCAtIDdcbiAgICAgIH1cbiAgICAgIGlmIChpID09PSAyKSB7XG4gICAgICAgIHkgPSB3aWR0aCAtIDdcbiAgICAgIH1cblxuICAgICAgdGhpcy5idWZmZXJbeSArIDMgKyB3aWR0aCAqIChqICsgMyldID0gMVxuXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDY7IHgrKykge1xuICAgICAgICB0aGlzLmJ1ZmZlclt5ICsgeCArIHdpZHRoICogal0gPSAxXG4gICAgICAgIHRoaXMuYnVmZmVyW3kgKyB3aWR0aCAqIChqICsgeCArIDEpXSA9IDFcbiAgICAgICAgdGhpcy5idWZmZXJbeSArIDYgKyB3aWR0aCAqIChqICsgeCldID0gMVxuICAgICAgICB0aGlzLmJ1ZmZlclt5ICsgeCArIDEgKyB3aWR0aCAqIChqICsgNildID0gMVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCB4ID0gMTsgeCA8IDU7IHgrKykge1xuICAgICAgICB0aGlzLl9zZXRNYXNrKHkgKyB4LCBqICsgMSlcbiAgICAgICAgdGhpcy5fc2V0TWFzayh5ICsgMSwgaiArIHggKyAxKVxuICAgICAgICB0aGlzLl9zZXRNYXNrKHkgKyA1LCBqICsgeClcbiAgICAgICAgdGhpcy5fc2V0TWFzayh5ICsgeCArIDEsIGogKyA1KVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCB4ID0gMjsgeCA8IDQ7IHgrKykge1xuICAgICAgICB0aGlzLmJ1ZmZlclt5ICsgeCArIHdpZHRoICogKGogKyAyKV0gPSAxXG4gICAgICAgIHRoaXMuYnVmZmVyW3kgKyAyICsgd2lkdGggKiAoaiArIHggKyAxKV0gPSAxXG4gICAgICAgIHRoaXMuYnVmZmVyW3kgKyA0ICsgd2lkdGggKiAoaiArIHgpXSA9IDFcbiAgICAgICAgdGhpcy5idWZmZXJbeSArIHggKyAxICsgd2lkdGggKiAoaiArIDQpXSA9IDFcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogSW5zZXJ0cyB0aW1pbmcgZ2FwIGludG8gbWFzay5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbnNlcnRUaW1pbmdHYXAoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoXG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDc7IHkrKykge1xuICAgICAgdGhpcy5fc2V0TWFzayg3LCB5KVxuICAgICAgdGhpcy5fc2V0TWFzayh3aWR0aCAtIDgsIHkpXG4gICAgICB0aGlzLl9zZXRNYXNrKDcsIHkgKyB3aWR0aCAtIDcpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCA4OyB4KyspIHtcbiAgICAgIHRoaXMuX3NldE1hc2soeCwgNylcbiAgICAgIHRoaXMuX3NldE1hc2soeCArIHdpZHRoIC0gOCwgNylcbiAgICAgIHRoaXMuX3NldE1hc2soeCwgd2lkdGggLSA4KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBJbnNlcnRzIHRpbWluZyByb3cgYW5kIGNvbHVtbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbnNlcnRUaW1pbmdSb3dBbmRDb2x1bW4oKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoXG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoIC0gMTQ7IHgrKykge1xuICAgICAgaWYgKHggJiAxKSB7XG4gICAgICAgIHRoaXMuX3NldE1hc2soOCArIHgsIDYpXG4gICAgICAgIHRoaXMuX3NldE1hc2soNiwgOCArIHgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJ1ZmZlcls4ICsgeCArIHdpZHRoICogNl0gPSAxXG4gICAgICAgIHRoaXMuYnVmZmVyWzYgKyB3aWR0aCAqICg4ICsgeCldID0gMVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBJbnNlcnRzIHRoZSB2ZXJzaW9uIGJsb2NrLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luc2VydFZlcnNpb24oKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoXG5cbiAgICBpZiAodGhpcy5fdmVyc2lvbiA+IDYpIHtcbiAgICAgIGxldCBpID0gVmVyc2lvbi5CTE9DS1t0aGlzLl92ZXJzaW9uIC0gN11cbiAgICAgIGxldCBqID0gMTdcblxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA2OyB4KyspIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCAzOyB5KyssIGotLSkge1xuICAgICAgICAgIGlmICgxICYgKGogPiAxMSA/IHRoaXMuX3ZlcnNpb24gPj4gaiAtIDEyIDogaSA+PiBqKSkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbNSAtIHggKyB3aWR0aCAqICgyIC0geSArIHdpZHRoIC0gMTEpXSA9IDFcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyWzIgLSB5ICsgd2lkdGggLSAxMSArIHdpZHRoICogKDUgLSB4KV0gPSAxXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldE1hc2soNSAtIHgsIDIgLSB5ICsgd2lkdGggLSAxMSlcbiAgICAgICAgICAgIHRoaXMuX3NldE1hc2soMiAtIHkgKyB3aWR0aCAtIDExLCA1IC0geClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQ2hlY2tzIG1hc2sgc2luY2Ugc3ltbWV0cmljYWwgY2VsbHMgdXNlIGhhbGYuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IC1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgLVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2lzTWFza2VkKHgsIHkpIHtcbiAgICBjb25zdCBiaXQgPSBGcmFtZS5fZ2V0TWFza0JpdCh4LCB5KVxuXG4gICAgcmV0dXJuIHRoaXMuX21hc2tbYml0XSA9PT0gMVxuICB9XG5cbiAgLyoqXG4gICAqIFBhY2tzIHRoZSBiaXRzIGludG8gdGhlIGZyYW1lIGJ1ZmZlciB3aGlsZSBhdm9pZGluZyB0aGUgbWFza2VkIGFyZWEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcGFjaygpIHtcbiAgICBsZXQgeCA9IHRoaXMud2lkdGggLSAxXG4gICAgbGV0IHkgPSB0aGlzLndpZHRoIC0gMVxuICAgIGxldCBrID0gMVxuICAgIGxldCB2ID0gMVxuXG4gICAgLy8gSW50ZXJsZWF2ZWQgZGF0YSBhbmQgRUNDIGNvZGVzLlxuICAgIGNvbnN0IGxlbmd0aCA9ICh0aGlzLl9kYXRhQmxvY2sgKyB0aGlzLl9lY2NCbG9jaykgKiAodGhpcy5fbmVjY0Jsb2NrMSArIHRoaXMuX25lY2NCbG9jazIpICsgdGhpcy5fbmVjY0Jsb2NrMlxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGJpdCA9IHRoaXMuX3N0cmluZ0J1ZmZlcltpXVxuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKywgYml0IDw8PSAxKSB7XG4gICAgICAgIGlmICgweDgwICYgYml0KSB7XG4gICAgICAgICAgdGhpcy5idWZmZXJbeCArIHRoaXMud2lkdGggKiB5XSA9IDFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmQgbmV4dCBmaWxsIHBvc2l0aW9uLlxuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgIHgtLVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4KytcblxuICAgICAgICAgICAgaWYgKGspIHtcbiAgICAgICAgICAgICAgaWYgKHkgIT09IDApIHtcbiAgICAgICAgICAgICAgICB5LS1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4IC09IDJcbiAgICAgICAgICAgICAgICBrID0gIWtcblxuICAgICAgICAgICAgICAgIGlmICh4ID09PSA2KSB7XG4gICAgICAgICAgICAgICAgICB4LS1cbiAgICAgICAgICAgICAgICAgIHkgPSA5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgIT09IHRoaXMud2lkdGggLSAxKSB7XG4gICAgICAgICAgICAgIHkrK1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgeCAtPSAyXG4gICAgICAgICAgICAgIGsgPSAha1xuXG4gICAgICAgICAgICAgIGlmICh4ID09PSA2KSB7XG4gICAgICAgICAgICAgICAgeC0tXG4gICAgICAgICAgICAgICAgeSAtPSA4XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2ID0gIXZcbiAgICAgICAgfSB3aGlsZSAodGhpcy5faXNNYXNrZWQoeCwgeSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIFJldmVyc2VzIHRoZSBtYXNrIGFuZCBmb3JtYXRzIHRoZSBhcmVhLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3JldmVyc2VNYXNrKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aFxuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCA5OyB4KyspIHtcbiAgICAgIHRoaXMuX3NldE1hc2soeCwgOClcbiAgICB9XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDg7IHgrKykge1xuICAgICAgdGhpcy5fc2V0TWFzayh4ICsgd2lkdGggLSA4LCA4KVxuICAgICAgdGhpcy5fc2V0TWFzayg4LCB4KVxuICAgIH1cblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgNzsgeSsrKSB7XG4gICAgICB0aGlzLl9zZXRNYXNrKDgsIHkgKyB3aWR0aCAtIDcpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIFNldHMgYml0IHRvIGluZGljYXRlIGNlbGwgaW4gZnJhbWUgaXMgaW1tdXRhYmxlIChzeW1tZXRyaWMgYXJvdW5kIGRpYWdvbmFsKS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggLVxuICAgKiBAcGFyYW0ge051bWJlcn0geSAtXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0TWFzayh4LCB5KSB7XG4gICAgY29uc3QgYml0ID0gRnJhbWUuX2dldE1hc2tCaXQoeCwgeSlcblxuICAgIHRoaXMuX21hc2tbYml0XSA9IDFcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBTeW5jaHJvbml6ZXMgbWFzayBiaXRzLiBPbmx5IHNldCBhYm92ZSBmb3IgYmFja2dyb3VuZCBjZWxscywgc28gbm93IGFkZCB0aGUgZm9yZWdyb3VuZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zeW5jTWFzaygpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGhcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2lkdGg7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPD0geTsgeCsrKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlclt4ICsgd2lkdGggKiB5XSkge1xuICAgICAgICAgIHRoaXMuX3NldE1hc2soeCwgeSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyYW1lXG5cbi8qKlxuICogVE9ETzogRG9jdW1lbnRcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBGcmFtZX5PcHRpb25zXG4gKiBAcHJvcGVydHkge1N0cmluZ30gbGV2ZWwgLVxuICogQHByb3BlcnR5IHtTdHJpbmd9IHZhbHVlIC1cbiAqL1xuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBUT0RPOiBEb2N1bWVudFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgR2Fsb2lzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgR2Fsb2lzIGZpZWxkIGV4cG9uZW50IHRhYmxlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0gVGhlIEdhbG9pcyBmaWVsZCBleHBvbmVudCB0YWJsZS5cbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0IEVYUE9ORU5UKCkge1xuICAgIHJldHVybiBbXG4gICAgICAweDAxLCAweDAyLCAweDA0LCAweDA4LCAweDEwLCAweDIwLCAweDQwLCAweDgwLCAweDFkLCAweDNhLCAweDc0LCAweGU4LCAweGNkLCAweDg3LCAweDEzLCAweDI2LFxuICAgICAgMHg0YywgMHg5OCwgMHgyZCwgMHg1YSwgMHhiNCwgMHg3NSwgMHhlYSwgMHhjOSwgMHg4ZiwgMHgwMywgMHgwNiwgMHgwYywgMHgxOCwgMHgzMCwgMHg2MCwgMHhjMCxcbiAgICAgIDB4OWQsIDB4MjcsIDB4NGUsIDB4OWMsIDB4MjUsIDB4NGEsIDB4OTQsIDB4MzUsIDB4NmEsIDB4ZDQsIDB4YjUsIDB4NzcsIDB4ZWUsIDB4YzEsIDB4OWYsIDB4MjMsXG4gICAgICAweDQ2LCAweDhjLCAweDA1LCAweDBhLCAweDE0LCAweDI4LCAweDUwLCAweGEwLCAweDVkLCAweGJhLCAweDY5LCAweGQyLCAweGI5LCAweDZmLCAweGRlLCAweGExLFxuICAgICAgMHg1ZiwgMHhiZSwgMHg2MSwgMHhjMiwgMHg5OSwgMHgyZiwgMHg1ZSwgMHhiYywgMHg2NSwgMHhjYSwgMHg4OSwgMHgwZiwgMHgxZSwgMHgzYywgMHg3OCwgMHhmMCxcbiAgICAgIDB4ZmQsIDB4ZTcsIDB4ZDMsIDB4YmIsIDB4NmIsIDB4ZDYsIDB4YjEsIDB4N2YsIDB4ZmUsIDB4ZTEsIDB4ZGYsIDB4YTMsIDB4NWIsIDB4YjYsIDB4NzEsIDB4ZTIsXG4gICAgICAweGQ5LCAweGFmLCAweDQzLCAweDg2LCAweDExLCAweDIyLCAweDQ0LCAweDg4LCAweDBkLCAweDFhLCAweDM0LCAweDY4LCAweGQwLCAweGJkLCAweDY3LCAweGNlLFxuICAgICAgMHg4MSwgMHgxZiwgMHgzZSwgMHg3YywgMHhmOCwgMHhlZCwgMHhjNywgMHg5MywgMHgzYiwgMHg3NiwgMHhlYywgMHhjNSwgMHg5NywgMHgzMywgMHg2NiwgMHhjYyxcbiAgICAgIDB4ODUsIDB4MTcsIDB4MmUsIDB4NWMsIDB4YjgsIDB4NmQsIDB4ZGEsIDB4YTksIDB4NGYsIDB4OWUsIDB4MjEsIDB4NDIsIDB4ODQsIDB4MTUsIDB4MmEsIDB4NTQsXG4gICAgICAweGE4LCAweDRkLCAweDlhLCAweDI5LCAweDUyLCAweGE0LCAweDU1LCAweGFhLCAweDQ5LCAweDkyLCAweDM5LCAweDcyLCAweGU0LCAweGQ1LCAweGI3LCAweDczLFxuICAgICAgMHhlNiwgMHhkMSwgMHhiZiwgMHg2MywgMHhjNiwgMHg5MSwgMHgzZiwgMHg3ZSwgMHhmYywgMHhlNSwgMHhkNywgMHhiMywgMHg3YiwgMHhmNiwgMHhmMSwgMHhmZixcbiAgICAgIDB4ZTMsIDB4ZGIsIDB4YWIsIDB4NGIsIDB4OTYsIDB4MzEsIDB4NjIsIDB4YzQsIDB4OTUsIDB4MzcsIDB4NmUsIDB4ZGMsIDB4YTUsIDB4NTcsIDB4YWUsIDB4NDEsXG4gICAgICAweDgyLCAweDE5LCAweDMyLCAweDY0LCAweGM4LCAweDhkLCAweDA3LCAweDBlLCAweDFjLCAweDM4LCAweDcwLCAweGUwLCAweGRkLCAweGE3LCAweDUzLCAweGE2LFxuICAgICAgMHg1MSwgMHhhMiwgMHg1OSwgMHhiMiwgMHg3OSwgMHhmMiwgMHhmOSwgMHhlZiwgMHhjMywgMHg5YiwgMHgyYiwgMHg1NiwgMHhhYywgMHg0NSwgMHg4YSwgMHgwOSxcbiAgICAgIDB4MTIsIDB4MjQsIDB4NDgsIDB4OTAsIDB4M2QsIDB4N2EsIDB4ZjQsIDB4ZjUsIDB4ZjcsIDB4ZjMsIDB4ZmIsIDB4ZWIsIDB4Y2IsIDB4OGIsIDB4MGIsIDB4MTYsXG4gICAgICAweDJjLCAweDU4LCAweGIwLCAweDdkLCAweGZhLCAweGU5LCAweGNmLCAweDgzLCAweDFiLCAweDM2LCAweDZjLCAweGQ4LCAweGFkLCAweDQ3LCAweDhlLCAweDAwXG4gICAgXVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIEdhbG9pcyBmaWVsZCBsb2cgdGFibGUuXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcltdfSBUaGUgR2Fsb2lzIGZpZWxkIGxvZyB0YWJsZS5cbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0IExPRygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgMHhmZiwgMHgwMCwgMHgwMSwgMHgxOSwgMHgwMiwgMHgzMiwgMHgxYSwgMHhjNiwgMHgwMywgMHhkZiwgMHgzMywgMHhlZSwgMHgxYiwgMHg2OCwgMHhjNywgMHg0YixcbiAgICAgIDB4MDQsIDB4NjQsIDB4ZTAsIDB4MGUsIDB4MzQsIDB4OGQsIDB4ZWYsIDB4ODEsIDB4MWMsIDB4YzEsIDB4NjksIDB4ZjgsIDB4YzgsIDB4MDgsIDB4NGMsIDB4NzEsXG4gICAgICAweDA1LCAweDhhLCAweDY1LCAweDJmLCAweGUxLCAweDI0LCAweDBmLCAweDIxLCAweDM1LCAweDkzLCAweDhlLCAweGRhLCAweGYwLCAweDEyLCAweDgyLCAweDQ1LFxuICAgICAgMHgxZCwgMHhiNSwgMHhjMiwgMHg3ZCwgMHg2YSwgMHgyNywgMHhmOSwgMHhiOSwgMHhjOSwgMHg5YSwgMHgwOSwgMHg3OCwgMHg0ZCwgMHhlNCwgMHg3MiwgMHhhNixcbiAgICAgIDB4MDYsIDB4YmYsIDB4OGIsIDB4NjIsIDB4NjYsIDB4ZGQsIDB4MzAsIDB4ZmQsIDB4ZTIsIDB4OTgsIDB4MjUsIDB4YjMsIDB4MTAsIDB4OTEsIDB4MjIsIDB4ODgsXG4gICAgICAweDM2LCAweGQwLCAweDk0LCAweGNlLCAweDhmLCAweDk2LCAweGRiLCAweGJkLCAweGYxLCAweGQyLCAweDEzLCAweDVjLCAweDgzLCAweDM4LCAweDQ2LCAweDQwLFxuICAgICAgMHgxZSwgMHg0MiwgMHhiNiwgMHhhMywgMHhjMywgMHg0OCwgMHg3ZSwgMHg2ZSwgMHg2YiwgMHgzYSwgMHgyOCwgMHg1NCwgMHhmYSwgMHg4NSwgMHhiYSwgMHgzZCxcbiAgICAgIDB4Y2EsIDB4NWUsIDB4OWIsIDB4OWYsIDB4MGEsIDB4MTUsIDB4NzksIDB4MmIsIDB4NGUsIDB4ZDQsIDB4ZTUsIDB4YWMsIDB4NzMsIDB4ZjMsIDB4YTcsIDB4NTcsXG4gICAgICAweDA3LCAweDcwLCAweGMwLCAweGY3LCAweDhjLCAweDgwLCAweDYzLCAweDBkLCAweDY3LCAweDRhLCAweGRlLCAweGVkLCAweDMxLCAweGM1LCAweGZlLCAweDE4LFxuICAgICAgMHhlMywgMHhhNSwgMHg5OSwgMHg3NywgMHgyNiwgMHhiOCwgMHhiNCwgMHg3YywgMHgxMSwgMHg0NCwgMHg5MiwgMHhkOSwgMHgyMywgMHgyMCwgMHg4OSwgMHgyZSxcbiAgICAgIDB4MzcsIDB4M2YsIDB4ZDEsIDB4NWIsIDB4OTUsIDB4YmMsIDB4Y2YsIDB4Y2QsIDB4OTAsIDB4ODcsIDB4OTcsIDB4YjIsIDB4ZGMsIDB4ZmMsIDB4YmUsIDB4NjEsXG4gICAgICAweGYyLCAweDU2LCAweGQzLCAweGFiLCAweDE0LCAweDJhLCAweDVkLCAweDllLCAweDg0LCAweDNjLCAweDM5LCAweDUzLCAweDQ3LCAweDZkLCAweDQxLCAweGEyLFxuICAgICAgMHgxZiwgMHgyZCwgMHg0MywgMHhkOCwgMHhiNywgMHg3YiwgMHhhNCwgMHg3NiwgMHhjNCwgMHgxNywgMHg0OSwgMHhlYywgMHg3ZiwgMHgwYywgMHg2ZiwgMHhmNixcbiAgICAgIDB4NmMsIDB4YTEsIDB4M2IsIDB4NTIsIDB4MjksIDB4OWQsIDB4NTUsIDB4YWEsIDB4ZmIsIDB4NjAsIDB4ODYsIDB4YjEsIDB4YmIsIDB4Y2MsIDB4M2UsIDB4NWEsXG4gICAgICAweGNiLCAweDU5LCAweDVmLCAweGIwLCAweDljLCAweGE5LCAweGEwLCAweDUxLCAweDBiLCAweGY1LCAweDE2LCAweGViLCAweDdhLCAweDc1LCAweDJjLCAweGQ3LFxuICAgICAgMHg0ZiwgMHhhZSwgMHhkNSwgMHhlOSwgMHhlNiwgMHhlNywgMHhhZCwgMHhlOCwgMHg3NCwgMHhkNiwgMHhmNCwgMHhlYSwgMHhhOCwgMHg1MCwgMHg1OCwgMHhhZlxuICAgIF1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbG9pc1xuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuY29uc3QgQ2FudmFzUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL0NhbnZhc1JlbmRlcmVyJylcbmNvbnN0IEVsZW1lbnRTZXJ2aWNlUHJvdmlkZXIgPSByZXF1aXJlKCcuL3NlcnZpY2UvZWxlbWVudC9FbGVtZW50U2VydmljZVByb3ZpZGVyJylcbmNvbnN0IEZyYW1lID0gcmVxdWlyZSgnLi9GcmFtZScpXG5jb25zdCBJbWFnZVJlbmRlcmVyID0gcmVxdWlyZSgnLi9yZW5kZXJlci9JbWFnZVJlbmRlcmVyJylcbmNvbnN0IFV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbC9VdGlsaXRpZXMnKVxuXG4vKipcbiAqIFRPRE86IERvY3VtZW50XG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBRUmlvdXMge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIHtAbGluayBRUmlvdXN9LlxuICAgKlxuICAgKiBAcmV0dXJuIHtRUmlvdXN+T3B0aW9uc30gVGhlIGRlZmF1bHQgb3B0aW9ucy5cbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0IERFRkFVTFRTKCkge1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgZm9yZWdyb3VuZDogJ2JsYWNrJyxcbiAgICAgIGxldmVsOiAnTCcsXG4gICAgICBtaW1lOiAnaW1hZ2UvcG5nJyxcbiAgICAgIHNpemU6IDEwMCxcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZlcnNpb24gb2Yge0BsaW5rIFFSaW91c30uXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGN1cnJlbnQgdmVyc2lvbi5cbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuICcyLjAuMCdcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge1FSaW91c35PcHRpb25zfSBbb3B0aW9uc10gLVxuICAgKiBAcmV0dXJuIHtRUmlvdXN+T3B0aW9uc31cbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIF9wYXJzZU9wdGlvbnMob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBRUmlvdXMuREVGQVVMVFMsIG9wdGlvbnMpXG4gICAgb3B0aW9ucy5sZXZlbCA9IFV0aWxpdGllcy50b1VwcGVyQ2FzZShvcHRpb25zLmxldmVsKVxuICAgIG9wdGlvbnMuc2l6ZSA9IE1hdGguYWJzKG9wdGlvbnMuc2l6ZSlcblxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtRUmlvdXN+T3B0aW9uc30gW29wdGlvbnNdIC1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBRUmlvdXMuX3BhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgVXRpbGl0aWVzLnByaXZhdGl6ZSh0aGlzLCBvcHRpb25zKVxuXG4gICAgLyoqXG4gICAgICogVE9ETzogRG9jdW1lbnRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge0VsZW1lbnRTZXJ2aWNlfVxuICAgICAqL1xuICAgIHRoaXMuX2VsZW1lbnRTZXJ2aWNlID0gbmV3IEVsZW1lbnRTZXJ2aWNlUHJvdmlkZXIoKS5nZXRTZXJ2aWNlKClcblxuICAgIC8qKlxuICAgICAqIFRPRE86IERvY3VtZW50XG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQHR5cGUgeyp9XG4gICAgICovXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLl9lbGVtZW50ICYmIHRoaXMuX2VsZW1lbnRTZXJ2aWNlLmlzQ2FudmFzKHRoaXMuX2VsZW1lbnQpID8gdGhpcy5fZWxlbWVudCA6IHRoaXMuX2VsZW1lbnRTZXJ2aWNlLmNyZWF0ZUNhbnZhcygpXG4gICAgdGhpcy5jYW52YXMucXJpb3VzID0gdGhpc1xuXG4gICAgLyoqXG4gICAgICogVE9ETzogRG9jdW1lbnRcbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKi9cbiAgICB0aGlzLmltYWdlID0gdGhpcy5fZWxlbWVudCAmJiB0aGlzLl9lbGVtZW50U2VydmljZS5pc0ltYWdlKHRoaXMuX2VsZW1lbnQpID8gdGhpcy5fZWxlbWVudCA6IHRoaXMuX2VsZW1lbnRTZXJ2aWNlLmNyZWF0ZUltYWdlKClcbiAgICB0aGlzLmltYWdlLnFyaW91cyA9IHRoaXNcblxuICAgIC8qKlxuICAgICAqIFRPRE86IERvY3VtZW50XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcltdfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVycyA9IFtcbiAgICAgIG5ldyBDYW52YXNSZW5kZXJlcih0aGlzKSxcbiAgICAgIG5ldyBJbWFnZVJlbmRlcmVyKHRoaXMpXG4gICAgXVxuXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIFJldHVybnMgdGhlIGltYWdlIGRhdGEgVVJJIGZvciB0aGUgZ2VuZXJhdGVkIFFSIGNvZGUgdXNpbmcgdGhlIDxjb2RlPm1pbWU8L2NvZGU+IHByb3ZpZGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gW21pbWVdIC1cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKiBAcHVibGljXG4gICAqL1xuICB0b0RhdGFVUkwobWltZSkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy50b0RhdGFVUkwobWltZSB8fCB0aGlzLm1pbWUpXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGZyYW1lID0gbmV3IEZyYW1lKHtcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICB9KVxuXG4gICAgdGhpcy5fcmVuZGVyZXJzLmZvckVhY2goKHJlbmRlcmVyKSA9PiByZW5kZXJlci5yZW5kZXIoZnJhbWUpKVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0IGJhY2tncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhY2tncm91bmRcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gYmFja2dyb3VuZCAtXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNldCBiYWNrZ3JvdW5kKGJhY2tncm91bmQpIHtcbiAgICBjb25zdCBjaGFuZ2VkID0gVXRpbGl0aWVzLnNldHRlcih0aGlzLCAnX2JhY2tncm91bmQnLCBiYWNrZ3JvdW5kLCBRUmlvdXMuREVGQVVMVFMuYmFja2dyb3VuZClcblxuICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0IGZvcmVncm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvcmVncm91bmRcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZm9yZWdyb3VuZCAtXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNldCBmb3JlZ3JvdW5kKGZvcmVncm91bmQpIHtcbiAgICBjb25zdCBjaGFuZ2VkID0gVXRpbGl0aWVzLnNldHRlcih0aGlzLCAnX2ZvcmVncm91bmQnLCBmb3JlZ3JvdW5kLCBRUmlvdXMuREVGQVVMVFMuZm9yZWdyb3VuZClcblxuICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9sZXZlbFxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsZXZlbCAtXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNldCBsZXZlbChsZXZlbCkge1xuICAgIGNvbnN0IGNoYW5nZWQgPSBVdGlsaXRpZXMuc2V0dGVyKHRoaXMsICdfbGV2ZWwnLCBsZXZlbCwgUVJpb3VzLkRFRkFVTFRTLmxldmVsLCBVdGlsaXRpZXMudG9VcHBlckNhc2UpXG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldCBtaW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9taW1lXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1pbWUgLVxuICAgKiBAcHVibGljXG4gICAqL1xuICBzZXQgbWltZShtaW1lKSB7XG4gICAgY29uc3QgY2hhbmdlZCA9IFV0aWxpdGllcy5zZXR0ZXIodGhpcywgJ19taW1lJywgbWltZSwgUVJpb3VzLkRFRkFVTFRTLm1pbWUpXG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLl9zaXplXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgLVxuICAgKiBAcHVibGljXG4gICAqL1xuICBzZXQgc2l6ZShzaXplKSB7XG4gICAgY29uc3QgY2hhbmdlZCA9IFV0aWxpdGllcy5zZXR0ZXIodGhpcywgJ19zaXplJywgc2l6ZSwgUVJpb3VzLkRFRkFVTFRTLnNpemUsIE1hdGguYWJzKVxuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3QgY2hhbmdlZCA9IFV0aWxpdGllcy5zZXR0ZXIodGhpcywgJ192YWx1ZScsIHZhbHVlLCBRUmlvdXMuREVGQVVMVFMudmFsdWUpXG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFFSaW91c1xuXG4vKipcbiAqIFRPRE86IERvY3VtZW50XG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gUVJpb3Vzfk9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbYmFja2dyb3VuZD1cIndoaXRlXCJdIC0gVGhlIGJhY2tncm91bmQgY29sb3IgdG8gYmUgYXBwbGllZCB0byB0aGUgUVIgY29kZS5cbiAqIEBwcm9wZXJ0eSB7Kn0gW2VsZW1lbnRdIC0gVE9ETzogRG9jdW1lbnRcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbZm9yZWdyb3VuZD1cImJsYWNrXCJdIC0gVGhlIGZvcmVncm91bmQgY29sb3IgdG8gYmUgYXBwbGllZCB0byB0aGUgUVIgY29kZS5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbbGV2ZWw9XCJMXCJdIC0gVGhlIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWwgdG8gYmUgYXBwbGllZCB0byB0aGUgUVIgY29kZS5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbbWltZT1cImltYWdlL3BuZ1wiXSAtIFRPRE86IERvY3VtZW50XG4gKiBAcHJvcGVydHkge051bWJlcn0gW3NpemU9MTAwXSAtIFRoZSBzaXplIG9mIHRoZSBRUiBjb2RlIGluIHBpeGVscy5cbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbdmFsdWU9XCJcIl0gLSBUaGUgdmFsdWUgdG8gYmUgZW5jb2RlZCB3aXRoaW4gdGhlIFFSIGNvZGUuXG4gKi9cbiIsIi8qXG4gKiBRUmlvdXNcbiAqIENvcHlyaWdodCAoQykgMjAxNiBBbGFzZGFpciBNZXJjZXJcbiAqIENvcHlyaWdodCAoQykgMjAxMCBUb20gWmVydWNoYVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogVE9ETzogRG9jdW1lbnRcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFZlcnNpb24ge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2ZXJzaW9uIHBhdHRlcm4gYmxvY2suXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcltdfSBUaGUgdmVyc2lvbiBwYXR0ZXJuIGJsb2NrLlxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXQgQkxPQ0soKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIDB4Yzk0LCAweDViYywgMHhhOTksIDB4NGQzLCAweGJmNiwgMHg3NjIsIDB4ODQ3LCAweDYwZCwgMHg5MjgsIDB4Yjc4LCAweDQ1ZCwgMHhhMTcsIDB4NTMyLFxuICAgICAgMHg5YTYsIDB4NjgzLCAweDhjOSwgMHg3ZWMsIDB4ZWM0LCAweDFlMSwgMHhmYWIsIDB4MDhlLCAweGMxYSwgMHgzM2YsIDB4ZDc1LCAweDI1MCwgMHg5ZDUsXG4gICAgICAweDZmMCwgMHg4YmEsIDB4NzlmLCAweGIwYiwgMHg0MmUsIDB4YTY0LCAweDU0MSwgMHhjNjlcbiAgICBdXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJzaW9uXG4iLCIvKlxuICogUVJpb3VzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQWxhc2RhaXIgTWVyY2VyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAgVG9tIFplcnVjaGFcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vUVJpb3VzJylcbiIsIi8qXG4gKiBRUmlvdXNcbiAqIENvcHlyaWdodCAoQykgMjAxNiBBbGFzZGFpciBNZXJjZXJcbiAqIENvcHlyaWdodCAoQykgMjAxMCBUb20gWmVydWNoYVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbmNvbnN0IFJlbmRlcmVyID0gcmVxdWlyZSgnLi9SZW5kZXJlcicpXG5cbi8qKlxuICogVE9ETzogRG9jdW1lbnRcbiAqXG4gKiBAcHVibGljXG4gKiBAZXh0ZW5kcyBSZW5kZXJlclxuICovXG5jbGFzcyBDYW52YXNSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBkcmF3KGZyYW1lKSB7XG4gICAgY29uc3QgcXJpb3VzID0gdGhpcy5xcmlvdXNcbiAgICBjb25zdCBwaXhlbHMgPSB0aGlzLmdldFBpeGVscyhmcmFtZSlcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldE9mZnNldChmcmFtZSlcbiAgICBjb25zdCBjb250ZXh0ID0gcXJpb3VzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHFyaW91cy5mb3JlZ3JvdW5kXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lLndpZHRoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZnJhbWUud2lkdGg7IGorKykge1xuICAgICAgICBpZiAoZnJhbWUuYnVmZmVyW2ogKiBmcmFtZS53aWR0aCArIGldKSB7XG4gICAgICAgICAgY29udGV4dC5maWxsUmVjdChwaXhlbHMgKiBpICsgb2Zmc2V0LCBwaXhlbHMgKiBqICsgb2Zmc2V0LCBwaXhlbHMsIHBpeGVscylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IHFyaW91cyA9IHRoaXMucXJpb3VzXG4gICAgY29uc3QgY29udGV4dCA9IHFyaW91cy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgY29udGV4dC5saW5lV2lkdGggPSAxXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgcXJpb3VzLnNpemUsIHFyaW91cy5zaXplKVxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcXJpb3VzLmJhY2tncm91bmRcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHFyaW91cy5zaXplLCBxcmlvdXMuc2l6ZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBxcmlvdXMgPSB0aGlzLnFyaW91c1xuICAgIGNvbnN0IGNhbnZhcyA9IHFyaW91cy5jYW52YXNcblxuICAgIGNhbnZhcy53aWR0aCA9IHFyaW91cy5zaXplXG4gICAgY2FudmFzLmhlaWdodCA9IHFyaW91cy5zaXplXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNSZW5kZXJlclxuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuL1JlbmRlcmVyJylcblxuLyoqXG4gKiBUT0RPOiBEb2N1bWVudFxuICpcbiAqIEBwdWJsaWNcbiAqIEBleHRlbmRzIFJlbmRlcmVyXG4gKi9cbmNsYXNzIEltYWdlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgZHJhdygpIHtcbiAgICBjb25zdCBxcmlvdXMgPSB0aGlzLnFyaW91c1xuXG4gICAgcXJpb3VzLmltYWdlLnNyYyA9IHFyaW91cy50b0RhdGFVUkwoKVxuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgY29uc3QgcXJpb3VzID0gdGhpcy5xcmlvdXNcblxuICAgIHFyaW91cy5pbWFnZS5zcmMgPSAnJ1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IHFyaW91cyA9IHRoaXMucXJpb3VzXG4gICAgY29uc3QgaW1hZ2UgPSBxcmlvdXMuaW1hZ2VcblxuICAgIGltYWdlLndpZHRoID0gcXJpb3VzLnNpemVcbiAgICBpbWFnZS5oZWlnaHQgPSBxcmlvdXMuc2l6ZVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VSZW5kZXJlclxuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuY29uc3QgVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbC9VdGlsaXRpZXMnKVxuXG4vKipcbiAqIFRPRE86IERvY3VtZW50XG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBSZW5kZXJlciB7XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7UVJpb3VzfSBxcmlvdXMgLVxuICAgKiBAcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihxcmlvdXMpIHtcbiAgICAvKipcbiAgICAgKiBUT0RPOiBEb2N1bWVudFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtRUmlvdXN9XG4gICAgICovXG4gICAgdGhpcy5xcmlvdXMgPSBxcmlvdXNcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0ZyYW1lfSBmcmFtZSAtXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGRyYXcoZnJhbWUpIHtcbiAgICBVdGlsaXRpZXMudGhyb3dVbmltcGxlbWVudGVkKCdSZW5kZXJlcicsICdkcmF3JylcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0ZyYW1lfSBmcmFtZSAtXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZ2V0T2Zmc2V0KGZyYW1lKSB7XG4gICAgY29uc3QgcGl4ZWxzID0gdGhpcy5nZXRQaXhlbHMoZnJhbWUpXG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcigodGhpcy5xcmlvdXMuc2l6ZSAtIHBpeGVscyAqIGZyYW1lLndpZHRoKSAvIDIpXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtGcmFtZX0gZnJhbWUgLVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGdldFBpeGVscyhmcmFtZSkge1xuICAgIGNvbnN0IHBpeGVscyA9IHRoaXMucXJpb3VzLnNpemUgLyBmcmFtZS53aWR0aFxuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocGl4ZWxzKVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RnJhbWV9IGZyYW1lIC1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgcmVuZGVyKGZyYW1lKSB7XG4gICAgdGhpcy5yZXNpemUoKVxuICAgIHRoaXMucmVzZXQoKVxuICAgIHRoaXMuZHJhdyhmcmFtZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICByZXNldCgpIHtcbiAgICBVdGlsaXRpZXMudGhyb3dVbmltcGxlbWVudGVkKCdSZW5kZXJlcicsICdyZXNldCcpXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcmVzaXplKCkge1xuICAgIFV0aWxpdGllcy50aHJvd1VuaW1wbGVtZW50ZWQoJ1JlbmRlcmVyJywgJ3Jlc2l6ZScpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXJlclxuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBEZWZpbmVzIGEgc2VydmljZSBjb250cmFjdCB0aGF0IG11c3QgYmUgbWV0IGJ5IGFsbCBpbXBsZW1lbnRhdGlvbnMuXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBTZXJ2aWNlIHtcblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUge0BsaW5rIFNlcnZpY2V9IGlzIHN1cHBvcnRlZCBpbiB0aGUgY3VycmVudCBjb250ZXh0LlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCB3aWxsIGFsd2F5cyByZXR1cm4gPGNvZGU+dHJ1ZTwvY29kZT4gYnV0IGltcGxlbWVudGF0aW9ucyBhcmUgZnJlZSB0byBvdmVycmlkZSB0aGlzIG1ldGhvZFxuICAgKiBhcyBhbmQgd2hlbiBuZWVkZWQgdG8gY29udHJvbCB0aGUgdXNhZ2Ugb2YgdGhlIHtAbGluayBTZXJ2aWNlfS5cbiAgICpcbiAgICogQWxzbywgdGhlIGRlZmF1bHQgbG9naWMgZm9yIGEge0BsaW5rIFNlcnZpY2VQcm92aWRlcn0gaXMgdG8gaWdub3JlIHVuc3VwcG9ydGVkIGltcGxlbWVudGF0aW9ucy5cbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIHtAbGluayBTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBpcyBzdXBwb3J0ZWQgaW4gdGhlIGN1cnJlbnQgY29udGV4dDtcbiAgICogb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgaXNTdXBwb3J0ZWQoKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcnZpY2VcbiIsIi8qXG4gKiBRUmlvdXNcbiAqIENvcHlyaWdodCAoQykgMjAxNiBBbGFzZGFpciBNZXJjZXJcbiAqIENvcHlyaWdodCAoQykgMjAxMCBUb20gWmVydWNoYVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogQSBiYXNpYyBwcm92aWRlciBmb3Ige0BsaW5rIFNlcnZpY2V9IGltcGxlbWVudGF0aW9ucyB3aGljaCwgYnkgZGVmYXVsdCwgcmV0dXJucyB0aGUgZmlyc3QgaW1wbGVtZW50YXRpb24gdGhhdFxuICogc3VwcG9ydHMgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFNlcnZpY2VQcm92aWRlciB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIFNlcnZpY2VQcm92aWRlcn0gd2l0aCB0aGUgb3B0aW9uYWwgbGlzdCBvZiB7QGxpbmsgU2VydmljZX1cbiAgICogPGNvZGU+aW1wbGVtZW50YXRpb25zPC9jb2RlPiBwcm92aWRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbltdfSBbaW1wbGVtZW50YXRpb25zXSAtIGFueSBpbXBsZW1lbnRhdGlvbnMgY2xhc3NlcyB0byBiZSBjb25zaWRlcmVkIGJ5IHRoaXMgcHJvdmlkZXJcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3IoaW1wbGVtZW50YXRpb25zKSB7XG4gICAgLyoqXG4gICAgICogQSBsaXN0IG9mIHtAbGluayBTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbnMgYmVpbmcgY29uc2lkZXJlZCBieSB0aGlzIHByb3ZpZGVyLlxuICAgICAqXG4gICAgICogVGhpcyBsaXN0IGNvbnNpc3RzIG9mIGltcGxlbWVudGF0aW9uIGNsYXNzZXMgYW5kIDxiPm5vdDwvYj4gaW5zdGFuY2VzLlxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtGdW5jdGlvbltdfVxuICAgICAqL1xuICAgIHRoaXMuaW1wbGVtZW50YXRpb25zID0gaW1wbGVtZW50YXRpb25zID8gaW1wbGVtZW50YXRpb25zLnNsaWNlKDApIDogW11cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm92aWRlcyBhbiBpbnN0YW5jZSBvZiBhIG1hdGNoaW5nIHtAbGluayBTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgdGhlIGZpcnN0IGltcGxlbWVudGF0aW9uIHRoYXQgc3VwcG9ydHMgdGhlIGN1cnJlbnQgY29udGV4dCxcbiAgICogaG93ZXZlciwgaW1wbGVtZW50YXRpb25zIG9mIHtAbGluayBTZXJ2aWNlUHJvdmlkZXJ9IGFyZSBmcmVlIHRvIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHByb3ZpZGUgYWx0ZXJuYXRpdmUgbG9naWNcbiAgICogaWYgbmVlZGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtTZXJ2aWNlfSBBIG5ldyBpbnN0YW5jZSBvZiBhIG1hdGNoaW5nIHtAbGluayBTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbi5cbiAgICogQHRocm93cyB7RXJyb3J9IElmIG5vIHtAbGluayBTZXJ2aWNlfSBpbXBsZW1lbnRhdGlvbiBjb3VsZCBiZSBwcm92aWRlZC5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0U2VydmljZSgpIHtcbiAgICBsZXQgU2VydmljZSA9IHRoaXMuaW1wbGVtZW50YXRpb25zLmZpbmQoKEltcGxlbWVudGF0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIEltcGxlbWVudGF0aW9uLmlzU3VwcG9ydGVkID09PSAnZnVuY3Rpb24nICYmIEltcGxlbWVudGF0aW9uLmlzU3VwcG9ydGVkKClcbiAgICB9KVxuXG4gICAgaWYgKCFTZXJ2aWNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwcm92aWRlIHNlcnZpY2UgaW1wbGVtZW50YXRpb24nKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgU2VydmljZSgpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXJ2aWNlUHJvdmlkZXJcbiIsIi8qXG4gKiBRUmlvdXNcbiAqIENvcHlyaWdodCAoQykgMjAxNiBBbGFzZGFpciBNZXJjZXJcbiAqIENvcHlyaWdodCAoQykgMjAxMCBUb20gWmVydWNoYVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbmNvbnN0IEVsZW1lbnRTZXJ2aWNlID0gcmVxdWlyZSgnLi9FbGVtZW50U2VydmljZScpXG5cbi8qKlxuICogVE9ETzogRG9jdW1lbnRcbiAqXG4gKiBAcHVibGljXG4gKiBAZXh0ZW5kcyBFbGVtZW50U2VydmljZVxuICovXG5jbGFzcyBCcm93c2VyRWxlbWVudFNlcnZpY2UgZXh0ZW5kcyBFbGVtZW50U2VydmljZSB7XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgY3JlYXRlQ2FudmFzKCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgY3JlYXRlSW1hZ2UoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBpc0NhbnZhcyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudFxuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgaXNJbWFnZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCcm93c2VyRWxlbWVudFNlcnZpY2VcbiIsIi8qXG4gKiBRUmlvdXNcbiAqIENvcHlyaWdodCAoQykgMjAxNiBBbGFzZGFpciBNZXJjZXJcbiAqIENvcHlyaWdodCAoQykgMjAxMCBUb20gWmVydWNoYVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbmNvbnN0IFNlcnZpY2UgPSByZXF1aXJlKCcuLi9TZXJ2aWNlJylcbmNvbnN0IFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwvVXRpbGl0aWVzJylcblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIHdvcmtpbmcgd2l0aCBlbGVtZW50cy5cbiAqXG4gKiBAcHVibGljXG4gKiBAZXh0ZW5kcyBTZXJ2aWNlXG4gKi9cbmNsYXNzIEVsZW1lbnRTZXJ2aWNlIGV4dGVuZHMgU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBjYW52YXMgZWxlbWVudC5cbiAgICpcbiAgICogQHJldHVybiB7Kn0gVGhlIG5ld2x5IGNyZWF0ZWQgY2FudmFzIGVsZW1lbnQuXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICBVdGlsaXRpZXMudGhyb3dVbmltcGxlbWVudGVkKCdFbGVtZW50U2VydmljZScsICdjcmVhdGVDYW52YXMnKVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgYSBpbWFnZSBlbGVtZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHsqfSBUaGUgbmV3bHkgY3JlYXRlZCBpbWFnZSBlbGVtZW50LlxuICAgKiBAcHVibGljXG4gICAqL1xuICBjcmVhdGVJbWFnZSgpIHtcbiAgICBVdGlsaXRpZXMudGhyb3dVbmltcGxlbWVudGVkKCdFbGVtZW50U2VydmljZScsICdjcmVhdGVJbWFnZScpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgPGNvZGU+ZWxlbWVudDwvY29kZT4gaXMgYSBjYW52YXMuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZWxlbWVudCAtIHRoZSBlbGVtZW50IHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgPGNvZGU+ZWxlbWVudDwvY29kZT4gaXMgYSBjYW52YXM7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGlzQ2FudmFzKGVsZW1lbnQpIHtcbiAgICBVdGlsaXRpZXMudGhyb3dVbmltcGxlbWVudGVkKCdFbGVtZW50U2VydmljZScsICdpc0NhbnZhcycpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgPGNvZGU+ZWxlbWVudDwvY29kZT4gaXMgYW4gaW1hZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gZWxlbWVudCAtIHRoZSBlbGVtZW50IHRvIGJlIGNoZWNrZWRcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gPGNvZGU+dHJ1ZTwvY29kZT4gaWYgPGNvZGU+ZWxlbWVudDwvY29kZT4gaXMgYW4gaW1hZ2U7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGlzSW1hZ2UoZWxlbWVudCkge1xuICAgIFV0aWxpdGllcy50aHJvd1VuaW1wbGVtZW50ZWQoJ0VsZW1lbnRTZXJ2aWNlJywgJ2lzSW1hZ2UnKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudFNlcnZpY2VcbiIsIi8qXG4gKiBRUmlvdXNcbiAqIENvcHlyaWdodCAoQykgMjAxNiBBbGFzZGFpciBNZXJjZXJcbiAqIENvcHlyaWdodCAoQykgMjAxMCBUb20gWmVydWNoYVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbmNvbnN0IEJyb3dzZXJFbGVtZW50U2VydmljZSA9IHJlcXVpcmUoJy4vQnJvd3NlckVsZW1lbnRTZXJ2aWNlJylcbmNvbnN0IE5vZGVFbGVtZW50U2VydmljZSA9IHJlcXVpcmUoJy4vTm9kZUVsZW1lbnRTZXJ2aWNlJylcbmNvbnN0IFNlcnZpY2VQcm92aWRlciA9IHJlcXVpcmUoJy4uL1NlcnZpY2VQcm92aWRlcicpXG5cbi8qKlxuICogQSBzZXJ2aWNlIHByb3ZpZGVyIGZvciB0aGUge0BsaW5rIEVsZW1lbnRTZXJ2aWNlfS5cbiAqXG4gKiBAcHVibGljXG4gKiBAZXh0ZW5kcyBTZXJ2aWNlUHJvdmlkZXJcbiAqL1xuY2xhc3MgRWxlbWVudFNlcnZpY2VQcm92aWRlciBleHRlbmRzIFNlcnZpY2VQcm92aWRlciB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2Yge0BsaW5rIEVsZW1lbnRTZXJ2aWNlUHJvdmlkZXJ9LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihbIE5vZGVFbGVtZW50U2VydmljZSwgQnJvd3NlckVsZW1lbnRTZXJ2aWNlIF0pXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50U2VydmljZVByb3ZpZGVyXG4iLCIvKlxuICogUVJpb3VzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQWxhc2RhaXIgTWVyY2VyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAgVG9tIFplcnVjaGFcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5sZXQgQ2FudmFzXG50cnkge1xuICBDYW52YXMgPSByZXF1aXJlKCdjYW52YXMnKVxufSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gRG8gbm90aGluZy4uLlxufVxuXG5jb25zdCBFbGVtZW50U2VydmljZSA9IHJlcXVpcmUoJy4vRWxlbWVudFNlcnZpY2UnKVxuXG4vKipcbiAqIFRPRE86IERvY3VtZW50XG4gKlxuICogQHB1YmxpY1xuICogQGV4dGVuZHMgRWxlbWVudFNlcnZpY2VcbiAqL1xuY2xhc3MgTm9kZUVsZW1lbnRTZXJ2aWNlIGV4dGVuZHMgRWxlbWVudFNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gQ2FudmFzICE9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICByZXR1cm4gbmV3IENhbnZhcygpXG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBjcmVhdGVJbWFnZSgpIHtcbiAgICByZXR1cm4gbmV3IENhbnZhcy5JbWFnZSgpXG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBpc0NhbnZhcyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBDYW52YXNcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGlzSW1hZ2UoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgQ2FudmFzLkltYWdlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb2RlRWxlbWVudFNlcnZpY2VcbiIsIi8qXG4gKiBRUmlvdXNcbiAqIENvcHlyaWdodCAoQykgMjAxNiBBbGFzZGFpciBNZXJjZXJcbiAqIENvcHlyaWdodCAoQykgMjAxMCBUb20gWmVydWNoYVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogVE9ETzogRG9jdW1lbnRcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFV0aWxpdGllcyB7XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgLVxuICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlIC1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBwcml2YXRpemUodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2BfJHtrZXl9YF0gPSBzb3VyY2Vba2V5XVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IC1cbiAgICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkTmFtZSAtXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLVxuICAgKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIC1cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3RyYW5zZm9ybWVyXSAtXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHNldHRlcihvYmplY3QsIGZpZWxkTmFtZSwgdmFsdWUsIGRlZmF1bHRWYWx1ZSwgdHJhbnNmb3JtZXIpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IG9iamVjdFtmaWVsZE5hbWVdXG4gICAgbGV0IG5ld1ZhbHVlID0gdmFsdWUgIT0gbnVsbCA/IHZhbHVlIDogZGVmYXVsdFZhbHVlXG4gICAgaWYgKHR5cGVvZiB0cmFuc2Zvcm1lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgbmV3VmFsdWUgPSB0cmFuc2Zvcm1lcihuZXdWYWx1ZSlcbiAgICB9XG5cbiAgICBvYmplY3RbZmllbGROYW1lXSA9IG5ld1ZhbHVlXG5cbiAgICByZXR1cm4gbmV3VmFsdWUgIT09IG9sZFZhbHVlXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSAtXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2ROYW1lIC1cbiAgICogQHRocm93cyB7RXJyb3J9XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHRocm93VW5pbXBsZW1lbnRlZChjbGFzc05hbWUsIG1ldGhvZE5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHttZXRob2ROYW1lfVwiIG1ldGhvZCBtdXN0IGJlIGltcGxlbWVudGVkIG9uIHRoZSAke2NsYXNzTmFtZX0gY2xhc3NgKVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgLVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHRvVXBwZXJDYXNlKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcgIT0gbnVsbCAmJiBzdHJpbmcudG9VcHBlckNhc2UoKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbGl0aWVzXG4iXX0=
