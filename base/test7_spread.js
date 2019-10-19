"use strict";
/*
展开数组和对象
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
console.log('-- 展开数组的基本用法---');
var first = [1, 2];
var second = [3, 4];
// 相当于bothPlus=[0].concat(first).concat(second).concat([5])
var bothPlus = __spreadArrays([0], first, second, [5]);
console.log(first); // [ 1, 2 ]
console.log(second); // [ 3, 4 ]
console.log(bothPlus); // [ 0, 1, 2, 3, 4, 5 ]
console.log('-- 展开对象的基本用法---');
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// 展开对象后面的属性 会覆盖 前面的属性
var search = __assign(__assign({}, defaults), { food: "rich" });
console.log(defaults); // { food: 'spicy', price: '$$', ambiance: 'noisy' }
console.log(search); // { food: 'rich', price: '$$', ambiance: 'noisy' }
console.log('-- 展开实例对象---');
var Car = function (brand) {
    this.brand = brand;
    // 这种写法下，run方法不是实例方法,而是实例的一个对象
    this.run = function () {
        console.log("i can run at high speed!");
    };
};
var c1 = new Car('mazida'); // 实例也是对象，所以可以展开
console.log(c1); // Car { brand: 'mazida', run: [Function] }
c1.run(40); // i can run at high speed!
var cloneC1 = __assign({}, c1);
console.log(cloneC1);
cloneC1.run(40); // i can run at high speed!
