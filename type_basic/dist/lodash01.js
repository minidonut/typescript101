"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var print = function (x) { return console.log(x); };
print(lodash_1._.flatten([1, 2, [3, 4]]));
print(lodash_1._.map([1, 2, 3, 4], function (x) { return (Math.pow(x, 3)); }));
var a = [10, 9, 8, 7];
var b = lodash_1._.map(a, function (x) { return (-1 * x); });
print(a);
print(b);
