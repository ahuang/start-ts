"use strict";
/*
基础类型
boolean, number, string, array, tuple, any, enum,  void, undefined/null, <>
*/
exports.__esModule = true;
// boolean
var isDone = true;
var disabled = false;
console.log("boolean");
console.log("isDone: " + isDone); // isDone: true
console.log("disabled: " + disabled); //disabled: false
console.log("------");
// number 
// 十进制,十六进制,八进制,二进制
var n1 = 666;
var n2 = 0x0a;
var n3 = 15;
var n4 = 3;
console.log("number");
console.log("n1: " + n1); // n1: 666
console.log("n2: " + n2); // n2: 10
console.log("n3: " + n3); // n3: 15
console.log("n4: " + n4); // n4: 3
console.log("------");
// string
// 支持模板字符串
var myname = 'john';
var myage = 18;
var greeting = "i am " + myname + " and i am " + myage + " years old!";
console.log("string");
console.log(greeting); // i am john and i am 18 years old!
console.log("------");
// array
// 2种定义方式
var arr1 = ['a', 'b'];
var arr2 = [1, 2, 3];
console.log("array");
console.log(arr1); // [ 'a', 'b' ]
console.log(arr2); // [ 1, 2, 3 ]
console.log("------");
// tuple 元组
// 特殊的数组 定义了类型和数目的数组
var tp1 = [1, 'abc'];
var tp2 = [1, 'abc', ''];
tp2[2] = 'x';
console.log("tuple");
console.log(tp1); // [ 1, 'abc' ]
console.log(tp2); // [ 1, 'abc', 'x' ]
console.log("------");
// enum
// 可以全部默认赋值，部分手动赋值，全部手动赋值
// 枚举的作用是：可以通过下标反过来获取对应的key
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c1 = Color.Red;
var c2 = Color.Green;
var c3 = Color.Blue;
var cname1 = Color[2];
console.log("enum");
console.log(c1); // 2
console.log(c2); // 1
console.log(c3); // 2 自动计算的吧
console.log(cname1); // 'Blue' 对应的是key
console.log("------");
// any
// 任意值 不确定类型的变量 
// 1.不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
// 2.调用不存在的方法时，编译时通过运行时报错
console.log('any');
var notSure;
notSure = 1;
console.log(notSure); // 1
notSure = 'abc';
console.log(notSure); // 'abc'
console.log("------");
// void
// 它表示没有任何类型。 
// 常用语当一个函数没有返回值的情况
function f1() {
    console.log('no return');
}
function f2() {
    return 'have return';
}
console.log('void');
console.log(f1()); // void -> no return
console.log(f2()); // have return
console.log("------");
// undefined null
var empty1 = undefined;
var empty2 = null;
console.log('undefined null');
console.log(empty1); //  undefined
console.log(empty2); //  null
console.log("------");
// <>
// 类型断言，表示程序员非常确认类型，可以实现类型自动转化
console.log('undefined null');
var verysure = 'very sure type';
var verysureLength = verysure.length;
console.log('<>');
console.log(verysure); // very sure type
console.log(verysureLength); // 14
console.log("------");
