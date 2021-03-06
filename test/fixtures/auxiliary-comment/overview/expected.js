/*before*/"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "test", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }(undefined)
})["test"];
/*after*/
/*before*/require("foo"); /*after*/

/*before*/require("foo-bar"); /*after*/

/*before*/require("./directory/foo-bar"); /*after*/

var /*before*/_foo = require("foo2") /*after*/;

/*before*/
var _foo2 = babelHelpers.interopRequireDefault(_foo);

/*after*/
var /*before*/_foo3 = require("foo3") /*after*/;

/*before*/var /*after*/foo2 = babelHelpers.interopRequireWildcard(_foo3);

var /*before*/_foo4 = require("foo4") /*after*/;

var /*before*/_foo5 = require("foo5") /*after*/;

/*before*/Object.defineProperty(exports, "test", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }( /*after*/test)
})["test"];
var test = /*before*/Object.defineProperty(exports, "test", {
  enumerable: true,
  get: function (val) {
    return function () {
      return val;
    };
  }( /*after*/5)
})["test"];

/*before*/(0, _foo4.bar) /*after*/( /*before*/_foo2.default /*after*/, /*before*/_foo5.foo /*after*/);

/* my comment */
/*before*/_foo5.foo; /*after*/
/*before*/_foo2.default; /*after*/
