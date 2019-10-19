"use strict";
/*
解构数组
*/
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
exports.__esModule = true;
console.log('-- 解构数组获取数组内容 ---');
var grades = [80, 90];
var g1 = grades[0], g2 = grades[1];
console.log(g1); // 80
console.log(g2); // 90
console.log('-- 解构数组截取数组部分元素 ---');
var nature = [1, 2, 3, 4, 5];
var a = nature[0];
var b = nature[1], c = nature[3];
var d = nature[0], e = nature[1], rest = nature.slice(2);
console.log(a); // 1
console.log(b, c); //2 4
console.log(d, e, rest); // 1 2 [ 3, 4, 5 ]
console.log('-- 解构数组实现交换swap ---');
var g3 = 50;
var g4 = 60;
console.log(g3, g4); // 50 60
_a = [g4, g3], g3 = _a[0], g4 = _a[1];
console.log(g3, g4); // 60 50
console.log('-- 解构数组作为函数参数 ---');
function fun1(_a) {
    var firstName = _a[0], lastName = _a[1];
    return "fullname: " + firstName + " " + lastName;
}
var fullname = ['san', 'zhang'];
console.log(fun1(fullname)); // fullname: san zhang
/*
解构对象
*/
var obj1 = {
    k1: 'abc',
    k2: 100,
    k3: [1, 2, 3],
    k4: 200,
    k5: 'xyz'
};
console.log('-- 解构对象的基本用法1 ---');
var k1 = obj1.k1, k2 = obj1.k2; // 另一种写法: let k1:string, k2:number; ({k1, k2} = obj1); 
console.log(k1, k2); // abc 100
console.log('-- 解构对象的基本用法2 ---');
var k4, v4, k5, v5;
(v4 = obj1.k4, v5 = obj1.k5); // 冒号不是指示类型
console.log(k4, v4); // undefined 200
console.log(k5, v5); // undefined 'xyz'
console.log('-- 解构对象截取剩余元素 ---');
var k3 = obj1.k3, restK = __rest(obj1, ["k3"]);
console.log(k3); // [ 1, 2, 3 ]
console.log(restK); // { k1: 'abc', k2: 100, k4: 200, k5: 'xyz' }
