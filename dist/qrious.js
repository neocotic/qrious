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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint no-multi-spaces: 0 */

/**
 * TODO: Document
 *
 * @public
 */

var Alignment = function () {
  function Alignment() {
    (0, _classCallCheck3.default)(this, Alignment);
  }

  (0, _createClass3.default)(Alignment, null, [{
    key: "BLOCK",


    /**
     * Returns the alignment pattern block.
     *
     * @return {Number[]} The alignment pattern block.
     * @public
     * @static
     */
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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint no-multi-spaces: 0 */

/**
 * TODO: Document
 *
 * @public
 */

var ErrorCorrection = function () {
  function ErrorCorrection() {
    (0, _classCallCheck3.default)(this, ErrorCorrection);
  }

  (0, _createClass3.default)(ErrorCorrection, null, [{
    key: "BLOCKS",


    /**
     * Returns the error correction blocks.
     *
     * There are four elements per version. The first two indicate the number of blocks, then the data width, and finally
     * the ECC width.
     *
     * @return {Number[]} The ECC blocks.
     * @public
     * @static
     */
    get: function get() {
      return [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30];
    }

    /**
     * Returns the final format bits with mask (level << 3 | mask).
     *
     * @return {Number[]} The final format bits.
     * @public
     * @static
     */

  }, {
    key: "FINAL_FORMAT",
    get: function get() {
      return [
      // L
      0x77c4, 0x72f3, 0x7daa, 0x789d, 0x662f, 0x6318, 0x6c41, 0x6976,
      // M
      0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0,
      // Q
      0x355f, 0x3068, 0x3f31, 0x3a06, 0x24b4, 0x2183, 0x2eda, 0x2bed,
      // H
      0x1689, 0x13be, 0x1ce7, 0x19d0, 0x0762, 0x0255, 0x0d0c, 0x083b];
    }

    /**
     * Returns a map of human-readable ECC levels.
     *
     * @return {Object<String, Number>} A ECC level mapping.
     * @public
     * @static
     */

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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var Alignment = require('./Alignment');
var ErrorCorrection = require('./ErrorCorrection');
var Galois = require('./Galois');
var Version = require('./Version');

/**
 * TODO: Document
 *
 * @public
 */

var Frame = function () {
  (0, _createClass3.default)(Frame, null, [{
    key: '_createArray',


    /**
     * TODO: Document
     *
     * @param {Number} length -
     * @return {Number[]}
     * @private
     * @static
     */
    value: function _createArray(length) {
      var array = [];

      for (var i = 0; i < length; i++) {
        array[i] = 0;
      }

      return array;
    }

    /**
     * TODO: Document
     *
     * @param {Number} x -
     * @param {Number} y -
     * @return {Number}
     * @private
     * @static
     */

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

    /**
     * TODO: Document
     *
     * Returns the exponentiation mod N.
     *
     * @param {Number} x -
     * @return {Number}
     * @private
     * @static
     */

  }, {
    key: '_modN',
    value: function _modN(x) {
      while (x >= 255) {
        x -= 255;
        x = (x >> 8) + (x & 255);
      }

      return x;
    }

    // *Badness* coefficients.

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

    /**
     * TODO: Document
     *
     * @param {Frame~Options} options -
     * @public
     */

  }]);

  function Frame(options) {
    (0, _classCallCheck3.default)(this, Frame);

    /**
     * The run lengths for badness.
     *
     * @private
     * @type {Number[]}
     */
    this._badness = [];

    /**
     * Determine the ECC level to be applied.
     *
     * @private
     * @type {Number}
     */
    this._level = ErrorCorrection.LEVELS[options.level];

    /**
     * The generator polynomial.
     *
     * @private
     * @type {Number[]}
     */
    this._polynomial = [];

    /**
     * TODO: Document
     *
     * @private
     * @type {String}
     */
    this._value = options.value;

    /**
     * TODO: Document
     *
     * @private
     * @type {Number}
     */
    this._valueLength = this._value.length;

    /**
     * The version for the data.
     *
     * @private
     * @type {Number}
     */
    this._version = 0;

    /**
     * The data input buffer.
     *
     * @private
     * @type {String}
     */
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

    /**
     * The data block.
     *
     * @private
     * @type {Number}
     */
    this._dataBlock = dataBlock;

    this._eccBlock = eccBlock;
    this._neccBlock1 = neccBlock1;
    this._neccBlock2 = neccBlock2;

    /**
     * The data width is based on version.
     *
     * @public
     * @type {Number}
     */
    // FIXME: Ensure that it fits instead of being truncated.
    this.width = 17 + 4 * this._version;

    /**
     * The image buffer.
     *
     * @public
     * @type {Number[]}
     */
    this.buffer = Frame._createArray(this.width * this.width);

    /**
     * The error correction buffer.
     *
     * @private
     * @type {Number[]}
     */
    this._ecc = Frame._createArray(this._dataBlock + (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2);

    /**
     * The fixed part of the image.
     *
     * @private
     * @type {Number[]}
     */
    this._mask = Frame._createArray((this.width * (this.width + 1) + 1) / 2);

    this._insertFinders();
    this._insertAlignments();

    // Insert single foreground cell.
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

  /**
   * TODO: Document
   *
   * Enters alignment pattern. Foreground color to frame, background to mask. Frame will be merged with mask later.
   *
   * @param {Number} x -
   * @param {Number} y -
   * @private
   */


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

    /**
     * TODO: Document
     *
     * Calculates and appends <code>ecc</code> data to the <code>data</code> block. If block is in the string buffer the
     * indices to buffers are used.
     *
     * @param {Number} data -
     * @param {Number} dataLength -
     * @param {Number} ecc -
     * @param {Number} eccLength -
     * @private
     */

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

    /**
     * Appends the ECC buffer to the data buffer.
     *
     * @private
     */

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

    /**
     * TODO: Document
     *
     * Applies the selected mask out of the 8 options.
     *
     * @param {Number} mask -
     * @private
     */

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

    /**
     * Calculates the maximum string length.
     *
     * @return {Number} The maximum string length.
     * @private
     */

  }, {
    key: '_calculateMaxLength',
    value: function _calculateMaxLength() {
      return this._dataBlock * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;
    }

    /**
     * Calculates the generator polynomial.
     *
     * @private
     */

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

      // Use logs for generator polynomial to save calculation step.
      for (var _i4 = 0; _i4 <= this._eccBlock; _i4++) {
        this._polynomial[_i4] = Galois.LOG[this._polynomial[_i4]];
      }
    }

    /**
     * TODO: Document
     *
     * Calculates how bad the masked image is (e.g. blocks, imbalance, runs, or finders).
     *
     * @return {Number}
     * @private
     */

  }, {
    key: '_checkBadness',
    value: function _checkBadness() {
      var bad = 0;
      var width = this.width;

      // Blocks of same colour.
      for (var y = 0; y < width - 1; y++) {
        for (var x = 0; x < width - 1; x++) {
          // All foreground colour.
          if (this.buffer[x + width * y] && this.buffer[x + 1 + width * y] && this.buffer[x + width * (y + 1)] && this.buffer[x + 1 + width * (y + 1)] ||
          // All background colour.
          !(this.buffer[x + width * y] || this.buffer[x + 1 + width * y] || this.buffer[x + width * (y + 1)] || this.buffer[x + 1 + width * (y + 1)])) {
            bad += Frame.N2;
          }
        }
      }

      var bw = 0;

      // X runs.
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

      // Y runs.
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

    /**
     * TODO: Document
     *
     * Converts the string buffer into a bit stream. 8-bit data to QR-coded 8-bit data (numeric, alphanum, or kanji not
     * supported).
     *
     * @param {Number} length -
     * @private
     */

  }, {
    key: '_convertBitStream',
    value: function _convertBitStream(length) {
      // Convert string to bit stream. 8-bit data to QR-coded 8-bit data (numeric, alphanum, or kanji
      // not supported).

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

      // Shift and re-pack to insert length prefix.
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

      // Fill to end with pad pattern.
      index = length + 3 - (this._version < 10);

      while (index < maxLength) {
        this._stringBuffer[index++] = 0xec;
        this._stringBuffer[index++] = 0x11;
      }
    }

    /**
     * TODO: Document
     *
     * Using the table for the length of each run, calculate the amount of bad image. Long runs or those that look like
     * finders are called twice; once for X and Y.
     *
     * @param {Number} length -
     * @returns {Number}
     * @private
     */

  }, {
    key: '_getBadness',
    value: function _getBadness(length) {
      var badRuns = 0;

      for (var i = 0; i <= length; i++) {
        if (this._badness[i] >= 5) {
          badRuns += Frame.N1 + this._badness[i] - 5;
        }
      }

      // FBFFFBF as in finder.
      for (var _i5 = 3; _i5 < length - 1; _i5 += 2) {
        if (this._badness[_i5 - 2] === this._badness[_i5 + 2] && this._badness[_i5 + 2] === this._badness[_i5 - 1] && this._badness[_i5 - 1] === this._badness[_i5 + 1] && this._badness[_i5 - 1] * 3 === this._badness[_i5] && (
        // Background around the foreground pattern? Not part of the specs.
        this._badness[_i5 - 3] === 0 || _i5 + 3 > length || this._badness[_i5 - 3] * 3 >= this._badness[_i5] * 4 || this._badness[_i5 + 3] * 3 >= this._badness[_i5] * 4)) {
          badRuns += Frame.N3;
        }
      }

      return badRuns;
    }

    /**
     * TODO: Document
     *
     * @private
     */

  }, {
    key: '_finish',
    value: function _finish() {
      // Save pre-mask copy of frame.
      this._stringBuffer = this.buffer.slice(0);

      var bit = 0;
      var i = void 0;
      var mask = 30000;

      /*
       * Using for instead of while since in original Arduino code if an early mask was "good enough" it wouldn't try for
       * a better one since they get more complex and take longer.
       */
      for (i = 0; i < 8; i++) {
        // Returns foreground-background imbalance.
        this._applyMask(i);

        var currentMask = this._checkBadness();

        // Is current mask better than previous best?
        if (currentMask < mask) {
          mask = currentMask;
          bit = i;
        }

        // Don't increment "i" to a void redoing mask.
        if (bit === 7) {
          break;
        }

        // Reset for next pass.
        this.buffer = this._stringBuffer.slice(0);
      }

      // Redo best mask as none were "good enough" (i.e. last wasn't bit).
      if (bit !== i) {
        this._applyMask(bit);
      }

      // Add in final mask/ECC level bytes.
      mask = ErrorCorrection.FINAL_FORMAT[bit + (this._level - 1 << 3)];

      // Low byte.
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

      // High byte.
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

    /**
     * Interleaves blocks.
     *
     * @private
     */

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

    /**
     * TODO: Document
     *
     * Inserts alignment blocks.
     *
     * @private
     */

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

    /**
     * TODO: Document
     *
     * Inserts finders: foreground colour to frame and background to mask.
     *
     * @private
     */

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

    /**
     * TODO: Document
     *
     * Inserts timing gap into mask.
     *
     * @private
     */

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

    /**
     * TODO: Document
     *
     * Inserts timing row and column.
     *
     * @private
     */

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

    /**
     * TODO: Document
     *
     * Inserts the version block.
     *
     * @private
     */

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

    /**
     * TODO: Document
     *
     * Checks mask since symmetrical cells use half.
     *
     * @param {Number} x -
     * @param {Number} y -
     * @return {Boolean}
     * @private
     */

  }, {
    key: '_isMasked',
    value: function _isMasked(x, y) {
      var bit = Frame._getMaskBit(x, y);

      return this._mask[bit] === 1;
    }

    /**
     * Packs the bits into the frame buffer while avoiding the masked area.
     *
     * @private
     */

  }, {
    key: '_pack',
    value: function _pack() {
      var x = this.width - 1;
      var y = this.width - 1;
      var k = 1;
      var v = 1;

      // Interleaved data and ECC codes.
      var length = (this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2) + this._neccBlock2;

      for (var i = 0; i < length; i++) {
        var bit = this._stringBuffer[i];

        for (var j = 0; j < 8; j++, bit <<= 1) {
          if (0x80 & bit) {
            this.buffer[x + this.width * y] = 1;
          }

          // Find next fill position.
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

    /**
     * TODO: Document
     *
     * Reverses the mask and formats the area.
     *
     * @private
     */

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

    /**
     * TODO: Document
     *
     * Sets bit to indicate cell in frame is immutable (symmetric around diagonal).
     *
     * @param {Number} x -
     * @param {Number} y -
     * @private
     */

  }, {
    key: '_setMask',
    value: function _setMask(x, y) {
      var bit = Frame._getMaskBit(x, y);

      this._mask[bit] = 1;
    }

    /**
     * TODO: Document
     *
     * Synchronizes mask bits. Only set above for background cells, so now add the foreground.
     *
     * @private
     */

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

/**
 * TODO: Document
 *
 * @typedef {Object} Frame~Options
 * @property {String} level -
 * @property {String} value -
 */

},{"./Alignment":91,"./ErrorCorrection":92,"./Galois":94,"./Version":96,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}],94:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * TODO: Document
 *
 * @public
 */

var Galois = function () {
  function Galois() {
    (0, _classCallCheck3.default)(this, Galois);
  }

  (0, _createClass3.default)(Galois, null, [{
    key: "EXPONENT",


    /**
     * Returns the Galois field exponent table.
     *
     * @return {Number[]} The Galois field exponent table.
     * @public
     * @static
     */
    get: function get() {
      return [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1d, 0x3a, 0x74, 0xe8, 0xcd, 0x87, 0x13, 0x26, 0x4c, 0x98, 0x2d, 0x5a, 0xb4, 0x75, 0xea, 0xc9, 0x8f, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0, 0x9d, 0x27, 0x4e, 0x9c, 0x25, 0x4a, 0x94, 0x35, 0x6a, 0xd4, 0xb5, 0x77, 0xee, 0xc1, 0x9f, 0x23, 0x46, 0x8c, 0x05, 0x0a, 0x14, 0x28, 0x50, 0xa0, 0x5d, 0xba, 0x69, 0xd2, 0xb9, 0x6f, 0xde, 0xa1, 0x5f, 0xbe, 0x61, 0xc2, 0x99, 0x2f, 0x5e, 0xbc, 0x65, 0xca, 0x89, 0x0f, 0x1e, 0x3c, 0x78, 0xf0, 0xfd, 0xe7, 0xd3, 0xbb, 0x6b, 0xd6, 0xb1, 0x7f, 0xfe, 0xe1, 0xdf, 0xa3, 0x5b, 0xb6, 0x71, 0xe2, 0xd9, 0xaf, 0x43, 0x86, 0x11, 0x22, 0x44, 0x88, 0x0d, 0x1a, 0x34, 0x68, 0xd0, 0xbd, 0x67, 0xce, 0x81, 0x1f, 0x3e, 0x7c, 0xf8, 0xed, 0xc7, 0x93, 0x3b, 0x76, 0xec, 0xc5, 0x97, 0x33, 0x66, 0xcc, 0x85, 0x17, 0x2e, 0x5c, 0xb8, 0x6d, 0xda, 0xa9, 0x4f, 0x9e, 0x21, 0x42, 0x84, 0x15, 0x2a, 0x54, 0xa8, 0x4d, 0x9a, 0x29, 0x52, 0xa4, 0x55, 0xaa, 0x49, 0x92, 0x39, 0x72, 0xe4, 0xd5, 0xb7, 0x73, 0xe6, 0xd1, 0xbf, 0x63, 0xc6, 0x91, 0x3f, 0x7e, 0xfc, 0xe5, 0xd7, 0xb3, 0x7b, 0xf6, 0xf1, 0xff, 0xe3, 0xdb, 0xab, 0x4b, 0x96, 0x31, 0x62, 0xc4, 0x95, 0x37, 0x6e, 0xdc, 0xa5, 0x57, 0xae, 0x41, 0x82, 0x19, 0x32, 0x64, 0xc8, 0x8d, 0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xdd, 0xa7, 0x53, 0xa6, 0x51, 0xa2, 0x59, 0xb2, 0x79, 0xf2, 0xf9, 0xef, 0xc3, 0x9b, 0x2b, 0x56, 0xac, 0x45, 0x8a, 0x09, 0x12, 0x24, 0x48, 0x90, 0x3d, 0x7a, 0xf4, 0xf5, 0xf7, 0xf3, 0xfb, 0xeb, 0xcb, 0x8b, 0x0b, 0x16, 0x2c, 0x58, 0xb0, 0x7d, 0xfa, 0xe9, 0xcf, 0x83, 0x1b, 0x36, 0x6c, 0xd8, 0xad, 0x47, 0x8e, 0x00];
    }

    /**
     * Returns the Galois field log table.
     *
     * @return {Number[]} The Galois field log table.
     * @public
     * @static
     */

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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var CanvasRenderer = require('./renderer/CanvasRenderer');
var ElementServiceProvider = require('./service/element/ElementServiceProvider');
var Frame = require('./Frame');
var ImageRenderer = require('./renderer/ImageRenderer');
var Utilities = require('./util/Utilities');

/**
 * TODO: Document
 *
 * @public
 */

var QRious = function () {
  (0, _createClass3.default)(QRious, null, [{
    key: '_parseOptions',


    /**
     * TODO: Document
     *
     * @param {QRious~Options} [options] -
     * @return {QRious~Options}
     * @private
     * @static
     */
    value: function _parseOptions(options) {
      options = (0, _assign2.default)({}, QRious.DEFAULTS, options);
      options.level = Utilities.toUpperCase(options.level);
      options.size = Math.abs(options.size);

      return options;
    }

    /**
     * TODO: Document
     *
     * @param {QRious~Options} [options] -
     * @public
     */

  }, {
    key: 'DEFAULTS',


    /**
     * Returns the default options for {@link QRious}.
     *
     * @return {QRious~Options} The default options.
     * @public
     * @static
     */
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

    /**
     * Returns the current version of {@link QRious}.
     *
     * @return {String} The current version.
     * @public
     * @static
     */

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

    /**
     * TODO: Document
     *
     * @private
     * @type {ElementService}
     */
    this._elementService = new ElementServiceProvider().getService();

    /**
     * TODO: Document
     *
     * @public
     * @type {*}
     */
    this.canvas = this._element && this._elementService.isCanvas(this._element) ? this._element : this._elementService.createCanvas();
    this.canvas.qrious = this;

    /**
     * TODO: Document
     *
     * @public
     * @type {*}
     */
    this.image = this._element && this._elementService.isImage(this._element) ? this._element : this._elementService.createImage();
    this.image.qrious = this;

    /**
     * TODO: Document
     *
     * @private
     * @type {Renderer[]}
     */
    this._renderers = [new CanvasRenderer(this), new ImageRenderer(this)];

    this.update();
  }

  /**
   * TODO: Document
   *
   * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
   *
   * @param {String} [mime] -
   * @return {String}
   * @public
   */


  (0, _createClass3.default)(QRious, [{
    key: 'toDataURL',
    value: function toDataURL(mime) {
      return this.canvas.toDataURL(mime || this.mime);
    }

    /**
     * TODO: Document
     *
     * @protected
     */

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

    /**
     * TODO: Document
     *
     * @return {String}
     * @public
     */

  }, {
    key: 'background',
    get: function get() {
      return this._background;
    }

    /**
     * TODO: Document
     *
     * @param {String} background -
     * @public
     */
    ,
    set: function set(background) {
      var changed = Utilities.setter(this, '_background', background, QRious.DEFAULTS.background);

      if (changed) {
        this.update();
      }
    }

    /**
     * TODO: Document
     *
     * @return {String}
     * @public
     */

  }, {
    key: 'foreground',
    get: function get() {
      return this._foreground;
    }

    /**
     * TODO: Document
     *
     * @param {String} foreground -
     * @public
     */
    ,
    set: function set(foreground) {
      var changed = Utilities.setter(this, '_foreground', foreground, QRious.DEFAULTS.foreground);

      if (changed) {
        this.update();
      }
    }

    /**
     * TODO: Document
     *
     * @return {String}
     * @public
     */

  }, {
    key: 'level',
    get: function get() {
      return this._level;
    }

    /**
     * TODO: Document
     *
     * @param {String} level -
     * @public
     */
    ,
    set: function set(level) {
      var changed = Utilities.setter(this, '_level', level, QRious.DEFAULTS.level, Utilities.toUpperCase);

      if (changed) {
        this.update();
      }
    }

    /**
     * TODO: Document
     *
     * @return {String}
     * @public
     */

  }, {
    key: 'mime',
    get: function get() {
      return this._mime;
    }

    /**
     * TODO: Document
     *
     * @param {String} mime -
     * @public
     */
    ,
    set: function set(mime) {
      var changed = Utilities.setter(this, '_mime', mime, QRious.DEFAULTS.mime);

      if (changed) {
        this.update();
      }
    }

    /**
     * TODO: Document
     *
     * @return {Number}
     * @public
     */

  }, {
    key: 'size',
    get: function get() {
      return this._size;
    }

    /**
     * TODO: Document
     *
     * @param {Number} size -
     * @public
     */
    ,
    set: function set(size) {
      var changed = Utilities.setter(this, '_size', size, QRious.DEFAULTS.size, Math.abs);

      if (changed) {
        this.update();
      }
    }

    /**
     * TODO: Document
     *
     * @return {String}
     * @public
     */

  }, {
    key: 'value',
    get: function get() {
      return this._value;
    }

    /**
     * TODO: Document
     *
     * @param {String} value -
     * @public
     */
    ,
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

/**
 * TODO: Document
 *
 * @typedef {Object} QRious~Options
 * @property {String} [background="white"] - The background color to be applied to the QR code.
 * @property {*} [element] - TODO: Document
 * @property {String} [foreground="black"] - The foreground color to be applied to the QR code.
 * @property {String} [level="L"] - The error correction level to be applied to the QR code.
 * @property {String} [mime="image/png"] - TODO: Document
 * @property {Number} [size=100] - The size of the QR code in pixels.
 * @property {String} [value=""] - The value to be encoded within the QR code.
 */

},{"./Frame":93,"./renderer/CanvasRenderer":98,"./renderer/ImageRenderer":99,"./service/element/ElementServiceProvider":105,"./util/Utilities":107,"babel-runtime/core-js/object/assign":1,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}],96:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * TODO: Document
 *
 * @public
 */

var Version = function () {
  function Version() {
    (0, _classCallCheck3.default)(this, Version);
  }

  (0, _createClass3.default)(Version, null, [{
    key: "BLOCK",


    /**
     * Returns the version pattern block.
     *
     * @return {Number[]} The version pattern block.
     * @public
     * @static
     */
    get: function get() {
      return [0xc94, 0x5bc, 0xa99, 0x4d3, 0xbf6, 0x762, 0x847, 0x60d, 0x928, 0xb78, 0x45d, 0xa17, 0x532, 0x9a6, 0x683, 0x8c9, 0x7ec, 0xec4, 0x1e1, 0xfab, 0x08e, 0xc1a, 0x33f, 0xd75, 0x250, 0x9d5, 0x6f0, 0x8ba, 0x79f, 0xb0b, 0x42e, 0xa64, 0x541, 0xc69];
    }
  }]);
  return Version;
}();

module.exports = Version;

},{"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9}],97:[function(require,module,exports){
'use strict';

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var Renderer = require('./Renderer');

/**
 * TODO: Document
 *
 * @public
 * @extends Renderer
 */

var CanvasRenderer = function (_Renderer) {
  (0, _inherits3.default)(CanvasRenderer, _Renderer);

  function CanvasRenderer() {
    (0, _classCallCheck3.default)(this, CanvasRenderer);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CanvasRenderer).apply(this, arguments));
  }

  (0, _createClass3.default)(CanvasRenderer, [{
    key: 'draw',


    /**
     * @override
     */
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

    /**
     * @override
     */

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

    /**
     * @override
     */

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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var Renderer = require('./Renderer');

/**
 * TODO: Document
 *
 * @public
 * @extends Renderer
 */

var ImageRenderer = function (_Renderer) {
  (0, _inherits3.default)(ImageRenderer, _Renderer);

  function ImageRenderer() {
    (0, _classCallCheck3.default)(this, ImageRenderer);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ImageRenderer).apply(this, arguments));
  }

  (0, _createClass3.default)(ImageRenderer, [{
    key: 'draw',


    /**
     * @override
     */
    value: function draw() {
      var qrious = this.qrious;

      qrious.image.src = qrious.toDataURL();
    }

    /**
     * @override
     */

  }, {
    key: 'reset',
    value: function reset() {
      var qrious = this.qrious;

      qrious.image.src = '';
    }

    /**
     * @override
     */

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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var Utilities = require('../util/Utilities');

/**
 * Responsible for rendering a QR code {@link Frame} on a specific type of element.
 *
 * A renderer may be dependant on the rendering of another element, so ordering of their execution is important.
 *
 * @public
 */

var Renderer = function () {

  /**
   * Creates a new instance of {@link Renderer} for the <code>qrious</code> instance provided.
   *
   * @param {QRious} qrious - the {@link QRious} instance to be used
   * @public
   */

  function Renderer(qrious) {
    (0, _classCallCheck3.default)(this, Renderer);

    /**
     * The {@link QRious} instance.
     *
     * @protected
     * @type {QRious}
     */
    this.qrious = qrious;
  }

  /**
   * Draws the specified QR code <code>frame</code> on the underlying element.
   *
   * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
   *
   * @param {Frame} frame - the {@link Frame} to be drawn
   * @protected
   */


  (0, _createClass3.default)(Renderer, [{
    key: 'draw',
    value: function draw(frame) {
      Utilities.throwUnimplemented('Renderer', 'draw');
    }

    /**
     * Calculates the offset/padding (in pixel units) to be inserted before the QR code based on the <code>frame</code>
     * provided.
     *
     * @param {Frame} frame - the {@link Frame} from which the offset is to be derived
     * @return {Number} The pixel offset for the QR code.
     * @protected
     */

  }, {
    key: 'getOffset',
    value: function getOffset(frame) {
      var pixels = this.getPixels(frame);

      return Math.floor((this.qrious.size - pixels * frame.width) / 2);
    }

    /**
     * TODO: Document
     *
     * Calculates the
     *
     * @param {Frame} frame -
     * @return {Number}
     * @protected
     */

  }, {
    key: 'getPixels',
    value: function getPixels(frame) {
      var pixels = this.qrious.size / frame.width;

      return Math.floor(pixels);
    }

    /**
     * TODO: Document
     *
     * @param {Frame} frame -
     * @public
     */

  }, {
    key: 'render',
    value: function render(frame) {
      this.resize();
      this.reset();
      this.draw(frame);
    }

    /**
     * TODO: Document
     *
     * @protected
     */

  }, {
    key: 'reset',
    value: function reset() {
      Utilities.throwUnimplemented('Renderer', 'reset');
    }

    /**
     * TODO: Document
     *
     * @protected
     */

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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Defines a service contract that must be met by all implementations.
 *
 * @public
 */

var Service = function () {
  function Service() {
    (0, _classCallCheck3.default)(this, Service);
  }

  (0, _createClass3.default)(Service, null, [{
    key: "isSupported",


    /**
     * Returns whether or not the {@link Service} is supported in the current context.
     *
     * By default, this method will always return <code>true</code> but implementations are free to override this method
     * as and when needed to control the usage of the {@link Service}.
     *
     * Also, the default logic for a {@link ServiceProvider} is to ignore unsupported implementations.
     *
     * @return {Boolean} <code>true</code> if the {@link Service} implementation is supported in the current context;
     * otherwise <code>false</code>.
     * @public
     * @static
     */
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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * A basic provider for {@link Service} implementations which, by default, returns the first implementation that
 * supports the current context.
 *
 * @public
 */

var ServiceProvider = function () {

  /**
   * Creates a new instance of {@link ServiceProvider} with the optional list of {@link Service}
   * <code>implementations</code> provided.
   *
   * @param {Function[]} [implementations] - any implementations classes to be considered by this provider
   * @public
   */

  function ServiceProvider(implementations) {
    (0, _classCallCheck3.default)(this, ServiceProvider);

    /**
     * A list of {@link Service} implementations being considered by this provider.
     *
     * This list consists of implementation classes and <b>not</b> instances.
     *
     * @protected
     * @type {Function[]}
     */
    this.implementations = implementations ? implementations.slice(0) : [];
  }

  /**
   * Provides an instance of a matching {@link Service} implementation.
   *
   * By default, this method will return an instance of the first implementation that supports the current context,
   * however, implementations of {@link ServiceProvider} are free to override this method to provide alternative logic
   * if needed.
   *
   * @return {Service} A new instance of a matching {@link Service} implementation.
   * @throws {Error} If no {@link Service} implementation could be provided.
   * @public
   */


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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var ElementService = require('./ElementService');

/**
 * An implementation of {@link ElementService} intended for use within a browser environment.
 *
 * @public
 * @extends ElementService
 */

var BrowserElementService = function (_ElementService) {
  (0, _inherits3.default)(BrowserElementService, _ElementService);

  function BrowserElementService() {
    (0, _classCallCheck3.default)(this, BrowserElementService);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BrowserElementService).apply(this, arguments));
  }

  (0, _createClass3.default)(BrowserElementService, [{
    key: 'createCanvas',


    /**
     * @override
     */
    value: function createCanvas() {
      return document.createElement('canvas');
    }

    /**
     * @override
     */

  }, {
    key: 'createImage',
    value: function createImage() {
      return document.createElement('img');
    }

    /**
     * @override
     */

  }, {
    key: 'isCanvas',
    value: function isCanvas(element) {
      return element instanceof HTMLCanvasElement;
    }

    /**
     * @override
     */

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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var Service = require('../Service');
var Utilities = require('../../util/Utilities');

/**
 * A service for working with elements.
 *
 * @public
 * @extends Service
 */

var ElementService = function (_Service) {
  (0, _inherits3.default)(ElementService, _Service);

  function ElementService() {
    (0, _classCallCheck3.default)(this, ElementService);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ElementService).apply(this, arguments));
  }

  (0, _createClass3.default)(ElementService, [{
    key: 'createCanvas',


    /**
     * Creates an instance of a canvas element.
     *
     * @return {*} The newly created canvas element.
     * @public
     */
    value: function createCanvas() {
      Utilities.throwUnimplemented('ElementService', 'createCanvas');
    }

    /**
     * Creates an instance of a image element.
     *
     * @return {*} The newly created image element.
     * @public
     */

  }, {
    key: 'createImage',
    value: function createImage() {
      Utilities.throwUnimplemented('ElementService', 'createImage');
    }

    /**
     * Returns whether the specified <code>element</code> is a canvas.
     *
     * @param {*} element - the element to be checked
     * @return {Boolean} <code>true</code> if <code>element</code> is a canvas; otherwise <code>false</code>.
     * @public
     */

  }, {
    key: 'isCanvas',
    value: function isCanvas(element) {
      Utilities.throwUnimplemented('ElementService', 'isCanvas');
    }

    /**
     * Returns whether the specified <code>element</code> is an image.
     *
     * @param {*} element - the element to be checked
     * @return {Boolean} <code>true</code> if <code>element</code> is an image; otherwise <code>false</code>.
     * @public
     */

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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var BrowserElementService = require('./BrowserElementService');
var NodeElementService = require('./NodeElementService');
var ServiceProvider = require('../ServiceProvider');

/**
 * A service provider for the {@link ElementService}.
 *
 * @public
 * @extends ServiceProvider
 */

var ElementServiceProvider = function (_ServiceProvider) {
  (0, _inherits3.default)(ElementServiceProvider, _ServiceProvider);


  /**
   * Creates a new instance of {@link ElementServiceProvider}.
   *
   * @public
   */

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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var Canvas = void 0;
try {
  Canvas = require('canvas');
} catch (error) {
  // Do nothing...
}

var ElementService = require('./ElementService');

/**
 * An implementation of {@link ElementService} intended for use within a Node.js environment but is only supported when
 * the <code>canvas</code> module has also been depended on.
 *
 * @public
 * @extends ElementService
 */

var NodeElementService = function (_ElementService) {
  (0, _inherits3.default)(NodeElementService, _ElementService);

  function NodeElementService() {
    (0, _classCallCheck3.default)(this, NodeElementService);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(NodeElementService).apply(this, arguments));
  }

  (0, _createClass3.default)(NodeElementService, [{
    key: 'createCanvas',


    /**
     * @override
     */
    value: function createCanvas() {
      return new Canvas();
    }

    /**
     * @override
     */

  }, {
    key: 'createImage',
    value: function createImage() {
      return new Canvas.Image();
    }

    /**
     * @override
     */

  }, {
    key: 'isCanvas',
    value: function isCanvas(element) {
      return element instanceof Canvas;
    }

    /**
     * @override
     */

  }, {
    key: 'isImage',
    value: function isImage(element) {
      return element instanceof Canvas.Image;
    }
  }], [{
    key: 'isSupported',


    /**
     * @override
     */
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

/*
 * QRious
 * Copyright (C) 2016 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * TODO: Document
 *
 * @public
 */

var Utilities = function () {
  function Utilities() {
    (0, _classCallCheck3.default)(this, Utilities);
  }

  (0, _createClass3.default)(Utilities, null, [{
    key: 'privatize',


    /**
     * TODO: Document
     *
     * @param {Object} target -
     * @param {Object} source -
     * @return {Object}
     * @public
     * @static
     */
    value: function privatize(target, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          target['_' + key] = source[key];
        }
      }

      return target;
    }

    /**
     * TODO: Document
     *
     * @param {Object} object -
     * @param {String} fieldName -
     * @param {*} value -
     * @param {*} [defaultValue] -
     * @param {Function} [transformer] -
     * @return {Boolean}
     * @public
     * @static
     */

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

    /**
     * TODO: Document
     *
     * @param {String} className -
     * @param {String} methodName -
     * @throws {Error}
     * @public
     * @static
     */

  }, {
    key: 'throwUnimplemented',
    value: function throwUnimplemented(className, methodName) {
      throw new Error('"' + methodName + '" method must be implemented on the ' + className + ' class');
    }

    /**
     * TODO: Document
     *
     * @param {String} string -
     * @return {String}
     * @public
     * @static
     */

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
//# sourceMappingURL=qrious.map
