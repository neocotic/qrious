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
      options.level = options.level.toUpperCase();
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
      var newValue = typeof transformer === 'function' ? transformer(value) : value;

      object[fieldName] = newValue != null ? newValue : defaultValue;

      return object[fieldName] !== oldValue;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJzcmNcXEFsaWdubWVudC5qcyIsInNyY1xcRXJyb3JDb3JyZWN0aW9uLmpzIiwic3JjXFxGcmFtZS5qcyIsInNyY1xcR2Fsb2lzLmpzIiwic3JjXFxRUmlvdXMuanMiLCJzcmNcXFZlcnNpb24uanMiLCJzcmNcXGluZGV4LmpzIiwic3JjXFxyZW5kZXJlclxcQ2FudmFzUmVuZGVyZXIuanMiLCJzcmNcXHJlbmRlcmVyXFxJbWFnZVJlbmRlcmVyLmpzIiwic3JjXFxyZW5kZXJlclxcUmVuZGVyZXIuanMiLCJzcmNcXHNlcnZpY2VcXFNlcnZpY2UuanMiLCJzcmNcXHNlcnZpY2VcXFNlcnZpY2VQcm92aWRlci5qcyIsInNyY1xcc2VydmljZVxcZWxlbWVudFxcQnJvd3NlckVsZW1lbnRTZXJ2aWNlLmpzIiwic3JjXFxzZXJ2aWNlXFxlbGVtZW50XFxFbGVtZW50U2VydmljZS5qcyIsInNyY1xcc2VydmljZVxcZWxlbWVudFxcRWxlbWVudFNlcnZpY2VQcm92aWRlci5qcyIsInNyY1xcc2VydmljZVxcZWxlbWVudFxcTm9kZUVsZW1lbnRTZXJ2aWNlLmpzIiwic3JjXFx1dGlsXFxVdGlsaXRpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTs7QUNGQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQSxVQUFNLFdBQVcsT0FBTyxXQUFQLEtBQXVCLFVBQXZCLEdBQW9DLFlBQVksS0FBWixDQUFwQyxHQUF5RCxLQUExRTs7QUFFQSxhQUFPLFNBQVAsSUFBb0IsWUFBWSxJQUFaLEdBQW1CLFFBQW5CLEdBQThCLFlBQWxEOztBQUVBLGFBQU8sT0FBTyxTQUFQLE1BQXNCLFFBQTdCO0FBQ0Q7Ozt1Q0FXeUIsUyxFQUFXLFUsRUFBWTtBQUMvQyxZQUFNLElBQUksS0FBSixPQUFjLFVBQWQsNENBQStELFNBQS9ELFlBQU47QUFDRDs7O2dDQVVrQixNLEVBQVE7QUFDekIsYUFBTyxVQUFVLElBQVYsSUFBa0IsT0FBTyxXQUFQLEVBQXpCO0FBQ0Q7Ozs7O0FBR0gsT0FBTyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi4zLjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXHJcbm1vZHVsZS5leHBvcnRzID0gKFxyXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXHJcbikuc3BsaXQoJywnKTsiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xyXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcclxufSk7IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXHJcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXHJcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxyXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcclxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXHJcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cclxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XHJcblxyXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXHJcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcclxuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xyXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXHJcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxyXG4gICAgLCBndCAgICAgPSAnPidcclxuICAgICwgaWZyYW1lRG9jdW1lbnQ7XHJcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxyXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XHJcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xyXG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xyXG4gIGlmcmFtZURvY3VtZW50LndyaXRlKCc8c2NyaXB0PmRvY3VtZW50LkY9T2JqZWN0PC9zY3JpcHQnICsgZ3QpO1xyXG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XHJcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XHJcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xyXG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xyXG4gIHZhciByZXN1bHQ7XHJcbiAgaWYoTyAhPT0gbnVsbCl7XHJcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XHJcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XHJcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcclxuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcclxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xyXG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XHJcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xyXG59OyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcclxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcclxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcclxuICBhbk9iamVjdChPKTtcclxuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxyXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxyXG4gICAgLCBpID0gMFxyXG4gICAgLCBQO1xyXG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcclxuICByZXR1cm4gTztcclxufTsiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcclxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXHJcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxyXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxyXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXHJcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XHJcblxyXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcclxuICBPID0gdG9JT2JqZWN0KE8pO1xyXG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcclxuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xyXG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XHJcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxyXG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XHJcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcclxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXHJcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xyXG5cclxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcclxuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XHJcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxyXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxyXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcclxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xyXG4gIE8gPSB0b09iamVjdChPKTtcclxuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcclxuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcclxuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xyXG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxyXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXHJcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxyXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcclxuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcclxuICAgICwgaSAgICAgID0gMFxyXG4gICAgLCByZXN1bHQgPSBbXVxyXG4gICAgLCBrZXk7XHJcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xyXG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcclxuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XHJcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxyXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXHJcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcclxuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xyXG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcclxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcclxufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXHJcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxyXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcclxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXHJcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XHJcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcclxuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcclxufTsiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTsiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTsiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcclxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXHJcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpfSk7IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcclxuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcclxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pOyIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTsiLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXR9KTsiLCIiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHZhciBEID0gZ09QRChpdCA9IHRvSU9iamVjdChpdCksIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIERFU0NSSVBUT1JTICYmIHNldHRlciAmJiBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsIi8qXG4gKiBRUmlvdXNcbiAqIENvcHlyaWdodCAoQykgMjAxNiBBbGFzZGFpciBNZXJjZXJcbiAqIENvcHlyaWdodCAoQykgMjAxMCBUb20gWmVydWNoYVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qIGVzbGludCBuby1tdWx0aS1zcGFjZXM6IDAgKi9cblxuLyoqXG4gKiBUT0RPOiBEb2N1bWVudFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgQWxpZ25tZW50IHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYWxpZ25tZW50IHBhdHRlcm4gYmxvY2suXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcltdfSBUaGUgYWxpZ25tZW50IHBhdHRlcm4gYmxvY2suXG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGdldCBCTE9DSygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgMCwgIDExLCAxNSwgMTksIDIzLCAyNywgMzEsXG4gICAgICAxNiwgMTgsIDIwLCAyMiwgMjQsIDI2LCAyOCwgMjAsIDIyLCAyNCwgMjQsIDI2LCAyOCwgMjgsIDIyLCAyNCwgMjQsXG4gICAgICAyNiwgMjYsIDI4LCAyOCwgMjQsIDI0LCAyNiwgMjYsIDI2LCAyOCwgMjgsIDI0LCAyNiwgMjYsIDI2LCAyOCwgMjhcbiAgICBdXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBbGlnbm1lbnRcbiIsIi8qXG4gKiBRUmlvdXNcbiAqIENvcHlyaWdodCAoQykgMjAxNiBBbGFzZGFpciBNZXJjZXJcbiAqIENvcHlyaWdodCAoQykgMjAxMCBUb20gWmVydWNoYVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qIGVzbGludCBuby1tdWx0aS1zcGFjZXM6IDAgKi9cblxuLyoqXG4gKiBUT0RPOiBEb2N1bWVudFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgRXJyb3JDb3JyZWN0aW9uIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXJyb3IgY29ycmVjdGlvbiBibG9ja3MuXG4gICAqXG4gICAqIFRoZXJlIGFyZSBmb3VyIGVsZW1lbnRzIHBlciB2ZXJzaW9uLiBUaGUgZmlyc3QgdHdvIGluZGljYXRlIHRoZSBudW1iZXIgb2YgYmxvY2tzLCB0aGVuIHRoZSBkYXRhIHdpZHRoLCBhbmQgZmluYWxseVxuICAgKiB0aGUgRUNDIHdpZHRoLlxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0gVGhlIEVDQyBibG9ja3MuXG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGdldCBCTE9DS1MoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIDEsICAwLCAgMTksICA3LCAgICAgMSwgIDAsICAxNiwgIDEwLCAgICAxLCAgMCwgIDEzLCAgMTMsICAgIDEsICAwLCAgOSwgICAxNyxcbiAgICAgIDEsICAwLCAgMzQsICAxMCwgICAgMSwgIDAsICAyOCwgIDE2LCAgICAxLCAgMCwgIDIyLCAgMjIsICAgIDEsICAwLCAgMTYsICAyOCxcbiAgICAgIDEsICAwLCAgNTUsICAxNSwgICAgMSwgIDAsICA0NCwgIDI2LCAgICAyLCAgMCwgIDE3LCAgMTgsICAgIDIsICAwLCAgMTMsICAyMixcbiAgICAgIDEsICAwLCAgODAsICAyMCwgICAgMiwgIDAsICAzMiwgIDE4LCAgICAyLCAgMCwgIDI0LCAgMjYsICAgIDQsICAwLCAgOSwgICAxNixcbiAgICAgIDEsICAwLCAgMTA4LCAyNiwgICAgMiwgIDAsICA0MywgIDI0LCAgICAyLCAgMiwgIDE1LCAgMTgsICAgIDIsICAyLCAgMTEsICAyMixcbiAgICAgIDIsICAwLCAgNjgsICAxOCwgICAgNCwgIDAsICAyNywgIDE2LCAgICA0LCAgMCwgIDE5LCAgMjQsICAgIDQsICAwLCAgMTUsICAyOCxcbiAgICAgIDIsICAwLCAgNzgsICAyMCwgICAgNCwgIDAsICAzMSwgIDE4LCAgICAyLCAgNCwgIDE0LCAgMTgsICAgIDQsICAxLCAgMTMsICAyNixcbiAgICAgIDIsICAwLCAgOTcsICAyNCwgICAgMiwgIDIsICAzOCwgIDIyLCAgICA0LCAgMiwgIDE4LCAgMjIsICAgIDQsICAyLCAgMTQsICAyNixcbiAgICAgIDIsICAwLCAgMTE2LCAzMCwgICAgMywgIDIsICAzNiwgIDIyLCAgICA0LCAgNCwgIDE2LCAgMjAsICAgIDQsICA0LCAgMTIsICAyNCxcbiAgICAgIDIsICAyLCAgNjgsICAxOCwgICAgNCwgIDEsICA0MywgIDI2LCAgICA2LCAgMiwgIDE5LCAgMjQsICAgIDYsICAyLCAgMTUsICAyOCxcbiAgICAgIDQsICAwLCAgODEsICAyMCwgICAgMSwgIDQsICA1MCwgIDMwLCAgICA0LCAgNCwgIDIyLCAgMjgsICAgIDMsICA4LCAgMTIsICAyNCxcbiAgICAgIDIsICAyLCAgOTIsICAyNCwgICAgNiwgIDIsICAzNiwgIDIyLCAgICA0LCAgNiwgIDIwLCAgMjYsICAgIDcsICA0LCAgMTQsICAyOCxcbiAgICAgIDQsICAwLCAgMTA3LCAyNiwgICAgOCwgIDEsICAzNywgIDIyLCAgICA4LCAgNCwgIDIwLCAgMjQsICAgIDEyLCA0LCAgMTEsICAyMixcbiAgICAgIDMsICAxLCAgMTE1LCAzMCwgICAgNCwgIDUsICA0MCwgIDI0LCAgICAxMSwgNSwgIDE2LCAgMjAsICAgIDExLCA1LCAgMTIsICAyNCxcbiAgICAgIDUsICAxLCAgODcsICAyMiwgICAgNSwgIDUsICA0MSwgIDI0LCAgICA1LCAgNywgIDI0LCAgMzAsICAgIDExLCA3LCAgMTIsICAyNCxcbiAgICAgIDUsICAxLCAgOTgsICAyNCwgICAgNywgIDMsICA0NSwgIDI4LCAgICAxNSwgMiwgIDE5LCAgMjQsICAgIDMsICAxMywgMTUsICAzMCxcbiAgICAgIDEsICA1LCAgMTA3LCAyOCwgICAgMTAsIDEsICA0NiwgIDI4LCAgICAxLCAgMTUsIDIyLCAgMjgsICAgIDIsICAxNywgMTQsICAyOCxcbiAgICAgIDUsICAxLCAgMTIwLCAzMCwgICAgOSwgIDQsICA0MywgIDI2LCAgICAxNywgMSwgIDIyLCAgMjgsICAgIDIsICAxOSwgMTQsICAyOCxcbiAgICAgIDMsICA0LCAgMTEzLCAyOCwgICAgMywgIDExLCA0NCwgIDI2LCAgICAxNywgNCwgIDIxLCAgMjYsICAgIDksICAxNiwgMTMsICAyNixcbiAgICAgIDMsICA1LCAgMTA3LCAyOCwgICAgMywgIDEzLCA0MSwgIDI2LCAgICAxNSwgNSwgIDI0LCAgMzAsICAgIDE1LCAxMCwgMTUsICAyOCxcbiAgICAgIDQsICA0LCAgMTE2LCAyOCwgICAgMTcsIDAsICA0MiwgIDI2LCAgICAxNywgNiwgIDIyLCAgMjgsICAgIDE5LCA2LCAgMTYsICAzMCxcbiAgICAgIDIsICA3LCAgMTExLCAyOCwgICAgMTcsIDAsICA0NiwgIDI4LCAgICA3LCAgMTYsIDI0LCAgMzAsICAgIDM0LCAwLCAgMTMsICAyNCxcbiAgICAgIDQsICA1LCAgMTIxLCAzMCwgICAgNCwgIDE0LCA0NywgIDI4LCAgICAxMSwgMTQsIDI0LCAgMzAsICAgIDE2LCAxNCwgMTUsICAzMCxcbiAgICAgIDYsICA0LCAgMTE3LCAzMCwgICAgNiwgIDE0LCA0NSwgIDI4LCAgICAxMSwgMTYsIDI0LCAgMzAsICAgIDMwLCAyLCAgMTYsICAzMCxcbiAgICAgIDgsICA0LCAgMTA2LCAyNiwgICAgOCwgIDEzLCA0NywgIDI4LCAgICA3LCAgMjIsIDI0LCAgMzAsICAgIDIyLCAxMywgMTUsICAzMCxcbiAgICAgIDEwLCAyLCAgMTE0LCAyOCwgICAgMTksIDQsICA0NiwgIDI4LCAgICAyOCwgNiwgIDIyLCAgMjgsICAgIDMzLCA0LCAgMTYsICAzMCxcbiAgICAgIDgsICA0LCAgMTIyLCAzMCwgICAgMjIsIDMsICA0NSwgIDI4LCAgICA4LCAgMjYsIDIzLCAgMzAsICAgIDEyLCAyOCwgMTUsICAzMCxcbiAgICAgIDMsICAxMCwgMTE3LCAzMCwgICAgMywgIDIzLCA0NSwgIDI4LCAgICA0LCAgMzEsIDI0LCAgMzAsICAgIDExLCAzMSwgMTUsICAzMCxcbiAgICAgIDcsICA3LCAgMTE2LCAzMCwgICAgMjEsIDcsICA0NSwgIDI4LCAgICAxLCAgMzcsIDIzLCAgMzAsICAgIDE5LCAyNiwgMTUsICAzMCxcbiAgICAgIDUsICAxMCwgMTE1LCAzMCwgICAgMTksIDEwLCA0NywgIDI4LCAgICAxNSwgMjUsIDI0LCAgMzAsICAgIDIzLCAyNSwgMTUsICAzMCxcbiAgICAgIDEzLCAzLCAgMTE1LCAzMCwgICAgMiwgIDI5LCA0NiwgIDI4LCAgICA0MiwgMSwgIDI0LCAgMzAsICAgIDIzLCAyOCwgMTUsICAzMCxcbiAgICAgIDE3LCAwLCAgMTE1LCAzMCwgICAgMTAsIDIzLCA0NiwgIDI4LCAgICAxMCwgMzUsIDI0LCAgMzAsICAgIDE5LCAzNSwgMTUsICAzMCxcbiAgICAgIDE3LCAxLCAgMTE1LCAzMCwgICAgMTQsIDIxLCA0NiwgIDI4LCAgICAyOSwgMTksIDI0LCAgMzAsICAgIDExLCA0NiwgMTUsICAzMCxcbiAgICAgIDEzLCA2LCAgMTE1LCAzMCwgICAgMTQsIDIzLCA0NiwgIDI4LCAgICA0NCwgNywgIDI0LCAgMzAsICAgIDU5LCAxLCAgMTYsICAzMCxcbiAgICAgIDEyLCA3LCAgMTIxLCAzMCwgICAgMTIsIDI2LCA0NywgIDI4LCAgICAzOSwgMTQsIDI0LCAgMzAsICAgIDIyLCA0MSwgMTUsICAzMCxcbiAgICAgIDYsICAxNCwgMTIxLCAzMCwgICAgNiwgIDM0LCA0NywgIDI4LCAgICA0NiwgMTAsIDI0LCAgMzAsICAgIDIsICA2NCwgMTUsICAzMCxcbiAgICAgIDE3LCA0LCAgMTIyLCAzMCwgICAgMjksIDE0LCA0NiwgIDI4LCAgICA0OSwgMTAsIDI0LCAgMzAsICAgIDI0LCA0NiwgMTUsICAzMCxcbiAgICAgIDQsICAxOCwgMTIyLCAzMCwgICAgMTMsIDMyLCA0NiwgIDI4LCAgICA0OCwgMTQsIDI0LCAgMzAsICAgIDQyLCAzMiwgMTUsICAzMCxcbiAgICAgIDIwLCA0LCAgMTE3LCAzMCwgICAgNDAsIDcsICA0NywgIDI4LCAgICA0MywgMjIsIDI0LCAgMzAsICAgIDEwLCA2NywgMTUsICAzMCxcbiAgICAgIDE5LCA2LCAgMTE4LCAzMCwgICAgMTgsIDMxLCA0NywgIDI4LCAgICAzNCwgMzQsIDI0LCAgMzAsICAgIDIwLCA2MSwgMTUsICAzMFxuICAgIF1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBmaW5hbCBmb3JtYXQgYml0cyB3aXRoIG1hc2sgKGxldmVsIDw8IDMgfCBtYXNrKS5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyW119IFRoZSBmaW5hbCBmb3JtYXQgYml0cy5cbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgZ2V0IEZJTkFMX0ZPUk1BVCgpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gTFxuICAgICAgMHg3N2M0LCAweDcyZjMsIDB4N2RhYSwgMHg3ODlkLCAweDY2MmYsIDB4NjMxOCwgMHg2YzQxLCAweDY5NzYsXG4gICAgICAvLyBNXG4gICAgICAweDU0MTIsIDB4NTEyNSwgMHg1ZTdjLCAweDViNGIsIDB4NDVmOSwgMHg0MGNlLCAweDRmOTcsIDB4NGFhMCxcbiAgICAgIC8vIFFcbiAgICAgIDB4MzU1ZiwgMHgzMDY4LCAweDNmMzEsIDB4M2EwNiwgMHgyNGI0LCAweDIxODMsIDB4MmVkYSwgMHgyYmVkLFxuICAgICAgLy8gSFxuICAgICAgMHgxNjg5LCAweDEzYmUsIDB4MWNlNywgMHgxOWQwLCAweDA3NjIsIDB4MDI1NSwgMHgwZDBjLCAweDA4M2JcbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG1hcCBvZiBodW1hbi1yZWFkYWJsZSBFQ0MgbGV2ZWxzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3Q8U3RyaW5nLCBOdW1iZXI+fSBBIEVDQyBsZXZlbCBtYXBwaW5nLlxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXQgTEVWRUxTKCkge1xuICAgIHJldHVybiB7XG4gICAgICBMOiAxLFxuICAgICAgTTogMixcbiAgICAgIFE6IDMsXG4gICAgICBIOiA0XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JDb3JyZWN0aW9uXG4iLCIvKlxuICogUVJpb3VzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQWxhc2RhaXIgTWVyY2VyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAgVG9tIFplcnVjaGFcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5jb25zdCBBbGlnbm1lbnQgPSByZXF1aXJlKCcuL0FsaWdubWVudCcpXG5jb25zdCBFcnJvckNvcnJlY3Rpb24gPSByZXF1aXJlKCcuL0Vycm9yQ29ycmVjdGlvbicpXG5jb25zdCBHYWxvaXMgPSByZXF1aXJlKCcuL0dhbG9pcycpXG5jb25zdCBWZXJzaW9uID0gcmVxdWlyZSgnLi9WZXJzaW9uJylcblxuLyoqXG4gKiBUT0RPOiBEb2N1bWVudFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgRnJhbWUge1xuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIC1cbiAgICogQHJldHVybiB7TnVtYmVyW119XG4gICAqIEBwcml2YXRlXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBfY3JlYXRlQXJyYXkobGVuZ3RoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYXJyYXlbaV0gPSAwXG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggLVxuICAgKiBAcGFyYW0ge051bWJlcn0geSAtXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIF9nZXRNYXNrQml0KHgsIHkpIHtcbiAgICBsZXQgYml0XG5cbiAgICBpZiAoeCA+IHkpIHtcbiAgICAgIGJpdCA9IHhcbiAgICAgIHggPSB5XG4gICAgICB5ID0gYml0XG4gICAgfVxuXG4gICAgYml0ID0geVxuICAgIGJpdCArPSB5ICogeVxuICAgIGJpdCA+Pj0gMVxuICAgIGJpdCArPSB4XG5cbiAgICByZXR1cm4gYml0XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogUmV0dXJucyB0aGUgZXhwb25lbnRpYXRpb24gbW9kIE4uXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IC1cbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgX21vZE4oeCkge1xuICAgIHdoaWxlICh4ID49IDI1NSkge1xuICAgICAgeCAtPSAyNTVcbiAgICAgIHggPSAoeCA+PiA4KSArICh4ICYgMjU1KVxuICAgIH1cblxuICAgIHJldHVybiB4XG4gIH1cblxuICAvLyAqQmFkbmVzcyogY29lZmZpY2llbnRzLlxuICBzdGF0aWMgZ2V0IE4xKCkge1xuICAgIHJldHVybiAzXG4gIH1cbiAgc3RhdGljIGdldCBOMigpIHtcbiAgICByZXR1cm4gM1xuICB9XG4gIHN0YXRpYyBnZXQgTjMoKSB7XG4gICAgcmV0dXJuIDQwXG4gIH1cbiAgc3RhdGljIGdldCBONCgpIHtcbiAgICByZXR1cm4gMTBcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0ZyYW1lfk9wdGlvbnN9IG9wdGlvbnMgLVxuICAgKiBAcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJ1biBsZW5ndGhzIGZvciBiYWRuZXNzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7TnVtYmVyW119XG4gICAgICovXG4gICAgdGhpcy5fYmFkbmVzcyA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmUgdGhlIEVDQyBsZXZlbCB0byBiZSBhcHBsaWVkLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2xldmVsID0gRXJyb3JDb3JyZWN0aW9uLkxFVkVMU1tvcHRpb25zLmxldmVsXVxuXG4gICAgLyoqXG4gICAgICogVGhlIGdlbmVyYXRvciBwb2x5bm9taWFsLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7TnVtYmVyW119XG4gICAgICovXG4gICAgdGhpcy5fcG9seW5vbWlhbCA9IFtdXG5cbiAgICAvKipcbiAgICAgKiBUT0RPOiBEb2N1bWVudFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZhbHVlID0gb3B0aW9ucy52YWx1ZVxuXG4gICAgLyoqXG4gICAgICogVE9ETzogRG9jdW1lbnRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl92YWx1ZUxlbmd0aCA9IHRoaXMuX3ZhbHVlLmxlbmd0aFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gZm9yIHRoZSBkYXRhLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSAwXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSBpbnB1dCBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gdGhpcy5fdmFsdWUuc2xpY2UoMClcblxuICAgIGxldCBkYXRhQmxvY2tcbiAgICBsZXQgZWNjQmxvY2tcbiAgICBsZXQgbmVjY0Jsb2NrMVxuICAgIGxldCBuZWNjQmxvY2syXG5cbiAgICB3aGlsZSAodGhpcy5fdmVyc2lvbiA8IDQwKSB7XG4gICAgICB0aGlzLl92ZXJzaW9uKytcblxuICAgICAgbGV0IGluZGV4ID0gKHRoaXMuX2xldmVsIC0gMSkgKiA0ICsgKHRoaXMuX3ZlcnNpb24gLSAxKSAqIDE2XG5cbiAgICAgIG5lY2NCbG9jazEgPSBFcnJvckNvcnJlY3Rpb24uQkxPQ0tTW2luZGV4KytdXG4gICAgICBuZWNjQmxvY2syID0gRXJyb3JDb3JyZWN0aW9uLkJMT0NLU1tpbmRleCsrXVxuICAgICAgZGF0YUJsb2NrID0gRXJyb3JDb3JyZWN0aW9uLkJMT0NLU1tpbmRleCsrXVxuICAgICAgZWNjQmxvY2sgPSBFcnJvckNvcnJlY3Rpb24uQkxPQ0tTW2luZGV4XVxuXG4gICAgICBpbmRleCA9IGRhdGFCbG9jayAqIChuZWNjQmxvY2sxICsgbmVjY0Jsb2NrMikgKyBuZWNjQmxvY2syIC0gMyArICh0aGlzLl92ZXJzaW9uIDw9IDkpXG5cbiAgICAgIGlmICh0aGlzLl92YWx1ZUxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIGJsb2NrLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2RhdGFCbG9jayA9IGRhdGFCbG9ja1xuXG4gICAgdGhpcy5fZWNjQmxvY2sgPSBlY2NCbG9ja1xuICAgIHRoaXMuX25lY2NCbG9jazEgPSBuZWNjQmxvY2sxXG4gICAgdGhpcy5fbmVjY0Jsb2NrMiA9IG5lY2NCbG9jazJcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHdpZHRoIGlzIGJhc2VkIG9uIHZlcnNpb24uXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICAvLyBGSVhNRTogRW5zdXJlIHRoYXQgaXQgZml0cyBpbnN0ZWFkIG9mIGJlaW5nIHRydW5jYXRlZC5cbiAgICB0aGlzLndpZHRoID0gMTcgKyA0ICogdGhpcy5fdmVyc2lvblxuXG4gICAgLyoqXG4gICAgICogVGhlIGltYWdlIGJ1ZmZlci5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAdHlwZSB7TnVtYmVyW119XG4gICAgICovXG4gICAgdGhpcy5idWZmZXIgPSBGcmFtZS5fY3JlYXRlQXJyYXkodGhpcy53aWR0aCAqIHRoaXMud2lkdGgpXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXJyb3IgY29ycmVjdGlvbiBidWZmZXIuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtOdW1iZXJbXX1cbiAgICAgKi9cbiAgICB0aGlzLl9lY2MgPSBGcmFtZS5fY3JlYXRlQXJyYXkodGhpcy5fZGF0YUJsb2NrICsgKHRoaXMuX2RhdGFCbG9jayArIHRoaXMuX2VjY0Jsb2NrKSAqICh0aGlzLl9uZWNjQmxvY2sxICsgdGhpcy5fbmVjY0Jsb2NrMikgKyB0aGlzLl9uZWNjQmxvY2syKVxuXG4gICAgLyoqXG4gICAgICogVGhlIGZpeGVkIHBhcnQgb2YgdGhlIGltYWdlLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7TnVtYmVyW119XG4gICAgICovXG4gICAgdGhpcy5fbWFzayA9IEZyYW1lLl9jcmVhdGVBcnJheSgodGhpcy53aWR0aCAqICh0aGlzLndpZHRoICsgMSkgKyAxKSAvIDIpXG5cbiAgICB0aGlzLl9pbnNlcnRGaW5kZXJzKClcbiAgICB0aGlzLl9pbnNlcnRBbGlnbm1lbnRzKClcblxuICAgIC8vIEluc2VydCBzaW5nbGUgZm9yZWdyb3VuZCBjZWxsLlxuICAgIHRoaXMuYnVmZmVyWzggKyB0aGlzLndpZHRoICogKHRoaXMud2lkdGggLSA4KV0gPSAxXG5cbiAgICB0aGlzLl9pbnNlcnRUaW1pbmdHYXAoKVxuICAgIHRoaXMuX3JldmVyc2VNYXNrKClcbiAgICB0aGlzLl9pbnNlcnRUaW1pbmdSb3dBbmRDb2x1bW4oKVxuICAgIHRoaXMuX2luc2VydFZlcnNpb24oKVxuICAgIHRoaXMuX3N5bmNNYXNrKClcbiAgICB0aGlzLl9jb252ZXJ0Qml0U3RyZWFtKHRoaXMuX3N0cmluZ0J1ZmZlci5sZW5ndGgpXG4gICAgdGhpcy5fY2FsY3VsYXRlUG9seW5vbWlhbCgpXG4gICAgdGhpcy5fYXBwZW5kRWNjVG9EYXRhKClcbiAgICB0aGlzLl9pbnRlcmxlYXZlQmxvY2tzKClcbiAgICB0aGlzLl9wYWNrKClcbiAgICB0aGlzLl9maW5pc2goKVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEVudGVycyBhbGlnbm1lbnQgcGF0dGVybi4gRm9yZWdyb3VuZCBjb2xvciB0byBmcmFtZSwgYmFja2dyb3VuZCB0byBtYXNrLiBGcmFtZSB3aWxsIGJlIG1lcmdlZCB3aXRoIG1hc2sgbGF0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IC1cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgLVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2FkZEFsaWdubWVudCh4LCB5KSB7XG4gICAgdGhpcy5idWZmZXJbeCArIHRoaXMud2lkdGggKiB5XSA9IDFcblxuICAgIGZvciAobGV0IGkgPSAtMjsgaSA8IDI7IGkrKykge1xuICAgICAgdGhpcy5idWZmZXJbeCArIGkgKyB0aGlzLndpZHRoICogKHkgLSAyKV0gPSAxXG4gICAgICB0aGlzLmJ1ZmZlclt4IC0gMiArIHRoaXMud2lkdGggKiAoeSArIGkgKyAxKV0gPSAxXG4gICAgICB0aGlzLmJ1ZmZlclt4ICsgMiArIHRoaXMud2lkdGggKiAoeSArIGkpXSA9IDFcbiAgICAgIHRoaXMuYnVmZmVyW3ggKyBpICsgMSArIHRoaXMud2lkdGggKiAoeSArIDIpXSA9IDFcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgdGhpcy5fc2V0TWFzayh4IC0gMSwgeSArIGkpXG4gICAgICB0aGlzLl9zZXRNYXNrKHggKyAxLCB5IC0gaSlcbiAgICAgIHRoaXMuX3NldE1hc2soeCAtIGksIHkgLSAxKVxuICAgICAgdGhpcy5fc2V0TWFzayh4ICsgaSwgeSArIDEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIENhbGN1bGF0ZXMgYW5kIGFwcGVuZHMgPGNvZGU+ZWNjPC9jb2RlPiBkYXRhIHRvIHRoZSA8Y29kZT5kYXRhPC9jb2RlPiBibG9jay4gSWYgYmxvY2sgaXMgaW4gdGhlIHN0cmluZyBidWZmZXIgdGhlXG4gICAqIGluZGljZXMgdG8gYnVmZmVycyBhcmUgdXNlZC5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEgLVxuICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YUxlbmd0aCAtXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBlY2MgLVxuICAgKiBAcGFyYW0ge051bWJlcn0gZWNjTGVuZ3RoIC1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBlbmREYXRhKGRhdGEsIGRhdGFMZW5ndGgsIGVjYywgZWNjTGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlY2NMZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyW2VjYyArIGldID0gMFxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBiaXQgPSBHYWxvaXMuTE9HW3RoaXMuX3N0cmluZ0J1ZmZlcltkYXRhICsgaV0gXiB0aGlzLl9zdHJpbmdCdWZmZXJbZWNjXV1cblxuICAgICAgaWYgKGJpdCAhPT0gMjU1KSB7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgZWNjTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbZWNjICsgaiAtIDFdID0gdGhpcy5fc3RyaW5nQnVmZmVyW2VjYyArIGpdIF4gR2Fsb2lzLkVYUE9ORU5UW0ZyYW1lLl9tb2ROKGJpdCArIHRoaXMuX3BvbHlub21pYWxbZWNjTGVuZ3RoIC0gal0pXVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBqID0gZWNjOyBqIDwgZWNjICsgZWNjTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbal0gPSB0aGlzLl9zdHJpbmdCdWZmZXJbaiArIDFdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyW2VjYyArIGVjY0xlbmd0aCAtIDFdID0gYml0ID09PSAyNTUgPyAwIDogR2Fsb2lzLkVYUE9ORU5UW0ZyYW1lLl9tb2ROKGJpdCArIHRoaXMuX3BvbHlub21pYWxbMF0pXVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoZSBFQ0MgYnVmZmVyIHRvIHRoZSBkYXRhIGJ1ZmZlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBlbmRFY2NUb0RhdGEoKSB7XG4gICAgbGV0IGRhdGEgPSAwXG4gICAgbGV0IGVjYyA9IHRoaXMuX2NhbGN1bGF0ZU1heExlbmd0aCgpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX25lY2NCbG9jazE7IGkrKykge1xuICAgICAgdGhpcy5fYXBwZW5kRGF0YShkYXRhLCB0aGlzLl9kYXRhQmxvY2ssIGVjYywgdGhpcy5fZWNjQmxvY2spXG5cbiAgICAgIGRhdGEgKz0gdGhpcy5fZGF0YUJsb2NrXG4gICAgICBlY2MgKz0gdGhpcy5fZWNjQmxvY2tcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX25lY2NCbG9jazI7IGkrKykge1xuICAgICAgdGhpcy5fYXBwZW5kRGF0YShkYXRhLCB0aGlzLl9kYXRhQmxvY2sgKyAxLCBlY2MsIHRoaXMuX2VjY0Jsb2NrKVxuXG4gICAgICBkYXRhICs9IHRoaXMuX2RhdGFCbG9jayArIDFcbiAgICAgIGVjYyArPSB0aGlzLl9lY2NCbG9ja1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBBcHBsaWVzIHRoZSBzZWxlY3RlZCBtYXNrIG91dCBvZiB0aGUgOCBvcHRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gbWFzayAtXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlNYXNrKG1hc2spIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGhcblxuICAgIHN3aXRjaCAobWFzaykge1xuICAgIGNhc2UgMDpcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2lkdGg7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICBpZiAoISh4ICsgeSAmIDEpICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbeCArIHkgKiB3aWR0aF0gXj0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIGNhc2UgMTpcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2lkdGg7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICBpZiAoISh5ICYgMSkgJiYgIXRoaXMuX2lzTWFza2VkKHgsIHkpKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlclt4ICsgeSAqIHdpZHRoXSBePSAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAyOlxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB3aWR0aDsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHIzeCA9IDAsIHggPSAwOyB4IDwgd2lkdGg7IHgrKywgcjN4KyspIHtcbiAgICAgICAgICBpZiAocjN4ID09PSAzKSB7XG4gICAgICAgICAgICByM3ggPSAwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFyM3ggJiYgIXRoaXMuX2lzTWFza2VkKHgsIHkpKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlclt4ICsgeSAqIHdpZHRoXSBePSAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAzOlxuICAgICAgZm9yIChsZXQgcjN5ID0gMCwgeSA9IDA7IHkgPCB3aWR0aDsgeSsrLCByM3krKykge1xuICAgICAgICBpZiAocjN5ID09PSAzKSB7XG4gICAgICAgICAgcjN5ID0gMFxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgcjN4ID0gcjN5LCB4ID0gMDsgeCA8IHdpZHRoOyB4KyssIHIzeCsrKSB7XG4gICAgICAgICAgaWYgKHIzeCA9PT0gMykge1xuICAgICAgICAgICAgcjN4ID0gMFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghcjN4ICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbeCArIHkgKiB3aWR0aF0gXj0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIGNhc2UgNDpcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2lkdGg7IHkrKykge1xuICAgICAgICBmb3IgKGxldCByM3ggPSAwLCByM3kgPSB5ID4+IDEgJiAxLCB4ID0gMDsgeCA8IHdpZHRoOyB4KyssIHIzeCsrKSB7XG4gICAgICAgICAgaWYgKHIzeCA9PT0gMykge1xuICAgICAgICAgICAgcjN4ID0gMFxuICAgICAgICAgICAgcjN5ID0gIXIzeVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghcjN5ICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbeCArIHkgKiB3aWR0aF0gXj0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIGNhc2UgNTpcbiAgICAgIGZvciAobGV0IHIzeSA9IDAsIHkgPSAwOyB5IDwgd2lkdGg7IHkrKywgcjN5KyspIHtcbiAgICAgICAgaWYgKHIzeSA9PT0gMykge1xuICAgICAgICAgIHIzeSA9IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHIzeCA9IDAsIHggPSAwOyB4IDwgd2lkdGg7IHgrKywgcjN4KyspIHtcbiAgICAgICAgICBpZiAocjN4ID09PSAzKSB7XG4gICAgICAgICAgICByM3ggPSAwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEoKHggJiB5ICYgMSkgKyAhKCFyM3ggfCAhcjN5KSkgJiYgIXRoaXMuX2lzTWFza2VkKHgsIHkpKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlclt4ICsgeSAqIHdpZHRoXSBePSAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG4gICAgY2FzZSA2OlxuICAgICAgZm9yIChsZXQgcjN5ID0gMCwgeSA9IDA7IHkgPCB3aWR0aDsgeSsrLCByM3krKykge1xuICAgICAgICBpZiAocjN5ID09PSAzKSB7XG4gICAgICAgICAgcjN5ID0gMFxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgcjN4ID0gMCwgeCA9IDA7IHggPCB3aWR0aDsgeCsrLCByM3grKykge1xuICAgICAgICAgIGlmIChyM3ggPT09IDMpIHtcbiAgICAgICAgICAgIHIzeCA9IDBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoISh4ICYgeSAmIDEgKyAocjN4ICYmIHIzeCA9PT0gcjN5KSAmIDEpICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbeCArIHkgKiB3aWR0aF0gXj0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIGNhc2UgNzpcbiAgICAgIGZvciAobGV0IHIzeSA9IDAsIHkgPSAwOyB5IDwgd2lkdGg7IHkrKywgcjN5KyspIHtcbiAgICAgICAgaWYgKHIzeSA9PT0gMykge1xuICAgICAgICAgIHIzeSA9IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHIzeCA9IDAsIHggPSAwOyB4IDwgd2lkdGg7IHgrKywgcjN4KyspIHtcbiAgICAgICAgICBpZiAocjN4ID09PSAzKSB7XG4gICAgICAgICAgICByM3ggPSAwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEoKHIzeCAmJiByM3ggPT09IHIzeSkgKyAoeCArIHkgJiAxKSAmIDEpICYmICF0aGlzLl9pc01hc2tlZCh4LCB5KSkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbeCArIHkgKiB3aWR0aF0gXj0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBtYXhpbXVtIHN0cmluZyBsZW5ndGguXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn0gVGhlIG1heGltdW0gc3RyaW5nIGxlbmd0aC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jYWxjdWxhdGVNYXhMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFCbG9jayAqICh0aGlzLl9uZWNjQmxvY2sxICsgdGhpcy5fbmVjY0Jsb2NrMikgKyB0aGlzLl9uZWNjQmxvY2syXG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgZ2VuZXJhdG9yIHBvbHlub21pYWwuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2FsY3VsYXRlUG9seW5vbWlhbCgpIHtcbiAgICB0aGlzLl9wb2x5bm9taWFsWzBdID0gMVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9lY2NCbG9jazsgaSsrKSB7XG4gICAgICB0aGlzLl9wb2x5bm9taWFsW2kgKyAxXSA9IDFcblxuICAgICAgZm9yIChsZXQgaiA9IGk7IGogPiAwOyBqLS0pIHtcbiAgICAgICAgdGhpcy5fcG9seW5vbWlhbFtqXSA9IHRoaXMuX3BvbHlub21pYWxbal0gPyB0aGlzLl9wb2x5bm9taWFsW2ogLSAxXSBeIEdhbG9pcy5FWFBPTkVOVFtGcmFtZS5fbW9kTihHYWxvaXMuTE9HW3RoaXMuX3BvbHlub21pYWxbal1dICsgaSldIDogdGhpcy5fcG9seW5vbWlhbFtqIC0gMV1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcG9seW5vbWlhbFswXSA9IEdhbG9pcy5FWFBPTkVOVFtGcmFtZS5fbW9kTihHYWxvaXMuTE9HW3RoaXMuX3BvbHlub21pYWxbMF1dICsgaSldXG4gICAgfVxuXG4gICAgLy8gVXNlIGxvZ3MgZm9yIGdlbmVyYXRvciBwb2x5bm9taWFsIHRvIHNhdmUgY2FsY3VsYXRpb24gc3RlcC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLl9lY2NCbG9jazsgaSsrKSB7XG4gICAgICB0aGlzLl9wb2x5bm9taWFsW2ldID0gR2Fsb2lzLkxPR1t0aGlzLl9wb2x5bm9taWFsW2ldXVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBDYWxjdWxhdGVzIGhvdyBiYWQgdGhlIG1hc2tlZCBpbWFnZSBpcyAoZS5nLiBibG9ja3MsIGltYmFsYW5jZSwgcnVucywgb3IgZmluZGVycykuXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jaGVja0JhZG5lc3MoKSB7XG4gICAgbGV0IGJhZCA9IDBcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGhcblxuICAgIC8vIEJsb2NrcyBvZiBzYW1lIGNvbG91ci5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHdpZHRoIC0gMTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoIC0gMTsgeCsrKSB7XG4gICAgICAgIC8vIEFsbCBmb3JlZ3JvdW5kIGNvbG91ci5cbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyW3ggKyB3aWR0aCAqIHldICYmXG4gICAgICAgICAgdGhpcy5idWZmZXJbeCArIDEgKyB3aWR0aCAqIHldICYmXG4gICAgICAgICAgdGhpcy5idWZmZXJbeCArIHdpZHRoICogKHkgKyAxKV0gJiZcbiAgICAgICAgICB0aGlzLmJ1ZmZlclt4ICsgMSArIHdpZHRoICogKHkgKyAxKV0gfHxcbiAgICAgICAgICAvLyBBbGwgYmFja2dyb3VuZCBjb2xvdXIuXG4gICAgICAgICAgISh0aGlzLmJ1ZmZlclt4ICsgd2lkdGggKiB5XSB8fFxuICAgICAgICAgIHRoaXMuYnVmZmVyW3ggKyAxICsgd2lkdGggKiB5XSB8fFxuICAgICAgICAgIHRoaXMuYnVmZmVyW3ggKyB3aWR0aCAqICh5ICsgMSldIHx8XG4gICAgICAgICAgdGhpcy5idWZmZXJbeCArIDEgKyB3aWR0aCAqICh5ICsgMSldKSkge1xuICAgICAgICAgIGJhZCArPSBGcmFtZS5OMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGJ3ID0gMFxuXG4gICAgLy8gWCBydW5zLlxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgd2lkdGg7IHkrKykge1xuICAgICAgbGV0IGggPSAwXG5cbiAgICAgIHRoaXMuX2JhZG5lc3NbMF0gPSAwXG5cbiAgICAgIGZvciAobGV0IGIgPSAwLCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgbGV0IGIxID0gdGhpcy5idWZmZXJbeCArIHdpZHRoICogeV1cblxuICAgICAgICBpZiAoYiA9PT0gYjEpIHtcbiAgICAgICAgICB0aGlzLl9iYWRuZXNzW2hdKytcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9iYWRuZXNzWysraF0gPSAxXG4gICAgICAgIH1cblxuICAgICAgICBiID0gYjFcbiAgICAgICAgYncgKz0gYiA/IDEgOiAtMVxuICAgICAgfVxuXG4gICAgICBiYWQgKz0gdGhpcy5fZ2V0QmFkbmVzcyhoKVxuICAgIH1cblxuICAgIGlmIChidyA8IDApIHtcbiAgICAgIGJ3ID0gLWJ3XG4gICAgfVxuXG4gICAgbGV0IGNvdW50ID0gMFxuICAgIGxldCBiaWcgPSBid1xuICAgIGJpZyArPSBiaWcgPDwgMlxuICAgIGJpZyA8PD0gMVxuXG4gICAgd2hpbGUgKGJpZyA+IHdpZHRoICogd2lkdGgpIHtcbiAgICAgIGJpZyAtPSB3aWR0aCAqIHdpZHRoXG4gICAgICBjb3VudCsrXG4gICAgfVxuXG4gICAgYmFkICs9IGNvdW50ICogRnJhbWUuTjRcblxuICAgIC8vIFkgcnVucy5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgIGxldCBoID0gMFxuXG4gICAgICB0aGlzLl9iYWRuZXNzWzBdID0gMFxuXG4gICAgICBmb3IgKGxldCBiID0gMCwgeSA9IDA7IHkgPCB3aWR0aDsgeSsrKSB7XG4gICAgICAgIGxldCBiMSA9IHRoaXMuYnVmZmVyW3ggKyB3aWR0aCAqIHldXG5cbiAgICAgICAgaWYgKGIgPT09IGIxKSB7XG4gICAgICAgICAgdGhpcy5fYmFkbmVzc1toXSsrXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fYmFkbmVzc1srK2hdID0gMVxuICAgICAgICB9XG5cbiAgICAgICAgYiA9IGIxXG4gICAgICB9XG5cbiAgICAgIGJhZCArPSB0aGlzLl9nZXRCYWRuZXNzKGgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGJhZFxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIENvbnZlcnRzIHRoZSBzdHJpbmcgYnVmZmVyIGludG8gYSBiaXQgc3RyZWFtLiA4LWJpdCBkYXRhIHRvIFFSLWNvZGVkIDgtYml0IGRhdGEgKG51bWVyaWMsIGFscGhhbnVtLCBvciBrYW5qaSBub3RcbiAgICogc3VwcG9ydGVkKS5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAtXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29udmVydEJpdFN0cmVhbShsZW5ndGgpIHtcbiAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBiaXQgc3RyZWFtLiA4LWJpdCBkYXRhIHRvIFFSLWNvZGVkIDgtYml0IGRhdGEgKG51bWVyaWMsIGFscGhhbnVtLCBvciBrYW5qaVxuICAgIC8vIG5vdCBzdXBwb3J0ZWQpLlxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fZWNjW2ldID0gdGhpcy5fc3RyaW5nQnVmZmVyLmNoYXJDb2RlQXQoaSlcbiAgICB9XG5cbiAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSB0aGlzLl9lY2Muc2xpY2UoMClcblxuICAgIGNvbnN0IG1heExlbmd0aCA9IHRoaXMuX2NhbGN1bGF0ZU1heExlbmd0aCgpXG5cbiAgICBpZiAobGVuZ3RoID49IG1heExlbmd0aCAtIDIpIHtcbiAgICAgIGxlbmd0aCA9IG1heExlbmd0aCAtIDJcblxuICAgICAgaWYgKHRoaXMuX3ZlcnNpb24gPiA5KSB7XG4gICAgICAgIGxlbmd0aC0tXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2hpZnQgYW5kIHJlLXBhY2sgdG8gaW5zZXJ0IGxlbmd0aCBwcmVmaXguXG4gICAgbGV0IGluZGV4ID0gbGVuZ3RoXG5cbiAgICBpZiAodGhpcy5fdmVyc2lvbiA+IDkpIHtcbiAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlcltpbmRleCArIDJdID0gMFxuICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyW2luZGV4ICsgM10gPSAwXG5cbiAgICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgIGNvbnN0IGJpdCA9IHRoaXMuX3N0cmluZ0J1ZmZlcltpbmRleF1cblxuICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbaW5kZXggKyAzXSB8PSAyNTUgJiBiaXQgPDwgNFxuICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbaW5kZXggKyAyXSA9IGJpdCA+PiA0XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlclsyXSB8PSAyNTUgJiBsZW5ndGggPDwgNFxuICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyWzFdID0gbGVuZ3RoID4+IDRcbiAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlclswXSA9IDB4NDAgfCBsZW5ndGggPj4gMTJcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyW2luZGV4ICsgMV0gPSAwXG4gICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbaW5kZXggKyAyXSA9IDBcblxuICAgICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgICAgY29uc3QgYml0ID0gdGhpcy5fc3RyaW5nQnVmZmVyW2luZGV4XVxuXG4gICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlcltpbmRleCArIDJdIHw9IDI1NSAmIGJpdCA8PCA0XG4gICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlcltpbmRleCArIDFdID0gYml0ID4+IDRcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyWzFdIHw9IDI1NSAmIGxlbmd0aCA8PCA0XG4gICAgICB0aGlzLl9zdHJpbmdCdWZmZXJbMF0gPSAweDQwIHwgbGVuZ3RoID4+IDRcbiAgICB9XG5cbiAgICAvLyBGaWxsIHRvIGVuZCB3aXRoIHBhZCBwYXR0ZXJuLlxuICAgIGluZGV4ID0gbGVuZ3RoICsgMyAtICh0aGlzLl92ZXJzaW9uIDwgMTApXG5cbiAgICB3aGlsZSAoaW5kZXggPCBtYXhMZW5ndGgpIHtcbiAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlcltpbmRleCsrXSA9IDB4ZWNcbiAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlcltpbmRleCsrXSA9IDB4MTFcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogVXNpbmcgdGhlIHRhYmxlIGZvciB0aGUgbGVuZ3RoIG9mIGVhY2ggcnVuLCBjYWxjdWxhdGUgdGhlIGFtb3VudCBvZiBiYWQgaW1hZ2UuIExvbmcgcnVucyBvciB0aG9zZSB0aGF0IGxvb2sgbGlrZVxuICAgKiBmaW5kZXJzIGFyZSBjYWxsZWQgdHdpY2U7IG9uY2UgZm9yIFggYW5kIFkuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggLVxuICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dldEJhZG5lc3MobGVuZ3RoKSB7XG4gICAgbGV0IGJhZFJ1bnMgPSAwXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX2JhZG5lc3NbaV0gPj0gNSkge1xuICAgICAgICBiYWRSdW5zICs9IEZyYW1lLk4xICsgdGhpcy5fYmFkbmVzc1tpXSAtIDVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGQkZGRkJGIGFzIGluIGZpbmRlci5cbiAgICBmb3IgKGxldCBpID0gMzsgaSA8IGxlbmd0aCAtIDE7IGkgKz0gMikge1xuICAgICAgaWYgKHRoaXMuX2JhZG5lc3NbaSAtIDJdID09PSB0aGlzLl9iYWRuZXNzW2kgKyAyXSAmJlxuICAgICAgICB0aGlzLl9iYWRuZXNzW2kgKyAyXSA9PT0gdGhpcy5fYmFkbmVzc1tpIC0gMV0gJiZcbiAgICAgICAgdGhpcy5fYmFkbmVzc1tpIC0gMV0gPT09IHRoaXMuX2JhZG5lc3NbaSArIDFdICYmXG4gICAgICAgIHRoaXMuX2JhZG5lc3NbaSAtIDFdICogMyA9PT0gdGhpcy5fYmFkbmVzc1tpXSAmJlxuICAgICAgICAvLyBCYWNrZ3JvdW5kIGFyb3VuZCB0aGUgZm9yZWdyb3VuZCBwYXR0ZXJuPyBOb3QgcGFydCBvZiB0aGUgc3BlY3MuXG4gICAgICAgICh0aGlzLl9iYWRuZXNzW2kgLSAzXSA9PT0gMCB8fCBpICsgMyA+IGxlbmd0aCB8fFxuICAgICAgICB0aGlzLl9iYWRuZXNzW2kgLSAzXSAqIDMgPj0gdGhpcy5fYmFkbmVzc1tpXSAqIDQgfHxcbiAgICAgICAgdGhpcy5fYmFkbmVzc1tpICsgM10gKiAzID49IHRoaXMuX2JhZG5lc3NbaV0gKiA0KSkge1xuICAgICAgICBiYWRSdW5zICs9IEZyYW1lLk4zXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhZFJ1bnNcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2ZpbmlzaCgpIHtcbiAgICAvLyBTYXZlIHByZS1tYXNrIGNvcHkgb2YgZnJhbWUuXG4gICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gdGhpcy5idWZmZXIuc2xpY2UoMClcblxuICAgIGxldCBiaXQgPSAwXG4gICAgbGV0IGlcbiAgICBsZXQgbWFzayA9IDMwMDAwXG5cbiAgICAvKlxuICAgICAqIFVzaW5nIGZvciBpbnN0ZWFkIG9mIHdoaWxlIHNpbmNlIGluIG9yaWdpbmFsIEFyZHVpbm8gY29kZSBpZiBhbiBlYXJseSBtYXNrIHdhcyBcImdvb2QgZW5vdWdoXCIgaXQgd291bGRuJ3QgdHJ5IGZvclxuICAgICAqIGEgYmV0dGVyIG9uZSBzaW5jZSB0aGV5IGdldCBtb3JlIGNvbXBsZXggYW5kIHRha2UgbG9uZ2VyLlxuICAgICAqL1xuICAgIGZvciAoaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgIC8vIFJldHVybnMgZm9yZWdyb3VuZC1iYWNrZ3JvdW5kIGltYmFsYW5jZS5cbiAgICAgIHRoaXMuX2FwcGx5TWFzayhpKVxuXG4gICAgICBjb25zdCBjdXJyZW50TWFzayA9IHRoaXMuX2NoZWNrQmFkbmVzcygpXG5cbiAgICAgIC8vIElzIGN1cnJlbnQgbWFzayBiZXR0ZXIgdGhhbiBwcmV2aW91cyBiZXN0P1xuICAgICAgaWYgKGN1cnJlbnRNYXNrIDwgbWFzaykge1xuICAgICAgICBtYXNrID0gY3VycmVudE1hc2tcbiAgICAgICAgYml0ID0gaVxuICAgICAgfVxuXG4gICAgICAvLyBEb24ndCBpbmNyZW1lbnQgXCJpXCIgdG8gYSB2b2lkIHJlZG9pbmcgbWFzay5cbiAgICAgIGlmIChiaXQgPT09IDcpIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgLy8gUmVzZXQgZm9yIG5leHQgcGFzcy5cbiAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5fc3RyaW5nQnVmZmVyLnNsaWNlKDApXG4gICAgfVxuXG4gICAgLy8gUmVkbyBiZXN0IG1hc2sgYXMgbm9uZSB3ZXJlIFwiZ29vZCBlbm91Z2hcIiAoaS5lLiBsYXN0IHdhc24ndCBiaXQpLlxuICAgIGlmIChiaXQgIT09IGkpIHtcbiAgICAgIHRoaXMuX2FwcGx5TWFzayhiaXQpXG4gICAgfVxuXG4gICAgLy8gQWRkIGluIGZpbmFsIG1hc2svRUNDIGxldmVsIGJ5dGVzLlxuICAgIG1hc2sgPSBFcnJvckNvcnJlY3Rpb24uRklOQUxfRk9STUFUW2JpdCArICh0aGlzLl9sZXZlbCAtIDEgPDwgMyldXG5cbiAgICAvLyBMb3cgYnl0ZS5cbiAgICBmb3IgKGkgPSAwOyBpIDwgODsgaSsrLCBtYXNrID4+PSAxKSB7XG4gICAgICBpZiAobWFzayAmIDEpIHtcbiAgICAgICAgdGhpcy5idWZmZXJbdGhpcy53aWR0aCAtIDEgLSBpICsgdGhpcy53aWR0aCAqIDhdID0gMVxuXG4gICAgICAgIGlmIChpIDwgNikge1xuICAgICAgICAgIHRoaXMuYnVmZmVyWzggKyB0aGlzLndpZHRoICogaV0gPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5idWZmZXJbOCArIHRoaXMud2lkdGggKiAoaSArIDEpXSA9IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhpZ2ggYnl0ZS5cbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrLCBtYXNrID4+PSAxKSB7XG4gICAgICBpZiAobWFzayAmIDEpIHtcbiAgICAgICAgdGhpcy5idWZmZXJbOCArIHRoaXMud2lkdGggKiAodGhpcy53aWR0aCAtIDcgKyBpKV0gPSAxXG5cbiAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICB0aGlzLmJ1ZmZlcls2IC0gaSArIHRoaXMud2lkdGggKiA4XSA9IDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJ1ZmZlcls3ICsgdGhpcy53aWR0aCAqIDhdID0gMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludGVybGVhdmVzIGJsb2Nrcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbnRlcmxlYXZlQmxvY2tzKCkge1xuICAgIGNvbnN0IG1heExlbmd0aCA9IHRoaXMuX2NhbGN1bGF0ZU1heExlbmd0aCgpXG4gICAgbGV0IGlcbiAgICBsZXQgayA9IDBcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9kYXRhQmxvY2s7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9uZWNjQmxvY2sxOyBqKyspIHtcbiAgICAgICAgdGhpcy5fZWNjW2srK10gPSB0aGlzLl9zdHJpbmdCdWZmZXJbaSArIGogKiB0aGlzLl9kYXRhQmxvY2tdXG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fbmVjY0Jsb2NrMjsgaisrKSB7XG4gICAgICAgIHRoaXMuX2VjY1trKytdID0gdGhpcy5fc3RyaW5nQnVmZmVyW3RoaXMuX25lY2NCbG9jazEgKiB0aGlzLl9kYXRhQmxvY2sgKyBpICsgaiAqICh0aGlzLl9kYXRhQmxvY2sgKyAxKV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX25lY2NCbG9jazI7IGorKykge1xuICAgICAgdGhpcy5fZWNjW2srK10gPSB0aGlzLl9zdHJpbmdCdWZmZXJbdGhpcy5fbmVjY0Jsb2NrMSAqIHRoaXMuX2RhdGFCbG9jayArIGkgKyBqICogKHRoaXMuX2RhdGFCbG9jayArIDEpXVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9lY2NCbG9jazsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX25lY2NCbG9jazEgKyB0aGlzLl9uZWNjQmxvY2syOyBqKyspIHtcbiAgICAgICAgdGhpcy5fZWNjW2srK10gPSB0aGlzLl9zdHJpbmdCdWZmZXJbbWF4TGVuZ3RoICsgaSArIGogKiB0aGlzLl9lY2NCbG9ja11cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSB0aGlzLl9lY2NcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBJbnNlcnRzIGFsaWdubWVudCBibG9ja3MuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5zZXJ0QWxpZ25tZW50cygpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGhcblxuICAgIGlmICh0aGlzLl92ZXJzaW9uID4gMSkge1xuICAgICAgY29uc3QgaSA9IEFsaWdubWVudC5CTE9DS1t0aGlzLl92ZXJzaW9uXVxuICAgICAgbGV0IHkgPSB3aWR0aCAtIDdcblxuICAgICAgZm9yICg7Oykge1xuICAgICAgICBsZXQgeCA9IHdpZHRoIC0gN1xuXG4gICAgICAgIHdoaWxlICh4ID4gaSAtIDMpIHtcbiAgICAgICAgICB0aGlzLl9hZGRBbGlnbm1lbnQoeCwgeSlcblxuICAgICAgICAgIGlmICh4IDwgaSkge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB4IC09IGlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh5IDw9IGkgKyA5KSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIHkgLT0gaVxuXG4gICAgICAgIHRoaXMuX2FkZEFsaWdubWVudCg2LCB5KVxuICAgICAgICB0aGlzLl9hZGRBbGlnbm1lbnQoeSwgNilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogSW5zZXJ0cyBmaW5kZXJzOiBmb3JlZ3JvdW5kIGNvbG91ciB0byBmcmFtZSBhbmQgYmFja2dyb3VuZCB0byBtYXNrLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luc2VydEZpbmRlcnMoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgbGV0IGogPSAwXG4gICAgICBsZXQgeSA9IDBcblxuICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgaiA9IHdpZHRoIC0gN1xuICAgICAgfVxuICAgICAgaWYgKGkgPT09IDIpIHtcbiAgICAgICAgeSA9IHdpZHRoIC0gN1xuICAgICAgfVxuXG4gICAgICB0aGlzLmJ1ZmZlclt5ICsgMyArIHdpZHRoICogKGogKyAzKV0gPSAxXG5cbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNjsgeCsrKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyW3kgKyB4ICsgd2lkdGggKiBqXSA9IDFcbiAgICAgICAgdGhpcy5idWZmZXJbeSArIHdpZHRoICogKGogKyB4ICsgMSldID0gMVxuICAgICAgICB0aGlzLmJ1ZmZlclt5ICsgNiArIHdpZHRoICogKGogKyB4KV0gPSAxXG4gICAgICAgIHRoaXMuYnVmZmVyW3kgKyB4ICsgMSArIHdpZHRoICogKGogKyA2KV0gPSAxXG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHggPSAxOyB4IDwgNTsgeCsrKSB7XG4gICAgICAgIHRoaXMuX3NldE1hc2soeSArIHgsIGogKyAxKVxuICAgICAgICB0aGlzLl9zZXRNYXNrKHkgKyAxLCBqICsgeCArIDEpXG4gICAgICAgIHRoaXMuX3NldE1hc2soeSArIDUsIGogKyB4KVxuICAgICAgICB0aGlzLl9zZXRNYXNrKHkgKyB4ICsgMSwgaiArIDUpXG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHggPSAyOyB4IDwgNDsgeCsrKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyW3kgKyB4ICsgd2lkdGggKiAoaiArIDIpXSA9IDFcbiAgICAgICAgdGhpcy5idWZmZXJbeSArIDIgKyB3aWR0aCAqIChqICsgeCArIDEpXSA9IDFcbiAgICAgICAgdGhpcy5idWZmZXJbeSArIDQgKyB3aWR0aCAqIChqICsgeCldID0gMVxuICAgICAgICB0aGlzLmJ1ZmZlclt5ICsgeCArIDEgKyB3aWR0aCAqIChqICsgNCldID0gMVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBJbnNlcnRzIHRpbWluZyBnYXAgaW50byBtYXNrLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luc2VydFRpbWluZ0dhcCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGhcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgNzsgeSsrKSB7XG4gICAgICB0aGlzLl9zZXRNYXNrKDcsIHkpXG4gICAgICB0aGlzLl9zZXRNYXNrKHdpZHRoIC0gOCwgeSlcbiAgICAgIHRoaXMuX3NldE1hc2soNywgeSArIHdpZHRoIC0gNylcbiAgICB9XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDg7IHgrKykge1xuICAgICAgdGhpcy5fc2V0TWFzayh4LCA3KVxuICAgICAgdGhpcy5fc2V0TWFzayh4ICsgd2lkdGggLSA4LCA3KVxuICAgICAgdGhpcy5fc2V0TWFzayh4LCB3aWR0aCAtIDgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEluc2VydHMgdGltaW5nIHJvdyBhbmQgY29sdW1uLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luc2VydFRpbWluZ1Jvd0FuZENvbHVtbigpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGhcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGggLSAxNDsgeCsrKSB7XG4gICAgICBpZiAoeCAmIDEpIHtcbiAgICAgICAgdGhpcy5fc2V0TWFzayg4ICsgeCwgNilcbiAgICAgICAgdGhpcy5fc2V0TWFzayg2LCA4ICsgeClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnVmZmVyWzggKyB4ICsgd2lkdGggKiA2XSA9IDFcbiAgICAgICAgdGhpcy5idWZmZXJbNiArIHdpZHRoICogKDggKyB4KV0gPSAxXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEluc2VydHMgdGhlIHZlcnNpb24gYmxvY2suXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5zZXJ0VmVyc2lvbigpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMud2lkdGhcblxuICAgIGlmICh0aGlzLl92ZXJzaW9uID4gNikge1xuICAgICAgbGV0IGkgPSBWZXJzaW9uLkJMT0NLW3RoaXMuX3ZlcnNpb24gLSA3XVxuICAgICAgbGV0IGogPSAxN1xuXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDY7IHgrKykge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDM7IHkrKywgai0tKSB7XG4gICAgICAgICAgaWYgKDEgJiAoaiA+IDExID8gdGhpcy5fdmVyc2lvbiA+PiBqIC0gMTIgOiBpID4+IGopKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcls1IC0geCArIHdpZHRoICogKDIgLSB5ICsgd2lkdGggLSAxMSldID0gMVxuICAgICAgICAgICAgdGhpcy5idWZmZXJbMiAtIHkgKyB3aWR0aCAtIDExICsgd2lkdGggKiAoNSAtIHgpXSA9IDFcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0TWFzayg1IC0geCwgMiAtIHkgKyB3aWR0aCAtIDExKVxuICAgICAgICAgICAgdGhpcy5fc2V0TWFzaygyIC0geSArIHdpZHRoIC0gMTEsIDUgLSB4KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBDaGVja3MgbWFzayBzaW5jZSBzeW1tZXRyaWNhbCBjZWxscyB1c2UgaGFsZi5cbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggLVxuICAgKiBAcGFyYW0ge051bWJlcn0geSAtXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaXNNYXNrZWQoeCwgeSkge1xuICAgIGNvbnN0IGJpdCA9IEZyYW1lLl9nZXRNYXNrQml0KHgsIHkpXG5cbiAgICByZXR1cm4gdGhpcy5fbWFza1tiaXRdID09PSAxXG4gIH1cblxuICAvKipcbiAgICogUGFja3MgdGhlIGJpdHMgaW50byB0aGUgZnJhbWUgYnVmZmVyIHdoaWxlIGF2b2lkaW5nIHRoZSBtYXNrZWQgYXJlYS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9wYWNrKCkge1xuICAgIGxldCB4ID0gdGhpcy53aWR0aCAtIDFcbiAgICBsZXQgeSA9IHRoaXMud2lkdGggLSAxXG4gICAgbGV0IGsgPSAxXG4gICAgbGV0IHYgPSAxXG5cbiAgICAvLyBJbnRlcmxlYXZlZCBkYXRhIGFuZCBFQ0MgY29kZXMuXG4gICAgY29uc3QgbGVuZ3RoID0gKHRoaXMuX2RhdGFCbG9jayArIHRoaXMuX2VjY0Jsb2NrKSAqICh0aGlzLl9uZWNjQmxvY2sxICsgdGhpcy5fbmVjY0Jsb2NrMikgKyB0aGlzLl9uZWNjQmxvY2syXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgYml0ID0gdGhpcy5fc3RyaW5nQnVmZmVyW2ldXG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrLCBiaXQgPDw9IDEpIHtcbiAgICAgICAgaWYgKDB4ODAgJiBiaXQpIHtcbiAgICAgICAgICB0aGlzLmJ1ZmZlclt4ICsgdGhpcy53aWR0aCAqIHldID0gMVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCBuZXh0IGZpbGwgcG9zaXRpb24uXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgeC0tXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHgrK1xuXG4gICAgICAgICAgICBpZiAoaykge1xuICAgICAgICAgICAgICBpZiAoeSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHktLVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHggLT0gMlxuICAgICAgICAgICAgICAgIGsgPSAha1xuXG4gICAgICAgICAgICAgICAgaWYgKHggPT09IDYpIHtcbiAgICAgICAgICAgICAgICAgIHgtLVxuICAgICAgICAgICAgICAgICAgeSA9IDlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSAhPT0gdGhpcy53aWR0aCAtIDEpIHtcbiAgICAgICAgICAgICAgeSsrXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB4IC09IDJcbiAgICAgICAgICAgICAgayA9ICFrXG5cbiAgICAgICAgICAgICAgaWYgKHggPT09IDYpIHtcbiAgICAgICAgICAgICAgICB4LS1cbiAgICAgICAgICAgICAgICB5IC09IDhcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHYgPSAhdlxuICAgICAgICB9IHdoaWxlICh0aGlzLl9pc01hc2tlZCh4LCB5KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogUmV2ZXJzZXMgdGhlIG1hc2sgYW5kIGZvcm1hdHMgdGhlIGFyZWEuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmV2ZXJzZU1hc2soKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLndpZHRoXG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDk7IHgrKykge1xuICAgICAgdGhpcy5fc2V0TWFzayh4LCA4KVxuICAgIH1cblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgODsgeCsrKSB7XG4gICAgICB0aGlzLl9zZXRNYXNrKHggKyB3aWR0aCAtIDgsIDgpXG4gICAgICB0aGlzLl9zZXRNYXNrKDgsIHgpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCA3OyB5KyspIHtcbiAgICAgIHRoaXMuX3NldE1hc2soOCwgeSArIHdpZHRoIC0gNylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogU2V0cyBiaXQgdG8gaW5kaWNhdGUgY2VsbCBpbiBmcmFtZSBpcyBpbW11dGFibGUgKHN5bW1ldHJpYyBhcm91bmQgZGlhZ29uYWwpLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0geCAtXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IC1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXRNYXNrKHgsIHkpIHtcbiAgICBjb25zdCBiaXQgPSBGcmFtZS5fZ2V0TWFza0JpdCh4LCB5KVxuXG4gICAgdGhpcy5fbWFza1tiaXRdID0gMVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIFN5bmNocm9uaXplcyBtYXNrIGJpdHMuIE9ubHkgc2V0IGFib3ZlIGZvciBiYWNrZ3JvdW5kIGNlbGxzLCBzbyBub3cgYWRkIHRoZSBmb3JlZ3JvdW5kLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3N5bmNNYXNrKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aFxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB3aWR0aDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSB5OyB4KyspIHtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyW3ggKyB3aWR0aCAqIHldKSB7XG4gICAgICAgICAgdGhpcy5fc2V0TWFzayh4LCB5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRnJhbWVcblxuLyoqXG4gKiBUT0RPOiBEb2N1bWVudFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEZyYW1lfk9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBsZXZlbCAtXG4gKiBAcHJvcGVydHkge1N0cmluZ30gdmFsdWUgLVxuICovXG4iLCIvKlxuICogUVJpb3VzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQWxhc2RhaXIgTWVyY2VyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAgVG9tIFplcnVjaGFcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIFRPRE86IERvY3VtZW50XG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBHYWxvaXMge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBHYWxvaXMgZmllbGQgZXhwb25lbnQgdGFibGUuXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcltdfSBUaGUgR2Fsb2lzIGZpZWxkIGV4cG9uZW50IHRhYmxlLlxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXQgRVhQT05FTlQoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIDB4MDEsIDB4MDIsIDB4MDQsIDB4MDgsIDB4MTAsIDB4MjAsIDB4NDAsIDB4ODAsIDB4MWQsIDB4M2EsIDB4NzQsIDB4ZTgsIDB4Y2QsIDB4ODcsIDB4MTMsIDB4MjYsXG4gICAgICAweDRjLCAweDk4LCAweDJkLCAweDVhLCAweGI0LCAweDc1LCAweGVhLCAweGM5LCAweDhmLCAweDAzLCAweDA2LCAweDBjLCAweDE4LCAweDMwLCAweDYwLCAweGMwLFxuICAgICAgMHg5ZCwgMHgyNywgMHg0ZSwgMHg5YywgMHgyNSwgMHg0YSwgMHg5NCwgMHgzNSwgMHg2YSwgMHhkNCwgMHhiNSwgMHg3NywgMHhlZSwgMHhjMSwgMHg5ZiwgMHgyMyxcbiAgICAgIDB4NDYsIDB4OGMsIDB4MDUsIDB4MGEsIDB4MTQsIDB4MjgsIDB4NTAsIDB4YTAsIDB4NWQsIDB4YmEsIDB4NjksIDB4ZDIsIDB4YjksIDB4NmYsIDB4ZGUsIDB4YTEsXG4gICAgICAweDVmLCAweGJlLCAweDYxLCAweGMyLCAweDk5LCAweDJmLCAweDVlLCAweGJjLCAweDY1LCAweGNhLCAweDg5LCAweDBmLCAweDFlLCAweDNjLCAweDc4LCAweGYwLFxuICAgICAgMHhmZCwgMHhlNywgMHhkMywgMHhiYiwgMHg2YiwgMHhkNiwgMHhiMSwgMHg3ZiwgMHhmZSwgMHhlMSwgMHhkZiwgMHhhMywgMHg1YiwgMHhiNiwgMHg3MSwgMHhlMixcbiAgICAgIDB4ZDksIDB4YWYsIDB4NDMsIDB4ODYsIDB4MTEsIDB4MjIsIDB4NDQsIDB4ODgsIDB4MGQsIDB4MWEsIDB4MzQsIDB4NjgsIDB4ZDAsIDB4YmQsIDB4NjcsIDB4Y2UsXG4gICAgICAweDgxLCAweDFmLCAweDNlLCAweDdjLCAweGY4LCAweGVkLCAweGM3LCAweDkzLCAweDNiLCAweDc2LCAweGVjLCAweGM1LCAweDk3LCAweDMzLCAweDY2LCAweGNjLFxuICAgICAgMHg4NSwgMHgxNywgMHgyZSwgMHg1YywgMHhiOCwgMHg2ZCwgMHhkYSwgMHhhOSwgMHg0ZiwgMHg5ZSwgMHgyMSwgMHg0MiwgMHg4NCwgMHgxNSwgMHgyYSwgMHg1NCxcbiAgICAgIDB4YTgsIDB4NGQsIDB4OWEsIDB4MjksIDB4NTIsIDB4YTQsIDB4NTUsIDB4YWEsIDB4NDksIDB4OTIsIDB4MzksIDB4NzIsIDB4ZTQsIDB4ZDUsIDB4YjcsIDB4NzMsXG4gICAgICAweGU2LCAweGQxLCAweGJmLCAweDYzLCAweGM2LCAweDkxLCAweDNmLCAweDdlLCAweGZjLCAweGU1LCAweGQ3LCAweGIzLCAweDdiLCAweGY2LCAweGYxLCAweGZmLFxuICAgICAgMHhlMywgMHhkYiwgMHhhYiwgMHg0YiwgMHg5NiwgMHgzMSwgMHg2MiwgMHhjNCwgMHg5NSwgMHgzNywgMHg2ZSwgMHhkYywgMHhhNSwgMHg1NywgMHhhZSwgMHg0MSxcbiAgICAgIDB4ODIsIDB4MTksIDB4MzIsIDB4NjQsIDB4YzgsIDB4OGQsIDB4MDcsIDB4MGUsIDB4MWMsIDB4MzgsIDB4NzAsIDB4ZTAsIDB4ZGQsIDB4YTcsIDB4NTMsIDB4YTYsXG4gICAgICAweDUxLCAweGEyLCAweDU5LCAweGIyLCAweDc5LCAweGYyLCAweGY5LCAweGVmLCAweGMzLCAweDliLCAweDJiLCAweDU2LCAweGFjLCAweDQ1LCAweDhhLCAweDA5LFxuICAgICAgMHgxMiwgMHgyNCwgMHg0OCwgMHg5MCwgMHgzZCwgMHg3YSwgMHhmNCwgMHhmNSwgMHhmNywgMHhmMywgMHhmYiwgMHhlYiwgMHhjYiwgMHg4YiwgMHgwYiwgMHgxNixcbiAgICAgIDB4MmMsIDB4NTgsIDB4YjAsIDB4N2QsIDB4ZmEsIDB4ZTksIDB4Y2YsIDB4ODMsIDB4MWIsIDB4MzYsIDB4NmMsIDB4ZDgsIDB4YWQsIDB4NDcsIDB4OGUsIDB4MDBcbiAgICBdXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgR2Fsb2lzIGZpZWxkIGxvZyB0YWJsZS5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyW119IFRoZSBHYWxvaXMgZmllbGQgbG9nIHRhYmxlLlxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXQgTE9HKCkge1xuICAgIHJldHVybiBbXG4gICAgICAweGZmLCAweDAwLCAweDAxLCAweDE5LCAweDAyLCAweDMyLCAweDFhLCAweGM2LCAweDAzLCAweGRmLCAweDMzLCAweGVlLCAweDFiLCAweDY4LCAweGM3LCAweDRiLFxuICAgICAgMHgwNCwgMHg2NCwgMHhlMCwgMHgwZSwgMHgzNCwgMHg4ZCwgMHhlZiwgMHg4MSwgMHgxYywgMHhjMSwgMHg2OSwgMHhmOCwgMHhjOCwgMHgwOCwgMHg0YywgMHg3MSxcbiAgICAgIDB4MDUsIDB4OGEsIDB4NjUsIDB4MmYsIDB4ZTEsIDB4MjQsIDB4MGYsIDB4MjEsIDB4MzUsIDB4OTMsIDB4OGUsIDB4ZGEsIDB4ZjAsIDB4MTIsIDB4ODIsIDB4NDUsXG4gICAgICAweDFkLCAweGI1LCAweGMyLCAweDdkLCAweDZhLCAweDI3LCAweGY5LCAweGI5LCAweGM5LCAweDlhLCAweDA5LCAweDc4LCAweDRkLCAweGU0LCAweDcyLCAweGE2LFxuICAgICAgMHgwNiwgMHhiZiwgMHg4YiwgMHg2MiwgMHg2NiwgMHhkZCwgMHgzMCwgMHhmZCwgMHhlMiwgMHg5OCwgMHgyNSwgMHhiMywgMHgxMCwgMHg5MSwgMHgyMiwgMHg4OCxcbiAgICAgIDB4MzYsIDB4ZDAsIDB4OTQsIDB4Y2UsIDB4OGYsIDB4OTYsIDB4ZGIsIDB4YmQsIDB4ZjEsIDB4ZDIsIDB4MTMsIDB4NWMsIDB4ODMsIDB4MzgsIDB4NDYsIDB4NDAsXG4gICAgICAweDFlLCAweDQyLCAweGI2LCAweGEzLCAweGMzLCAweDQ4LCAweDdlLCAweDZlLCAweDZiLCAweDNhLCAweDI4LCAweDU0LCAweGZhLCAweDg1LCAweGJhLCAweDNkLFxuICAgICAgMHhjYSwgMHg1ZSwgMHg5YiwgMHg5ZiwgMHgwYSwgMHgxNSwgMHg3OSwgMHgyYiwgMHg0ZSwgMHhkNCwgMHhlNSwgMHhhYywgMHg3MywgMHhmMywgMHhhNywgMHg1NyxcbiAgICAgIDB4MDcsIDB4NzAsIDB4YzAsIDB4ZjcsIDB4OGMsIDB4ODAsIDB4NjMsIDB4MGQsIDB4NjcsIDB4NGEsIDB4ZGUsIDB4ZWQsIDB4MzEsIDB4YzUsIDB4ZmUsIDB4MTgsXG4gICAgICAweGUzLCAweGE1LCAweDk5LCAweDc3LCAweDI2LCAweGI4LCAweGI0LCAweDdjLCAweDExLCAweDQ0LCAweDkyLCAweGQ5LCAweDIzLCAweDIwLCAweDg5LCAweDJlLFxuICAgICAgMHgzNywgMHgzZiwgMHhkMSwgMHg1YiwgMHg5NSwgMHhiYywgMHhjZiwgMHhjZCwgMHg5MCwgMHg4NywgMHg5NywgMHhiMiwgMHhkYywgMHhmYywgMHhiZSwgMHg2MSxcbiAgICAgIDB4ZjIsIDB4NTYsIDB4ZDMsIDB4YWIsIDB4MTQsIDB4MmEsIDB4NWQsIDB4OWUsIDB4ODQsIDB4M2MsIDB4MzksIDB4NTMsIDB4NDcsIDB4NmQsIDB4NDEsIDB4YTIsXG4gICAgICAweDFmLCAweDJkLCAweDQzLCAweGQ4LCAweGI3LCAweDdiLCAweGE0LCAweDc2LCAweGM0LCAweDE3LCAweDQ5LCAweGVjLCAweDdmLCAweDBjLCAweDZmLCAweGY2LFxuICAgICAgMHg2YywgMHhhMSwgMHgzYiwgMHg1MiwgMHgyOSwgMHg5ZCwgMHg1NSwgMHhhYSwgMHhmYiwgMHg2MCwgMHg4NiwgMHhiMSwgMHhiYiwgMHhjYywgMHgzZSwgMHg1YSxcbiAgICAgIDB4Y2IsIDB4NTksIDB4NWYsIDB4YjAsIDB4OWMsIDB4YTksIDB4YTAsIDB4NTEsIDB4MGIsIDB4ZjUsIDB4MTYsIDB4ZWIsIDB4N2EsIDB4NzUsIDB4MmMsIDB4ZDcsXG4gICAgICAweDRmLCAweGFlLCAweGQ1LCAweGU5LCAweGU2LCAweGU3LCAweGFkLCAweGU4LCAweDc0LCAweGQ2LCAweGY0LCAweGVhLCAweGE4LCAweDUwLCAweDU4LCAweGFmXG4gICAgXVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2Fsb2lzXG4iLCIvKlxuICogUVJpb3VzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQWxhc2RhaXIgTWVyY2VyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAgVG9tIFplcnVjaGFcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5jb25zdCBDYW52YXNSZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXIvQ2FudmFzUmVuZGVyZXInKVxuY29uc3QgRWxlbWVudFNlcnZpY2VQcm92aWRlciA9IHJlcXVpcmUoJy4vc2VydmljZS9lbGVtZW50L0VsZW1lbnRTZXJ2aWNlUHJvdmlkZXInKVxuY29uc3QgRnJhbWUgPSByZXF1aXJlKCcuL0ZyYW1lJylcbmNvbnN0IEltYWdlUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL0ltYWdlUmVuZGVyZXInKVxuY29uc3QgVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsL1V0aWxpdGllcycpXG5cbi8qKlxuICogVE9ETzogRG9jdW1lbnRcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFFSaW91cyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRlZmF1bHQgb3B0aW9ucyBmb3Ige0BsaW5rIFFSaW91c30uXG4gICAqXG4gICAqIEByZXR1cm4ge1FSaW91c35PcHRpb25zfSBUaGUgZGVmYXVsdCBvcHRpb25zLlxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXQgREVGQVVMVFMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICBmb3JlZ3JvdW5kOiAnYmxhY2snLFxuICAgICAgbGV2ZWw6ICdMJyxcbiAgICAgIG1pbWU6ICdpbWFnZS9wbmcnLFxuICAgICAgc2l6ZTogMTAwLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB7QGxpbmsgUVJpb3VzfS5cbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgY3VycmVudCB2ZXJzaW9uLlxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gJzIuMC4wJ1xuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7UVJpb3Vzfk9wdGlvbnN9IFtvcHRpb25zXSAtXG4gICAqIEByZXR1cm4ge1FSaW91c35PcHRpb25zfVxuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgX3BhcnNlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIFFSaW91cy5ERUZBVUxUUywgb3B0aW9ucylcbiAgICBvcHRpb25zLmxldmVsID0gb3B0aW9ucy5sZXZlbC50b1VwcGVyQ2FzZSgpXG4gICAgb3B0aW9ucy5zaXplID0gTWF0aC5hYnMob3B0aW9ucy5zaXplKVxuXG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge1FSaW91c35PcHRpb25zfSBbb3B0aW9uc10gLVxuICAgKiBAcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IFFSaW91cy5fcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBVdGlsaXRpZXMucHJpdmF0aXplKHRoaXMsIG9wdGlvbnMpXG5cbiAgICAvKipcbiAgICAgKiBUT0RPOiBEb2N1bWVudFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7RWxlbWVudFNlcnZpY2V9XG4gICAgICovXG4gICAgdGhpcy5fZWxlbWVudFNlcnZpY2UgPSBuZXcgRWxlbWVudFNlcnZpY2VQcm92aWRlcigpLmdldFNlcnZpY2UoKVxuXG4gICAgLyoqXG4gICAgICogVE9ETzogRG9jdW1lbnRcbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAdHlwZSB7Kn1cbiAgICAgKi9cbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuX2VsZW1lbnQgJiYgdGhpcy5fZWxlbWVudFNlcnZpY2UuaXNDYW52YXModGhpcy5fZWxlbWVudCkgPyB0aGlzLl9lbGVtZW50IDogdGhpcy5fZWxlbWVudFNlcnZpY2UuY3JlYXRlQ2FudmFzKClcbiAgICB0aGlzLmNhbnZhcy5xcmlvdXMgPSB0aGlzXG5cbiAgICAvKipcbiAgICAgKiBUT0RPOiBEb2N1bWVudFxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqIEB0eXBlIHsqfVxuICAgICAqL1xuICAgIHRoaXMuaW1hZ2UgPSB0aGlzLl9lbGVtZW50ICYmIHRoaXMuX2VsZW1lbnRTZXJ2aWNlLmlzSW1hZ2UodGhpcy5fZWxlbWVudCkgPyB0aGlzLl9lbGVtZW50IDogdGhpcy5fZWxlbWVudFNlcnZpY2UuY3JlYXRlSW1hZ2UoKVxuICAgIHRoaXMuaW1hZ2UucXJpb3VzID0gdGhpc1xuXG4gICAgLyoqXG4gICAgICogVE9ETzogRG9jdW1lbnRcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge1JlbmRlcmVyW119XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXJzID0gW1xuICAgICAgbmV3IENhbnZhc1JlbmRlcmVyKHRoaXMpLFxuICAgICAgbmV3IEltYWdlUmVuZGVyZXIodGhpcylcbiAgICBdXG5cbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogUmV0dXJucyB0aGUgaW1hZ2UgZGF0YSBVUkkgZm9yIHRoZSBnZW5lcmF0ZWQgUVIgY29kZSB1c2luZyB0aGUgPGNvZGU+bWltZTwvY29kZT4gcHJvdmlkZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbWltZV0gLVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHRvRGF0YVVSTChtaW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLnRvRGF0YVVSTChtaW1lIHx8IHRoaXMubWltZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWUoe1xuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZVxuICAgIH0pXG5cbiAgICB0aGlzLl9yZW5kZXJlcnMuZm9yRWFjaCgocmVuZGVyZXIpID0+IHJlbmRlcmVyLnJlbmRlcihmcmFtZSkpXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXQgYmFja2dyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja2dyb3VuZFxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBiYWNrZ3JvdW5kIC1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc2V0IGJhY2tncm91bmQoYmFja2dyb3VuZCkge1xuICAgIGNvbnN0IGNoYW5nZWQgPSBVdGlsaXRpZXMuc2V0dGVyKHRoaXMsICdfYmFja2dyb3VuZCcsIGJhY2tncm91bmQsIFFSaW91cy5ERUZBVUxUUy5iYWNrZ3JvdW5kKVxuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXQgZm9yZWdyb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9yZWdyb3VuZFxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmb3JlZ3JvdW5kIC1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc2V0IGZvcmVncm91bmQoZm9yZWdyb3VuZCkge1xuICAgIGNvbnN0IGNoYW5nZWQgPSBVdGlsaXRpZXMuc2V0dGVyKHRoaXMsICdfZm9yZWdyb3VuZCcsIGZvcmVncm91bmQsIFFSaW91cy5ERUZBVUxUUy5mb3JlZ3JvdW5kKVxuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXQgbGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xldmVsXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGxldmVsIC1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc2V0IGxldmVsKGxldmVsKSB7XG4gICAgY29uc3QgY2hhbmdlZCA9IFV0aWxpdGllcy5zZXR0ZXIodGhpcywgJ19sZXZlbCcsIGxldmVsLCBRUmlvdXMuREVGQVVMVFMubGV2ZWwsIFV0aWxpdGllcy50b1VwcGVyQ2FzZSlcblxuICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0IG1pbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21pbWVcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWltZSAtXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNldCBtaW1lKG1pbWUpIHtcbiAgICBjb25zdCBjaGFuZ2VkID0gVXRpbGl0aWVzLnNldHRlcih0aGlzLCAnX21pbWUnLCBtaW1lLCBRUmlvdXMuREVGQVVMVFMubWltZSlcblxuICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgZ2V0IHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemVcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSAtXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHNldCBzaXplKHNpemUpIHtcbiAgICBjb25zdCBjaGFuZ2VkID0gVXRpbGl0aWVzLnNldHRlcih0aGlzLCAnX3NpemUnLCBzaXplLCBRUmlvdXMuREVGQVVMVFMuc2l6ZSwgTWF0aC5hYnMpXG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgLVxuICAgKiBAcHVibGljXG4gICAqL1xuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCBjaGFuZ2VkID0gVXRpbGl0aWVzLnNldHRlcih0aGlzLCAnX3ZhbHVlJywgdmFsdWUsIFFSaW91cy5ERUZBVUxUUy52YWx1ZSlcblxuICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUVJpb3VzXG5cbi8qKlxuICogVE9ETzogRG9jdW1lbnRcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBRUmlvdXN+T3B0aW9uc1xuICogQHByb3BlcnR5IHtTdHJpbmd9IFtiYWNrZ3JvdW5kPVwid2hpdGVcIl0gLSBUaGUgYmFja2dyb3VuZCBjb2xvciB0byBiZSBhcHBsaWVkIHRvIHRoZSBRUiBjb2RlLlxuICogQHByb3BlcnR5IHsqfSBbZWxlbWVudF0gLSBUT0RPOiBEb2N1bWVudFxuICogQHByb3BlcnR5IHtTdHJpbmd9IFtmb3JlZ3JvdW5kPVwiYmxhY2tcIl0gLSBUaGUgZm9yZWdyb3VuZCBjb2xvciB0byBiZSBhcHBsaWVkIHRvIHRoZSBRUiBjb2RlLlxuICogQHByb3BlcnR5IHtTdHJpbmd9IFtsZXZlbD1cIkxcIl0gLSBUaGUgZXJyb3IgY29ycmVjdGlvbiBsZXZlbCB0byBiZSBhcHBsaWVkIHRvIHRoZSBRUiBjb2RlLlxuICogQHByb3BlcnR5IHtTdHJpbmd9IFttaW1lPVwiaW1hZ2UvcG5nXCJdIC0gVE9ETzogRG9jdW1lbnRcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBbc2l6ZT0xMDBdIC0gVGhlIHNpemUgb2YgdGhlIFFSIGNvZGUgaW4gcGl4ZWxzLlxuICogQHByb3BlcnR5IHtTdHJpbmd9IFt2YWx1ZT1cIlwiXSAtIFRoZSB2YWx1ZSB0byBiZSBlbmNvZGVkIHdpdGhpbiB0aGUgUVIgY29kZS5cbiAqL1xuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBUT0RPOiBEb2N1bWVudFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgVmVyc2lvbiB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZlcnNpb24gcGF0dGVybiBibG9jay5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyW119IFRoZSB2ZXJzaW9uIHBhdHRlcm4gYmxvY2suXG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIGdldCBCTE9DSygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgMHhjOTQsIDB4NWJjLCAweGE5OSwgMHg0ZDMsIDB4YmY2LCAweDc2MiwgMHg4NDcsIDB4NjBkLCAweDkyOCwgMHhiNzgsIDB4NDVkLCAweGExNywgMHg1MzIsXG4gICAgICAweDlhNiwgMHg2ODMsIDB4OGM5LCAweDdlYywgMHhlYzQsIDB4MWUxLCAweGZhYiwgMHgwOGUsIDB4YzFhLCAweDMzZiwgMHhkNzUsIDB4MjUwLCAweDlkNSxcbiAgICAgIDB4NmYwLCAweDhiYSwgMHg3OWYsIDB4YjBiLCAweDQyZSwgMHhhNjQsIDB4NTQxLCAweGM2OVxuICAgIF1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnNpb25cbiIsIi8qXG4gKiBRUmlvdXNcbiAqIENvcHlyaWdodCAoQykgMjAxNiBBbGFzZGFpciBNZXJjZXJcbiAqIENvcHlyaWdodCAoQykgMjAxMCBUb20gWmVydWNoYVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9RUmlvdXMnKVxuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuY29uc3QgUmVuZGVyZXIgPSByZXF1aXJlKCcuL1JlbmRlcmVyJylcblxuLyoqXG4gKiBUT0RPOiBEb2N1bWVudFxuICpcbiAqIEBwdWJsaWNcbiAqIEBleHRlbmRzIFJlbmRlcmVyXG4gKi9cbmNsYXNzIENhbnZhc1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGRyYXcoZnJhbWUpIHtcbiAgICBjb25zdCBxcmlvdXMgPSB0aGlzLnFyaW91c1xuICAgIGNvbnN0IHBpeGVscyA9IHRoaXMuZ2V0UGl4ZWxzKGZyYW1lKVxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KGZyYW1lKVxuICAgIGNvbnN0IGNvbnRleHQgPSBxcmlvdXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcXJpb3VzLmZvcmVncm91bmRcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWUud2lkdGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmcmFtZS53aWR0aDsgaisrKSB7XG4gICAgICAgIGlmIChmcmFtZS5idWZmZXJbaiAqIGZyYW1lLndpZHRoICsgaV0pIHtcbiAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHBpeGVscyAqIGkgKyBvZmZzZXQsIHBpeGVscyAqIGogKyBvZmZzZXQsIHBpeGVscywgcGl4ZWxzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgY29uc3QgcXJpb3VzID0gdGhpcy5xcmlvdXNcbiAgICBjb25zdCBjb250ZXh0ID0gcXJpb3VzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDFcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBxcmlvdXMuc2l6ZSwgcXJpb3VzLnNpemUpXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBxcmlvdXMuYmFja2dyb3VuZFxuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgcXJpb3VzLnNpemUsIHFyaW91cy5zaXplKVxuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IHFyaW91cyA9IHRoaXMucXJpb3VzXG4gICAgY29uc3QgY2FudmFzID0gcXJpb3VzLmNhbnZhc1xuXG4gICAgY2FudmFzLndpZHRoID0gcXJpb3VzLnNpemVcbiAgICBjYW52YXMuaGVpZ2h0ID0gcXJpb3VzLnNpemVcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc1JlbmRlcmVyXG4iLCIvKlxuICogUVJpb3VzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQWxhc2RhaXIgTWVyY2VyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAgVG9tIFplcnVjaGFcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5jb25zdCBSZW5kZXJlciA9IHJlcXVpcmUoJy4vUmVuZGVyZXInKVxuXG4vKipcbiAqIFRPRE86IERvY3VtZW50XG4gKlxuICogQHB1YmxpY1xuICogQGV4dGVuZHMgUmVuZGVyZXJcbiAqL1xuY2xhc3MgSW1hZ2VSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBkcmF3KCkge1xuICAgIGNvbnN0IHFyaW91cyA9IHRoaXMucXJpb3VzXG5cbiAgICBxcmlvdXMuaW1hZ2Uuc3JjID0gcXJpb3VzLnRvRGF0YVVSTCgpXG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICByZXNldCgpIHtcbiAgICBjb25zdCBxcmlvdXMgPSB0aGlzLnFyaW91c1xuXG4gICAgcXJpb3VzLmltYWdlLnNyYyA9ICcnXG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICByZXNpemUoKSB7XG4gICAgY29uc3QgcXJpb3VzID0gdGhpcy5xcmlvdXNcbiAgICBjb25zdCBpbWFnZSA9IHFyaW91cy5pbWFnZVxuXG4gICAgaW1hZ2Uud2lkdGggPSBxcmlvdXMuc2l6ZVxuICAgIGltYWdlLmhlaWdodCA9IHFyaW91cy5zaXplXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbWFnZVJlbmRlcmVyXG4iLCIvKlxuICogUVJpb3VzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQWxhc2RhaXIgTWVyY2VyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAgVG9tIFplcnVjaGFcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5jb25zdCBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsL1V0aWxpdGllcycpXG5cbi8qKlxuICogVE9ETzogRG9jdW1lbnRcbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFJlbmRlcmVyIHtcblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtRUmlvdXN9IHFyaW91cyAtXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHFyaW91cykge1xuICAgIC8qKlxuICAgICAqIFRPRE86IERvY3VtZW50XG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUge1FSaW91c31cbiAgICAgKi9cbiAgICB0aGlzLnFyaW91cyA9IHFyaW91c1xuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RnJhbWV9IGZyYW1lIC1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZHJhdyhmcmFtZSkge1xuICAgIFV0aWxpdGllcy50aHJvd1VuaW1wbGVtZW50ZWQoJ1JlbmRlcmVyJywgJ2RyYXcnKVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RnJhbWV9IGZyYW1lIC1cbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBnZXRPZmZzZXQoZnJhbWUpIHtcbiAgICBjb25zdCBwaXhlbHMgPSB0aGlzLmdldFBpeGVscyhmcmFtZSlcblxuICAgIHJldHVybiBNYXRoLmZsb29yKCh0aGlzLnFyaW91cy5zaXplIC0gcGl4ZWxzICogZnJhbWUud2lkdGgpIC8gMilcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge0ZyYW1lfSBmcmFtZSAtXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZ2V0UGl4ZWxzKGZyYW1lKSB7XG4gICAgY29uc3QgcGl4ZWxzID0gdGhpcy5xcmlvdXMuc2l6ZSAvIGZyYW1lLndpZHRoXG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihwaXhlbHMpXG4gIH1cblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtGcmFtZX0gZnJhbWUgLVxuICAgKiBAcHVibGljXG4gICAqL1xuICByZW5kZXIoZnJhbWUpIHtcbiAgICB0aGlzLnJlc2l6ZSgpXG4gICAgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5kcmF3KGZyYW1lKVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIFV0aWxpdGllcy50aHJvd1VuaW1wbGVtZW50ZWQoJ1JlbmRlcmVyJywgJ3Jlc2V0JylcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICByZXNpemUoKSB7XG4gICAgVXRpbGl0aWVzLnRocm93VW5pbXBsZW1lbnRlZCgnUmVuZGVyZXInLCAncmVzaXplJylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyXG4iLCIvKlxuICogUVJpb3VzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgQWxhc2RhaXIgTWVyY2VyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTAgVG9tIFplcnVjaGFcbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIERlZmluZXMgYSBzZXJ2aWNlIGNvbnRyYWN0IHRoYXQgbXVzdCBiZSBtZXQgYnkgYWxsIGltcGxlbWVudGF0aW9ucy5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIFNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB7QGxpbmsgU2VydmljZX0gaXMgc3VwcG9ydGVkIGluIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoaXMgbWV0aG9kIHdpbGwgYWx3YXlzIHJldHVybiA8Y29kZT50cnVlPC9jb2RlPiBidXQgaW1wbGVtZW50YXRpb25zIGFyZSBmcmVlIHRvIG92ZXJyaWRlIHRoaXMgbWV0aG9kXG4gICAqIGFzIGFuZCB3aGVuIG5lZWRlZCB0byBjb250cm9sIHRoZSB1c2FnZSBvZiB0aGUge0BsaW5rIFNlcnZpY2V9LlxuICAgKlxuICAgKiBBbHNvLCB0aGUgZGVmYXVsdCBsb2dpYyBmb3IgYSB7QGxpbmsgU2VydmljZVByb3ZpZGVyfSBpcyB0byBpZ25vcmUgdW5zdXBwb3J0ZWQgaW1wbGVtZW50YXRpb25zLlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUge0BsaW5rIFNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGlzIHN1cHBvcnRlZCBpbiB0aGUgY3VycmVudCBjb250ZXh0O1xuICAgKiBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VydmljZVxuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBBIGJhc2ljIHByb3ZpZGVyIGZvciB7QGxpbmsgU2VydmljZX0gaW1wbGVtZW50YXRpb25zIHdoaWNoLCBieSBkZWZhdWx0LCByZXR1cm5zIHRoZSBmaXJzdCBpbXBsZW1lbnRhdGlvbiB0aGF0XG4gKiBzdXBwb3J0cyB0aGUgY3VycmVudCBjb250ZXh0LlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgU2VydmljZVByb3ZpZGVyIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgU2VydmljZVByb3ZpZGVyfSB3aXRoIHRoZSBvcHRpb25hbCBsaXN0IG9mIHtAbGluayBTZXJ2aWNlfVxuICAgKiA8Y29kZT5pbXBsZW1lbnRhdGlvbnM8L2NvZGU+IHByb3ZpZGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9uW119IFtpbXBsZW1lbnRhdGlvbnNdIC0gYW55IGltcGxlbWVudGF0aW9ucyBjbGFzc2VzIHRvIGJlIGNvbnNpZGVyZWQgYnkgdGhpcyBwcm92aWRlclxuICAgKiBAcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpbXBsZW1lbnRhdGlvbnMpIHtcbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2Yge0BsaW5rIFNlcnZpY2V9IGltcGxlbWVudGF0aW9ucyBiZWluZyBjb25zaWRlcmVkIGJ5IHRoaXMgcHJvdmlkZXIuXG4gICAgICpcbiAgICAgKiBUaGlzIGxpc3QgY29uc2lzdHMgb2YgaW1wbGVtZW50YXRpb24gY2xhc3NlcyBhbmQgPGI+bm90PC9iPiBpbnN0YW5jZXMuXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUge0Z1bmN0aW9uW119XG4gICAgICovXG4gICAgdGhpcy5pbXBsZW1lbnRhdGlvbnMgPSBpbXBsZW1lbnRhdGlvbnMgPyBpbXBsZW1lbnRhdGlvbnMuc2xpY2UoMCkgOiBbXVxuICB9XG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIGFuIGluc3RhbmNlIG9mIGEgbWF0Y2hpbmcge0BsaW5rIFNlcnZpY2V9IGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiBhbiBpbnN0YW5jZSBvZiB0aGUgZmlyc3QgaW1wbGVtZW50YXRpb24gdGhhdCBzdXBwb3J0cyB0aGUgY3VycmVudCBjb250ZXh0LFxuICAgKiBob3dldmVyLCBpbXBsZW1lbnRhdGlvbnMgb2Yge0BsaW5rIFNlcnZpY2VQcm92aWRlcn0gYXJlIGZyZWUgdG8gb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcHJvdmlkZSBhbHRlcm5hdGl2ZSBsb2dpY1xuICAgKiBpZiBuZWVkZWQuXG4gICAqXG4gICAqIEByZXR1cm4ge1NlcnZpY2V9IEEgbmV3IGluc3RhbmNlIG9mIGEgbWF0Y2hpbmcge0BsaW5rIFNlcnZpY2V9IGltcGxlbWVudGF0aW9uLlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgbm8ge0BsaW5rIFNlcnZpY2V9IGltcGxlbWVudGF0aW9uIGNvdWxkIGJlIHByb3ZpZGVkLlxuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXRTZXJ2aWNlKCkge1xuICAgIGxldCBTZXJ2aWNlID0gdGhpcy5pbXBsZW1lbnRhdGlvbnMuZmluZCgoSW1wbGVtZW50YXRpb24pID0+IHtcbiAgICAgIHJldHVybiB0eXBlb2YgSW1wbGVtZW50YXRpb24uaXNTdXBwb3J0ZWQgPT09ICdmdW5jdGlvbicgJiYgSW1wbGVtZW50YXRpb24uaXNTdXBwb3J0ZWQoKVxuICAgIH0pXG5cbiAgICBpZiAoIVNlcnZpY2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHByb3ZpZGUgc2VydmljZSBpbXBsZW1lbnRhdGlvbicpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBTZXJ2aWNlKClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcnZpY2VQcm92aWRlclxuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuY29uc3QgRWxlbWVudFNlcnZpY2UgPSByZXF1aXJlKCcuL0VsZW1lbnRTZXJ2aWNlJylcblxuLyoqXG4gKiBUT0RPOiBEb2N1bWVudFxuICpcbiAqIEBwdWJsaWNcbiAqIEBleHRlbmRzIEVsZW1lbnRTZXJ2aWNlXG4gKi9cbmNsYXNzIEJyb3dzZXJFbGVtZW50U2VydmljZSBleHRlbmRzIEVsZW1lbnRTZXJ2aWNlIHtcblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBjcmVhdGVDYW52YXMoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBjcmVhdGVJbWFnZSgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGlzQ2FudmFzKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBpc0ltYWdlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnRcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJyb3dzZXJFbGVtZW50U2VydmljZVxuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuY29uc3QgU2VydmljZSA9IHJlcXVpcmUoJy4uL1NlcnZpY2UnKVxuY29uc3QgVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbC9VdGlsaXRpZXMnKVxuXG4vKipcbiAqIEEgc2VydmljZSBmb3Igd29ya2luZyB3aXRoIGVsZW1lbnRzLlxuICpcbiAqIEBwdWJsaWNcbiAqIEBleHRlbmRzIFNlcnZpY2VcbiAqL1xuY2xhc3MgRWxlbWVudFNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhIGNhbnZhcyBlbGVtZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHsqfSBUaGUgbmV3bHkgY3JlYXRlZCBjYW52YXMgZWxlbWVudC5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgY3JlYXRlQ2FudmFzKCkge1xuICAgIFV0aWxpdGllcy50aHJvd1VuaW1wbGVtZW50ZWQoJ0VsZW1lbnRTZXJ2aWNlJywgJ2NyZWF0ZUNhbnZhcycpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBhIGltYWdlIGVsZW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm4geyp9IFRoZSBuZXdseSBjcmVhdGVkIGltYWdlIGVsZW1lbnQuXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNyZWF0ZUltYWdlKCkge1xuICAgIFV0aWxpdGllcy50aHJvd1VuaW1wbGVtZW50ZWQoJ0VsZW1lbnRTZXJ2aWNlJywgJ2NyZWF0ZUltYWdlJylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHNwZWNpZmllZCA8Y29kZT5lbGVtZW50PC9jb2RlPiBpcyBhIGNhbnZhcy5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBlbGVtZW50IC0gdGhlIGVsZW1lbnQgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiA8Y29kZT5lbGVtZW50PC9jb2RlPiBpcyBhIGNhbnZhczsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgaXNDYW52YXMoZWxlbWVudCkge1xuICAgIFV0aWxpdGllcy50aHJvd1VuaW1wbGVtZW50ZWQoJ0VsZW1lbnRTZXJ2aWNlJywgJ2lzQ2FudmFzJylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHNwZWNpZmllZCA8Y29kZT5lbGVtZW50PC9jb2RlPiBpcyBhbiBpbWFnZS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBlbGVtZW50IC0gdGhlIGVsZW1lbnQgdG8gYmUgY2hlY2tlZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufSA8Y29kZT50cnVlPC9jb2RlPiBpZiA8Y29kZT5lbGVtZW50PC9jb2RlPiBpcyBhbiBpbWFnZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgaXNJbWFnZShlbGVtZW50KSB7XG4gICAgVXRpbGl0aWVzLnRocm93VW5pbXBsZW1lbnRlZCgnRWxlbWVudFNlcnZpY2UnLCAnaXNJbWFnZScpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50U2VydmljZVxuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuY29uc3QgQnJvd3NlckVsZW1lbnRTZXJ2aWNlID0gcmVxdWlyZSgnLi9Ccm93c2VyRWxlbWVudFNlcnZpY2UnKVxuY29uc3QgTm9kZUVsZW1lbnRTZXJ2aWNlID0gcmVxdWlyZSgnLi9Ob2RlRWxlbWVudFNlcnZpY2UnKVxuY29uc3QgU2VydmljZVByb3ZpZGVyID0gcmVxdWlyZSgnLi4vU2VydmljZVByb3ZpZGVyJylcblxuLyoqXG4gKiBBIHNlcnZpY2UgcHJvdmlkZXIgZm9yIHRoZSB7QGxpbmsgRWxlbWVudFNlcnZpY2V9LlxuICpcbiAqIEBwdWJsaWNcbiAqIEBleHRlbmRzIFNlcnZpY2VQcm92aWRlclxuICovXG5jbGFzcyBFbGVtZW50U2VydmljZVByb3ZpZGVyIGV4dGVuZHMgU2VydmljZVByb3ZpZGVyIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB7QGxpbmsgRWxlbWVudFNlcnZpY2VQcm92aWRlcn0uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFsgTm9kZUVsZW1lbnRTZXJ2aWNlLCBCcm93c2VyRWxlbWVudFNlcnZpY2UgXSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnRTZXJ2aWNlUHJvdmlkZXJcbiIsIi8qXG4gKiBRUmlvdXNcbiAqIENvcHlyaWdodCAoQykgMjAxNiBBbGFzZGFpciBNZXJjZXJcbiAqIENvcHlyaWdodCAoQykgMjAxMCBUb20gWmVydWNoYVxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbmxldCBDYW52YXNcbnRyeSB7XG4gIENhbnZhcyA9IHJlcXVpcmUoJ2NhbnZhcycpXG59IGNhdGNoIChlcnJvcikge1xuICAvLyBEbyBub3RoaW5nLi4uXG59XG5cbmNvbnN0IEVsZW1lbnRTZXJ2aWNlID0gcmVxdWlyZSgnLi9FbGVtZW50U2VydmljZScpXG5cbi8qKlxuICogVE9ETzogRG9jdW1lbnRcbiAqXG4gKiBAcHVibGljXG4gKiBAZXh0ZW5kcyBFbGVtZW50U2VydmljZVxuICovXG5jbGFzcyBOb2RlRWxlbWVudFNlcnZpY2UgZXh0ZW5kcyBFbGVtZW50U2VydmljZSB7XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGlzU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiBDYW52YXMgIT0gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgY3JlYXRlQ2FudmFzKCkge1xuICAgIHJldHVybiBuZXcgQ2FudmFzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGNyZWF0ZUltYWdlKCkge1xuICAgIHJldHVybiBuZXcgQ2FudmFzLkltYWdlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIGlzQ2FudmFzKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIENhbnZhc1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgaXNJbWFnZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBDYW52YXMuSW1hZ2VcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vZGVFbGVtZW50U2VydmljZVxuIiwiLypcbiAqIFFSaW91c1xuICogQ29weXJpZ2h0IChDKSAyMDE2IEFsYXNkYWlyIE1lcmNlclxuICogQ29weXJpZ2h0IChDKSAyMDEwIFRvbSBaZXJ1Y2hhXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBUT0RPOiBEb2N1bWVudFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgVXRpbGl0aWVzIHtcblxuICAvKipcbiAgICogVE9ETzogRG9jdW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCAtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgLVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEBwdWJsaWNcbiAgICogQHN0YXRpY1xuICAgKi9cbiAgc3RhdGljIHByaXZhdGl6ZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAobGV0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0YXJnZXRbYF8ke2tleX1gXSA9IHNvdXJjZVtrZXldXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgLVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGROYW1lIC1cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtXG4gICAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gLVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdHJhbnNmb3JtZXJdIC1cbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICogQHB1YmxpY1xuICAgKiBAc3RhdGljXG4gICAqL1xuICBzdGF0aWMgc2V0dGVyKG9iamVjdCwgZmllbGROYW1lLCB2YWx1ZSwgZGVmYXVsdFZhbHVlLCB0cmFuc2Zvcm1lcikge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gb2JqZWN0W2ZpZWxkTmFtZV1cbiAgICBjb25zdCBuZXdWYWx1ZSA9IHR5cGVvZiB0cmFuc2Zvcm1lciA9PT0gJ2Z1bmN0aW9uJyA/IHRyYW5zZm9ybWVyKHZhbHVlKSA6IHZhbHVlXG5cbiAgICBvYmplY3RbZmllbGROYW1lXSA9IG5ld1ZhbHVlICE9IG51bGwgPyBuZXdWYWx1ZSA6IGRlZmF1bHRWYWx1ZVxuXG4gICAgcmV0dXJuIG9iamVjdFtmaWVsZE5hbWVdICE9PSBvbGRWYWx1ZVxuICB9XG5cbiAgLyoqXG4gICAqIFRPRE86IERvY3VtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgLVxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZSAtXG4gICAqIEB0aHJvd3Mge0Vycm9yfVxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyB0aHJvd1VuaW1wbGVtZW50ZWQoY2xhc3NOYW1lLCBtZXRob2ROYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7bWV0aG9kTmFtZX1cIiBtZXRob2QgbXVzdCBiZSBpbXBsZW1lbnRlZCBvbiB0aGUgJHtjbGFzc05hbWV9IGNsYXNzYClcbiAgfVxuXG4gIC8qKlxuICAgKiBUT0RPOiBEb2N1bWVudFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIC1cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKiBAcHVibGljXG4gICAqIEBzdGF0aWNcbiAgICovXG4gIHN0YXRpYyB0b1VwcGVyQ2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nICE9IG51bGwgJiYgc3RyaW5nLnRvVXBwZXJDYXNlKClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFV0aWxpdGllc1xuIl19
