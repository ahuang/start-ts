"use strict";
/*
topic: (interface 抽象接口定义)
interface
作用：
    1) 描述带有属性的普通对象,用于类型检查 例子1，2，3
    2) 描述函数类型 例子4
    3) 描述索引类型 例子5
*/
exports.__esModule = true;
//  interface使用: 函数形参
function greeter(p) {
    console.log("hello, " + p.firstName + " " + p.lastName);
}
// 隐式类型检查，user作为参数传递，是interface的一种实现
var intUser1 = { lastName: "Green", firstName: "Jane", middlename: 'naught' };
// 显式类型检查
var intUser2 = { lastName: "Zac", firstName: "nava" }; // compile ok!
// let intUser2: Person = {lastName: "Zac",firstName: "nava", middlename: 'lily'}; // compile error!
console.log('属性检查:');
greeter(intUser1); // hello, Jane Green
greeter(intUser2); // hello, nava Zac
console.log('------');
// 小括号内的冒号表示参数类型， 小括号和花括号之间的冒号表示 花括号为返回值数据结构
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 }; // 这是返回值结构
    if (config.color) {
        newSquare.color = config.color;
    }
    ;
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    console.log('newSquare: ', newSquare);
    return newSquare;
}
console.log('可选属性:');
createSquare({}); // { color: 'white', area: 100 }
createSquare({ color: 'black' }); //  { color: 'black', area: 100 }
createSquare({ width: 5 }); //  { color: 'white', area: 25 }
createSquare({ color: 'red', width: 1 }); // { color: 'red', area: 1 }
// 使用类型断言(类型转化)可以解决多余属性的检查
createSquare({ color: 'red', opactiy: 0.5 }); //  { color: 'red', area: 100 }
// compile error: 'colr' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
// createSquare({colr: 'red', width: 0.5}); 
console.log('------');
console.log('只读属性:');
// 只读属性
var p1 = { x: 1, y: 2 };
console.log(p1.x, p1.y); //ok  1 2
// p1.x = 3; // error: Cannot assign to 'x' because it is a read-only property.
// 只读数组
var intArr2 = [4, 5, 6];
console.log(intArr2); // [ 4, 5, 6 ]
// intArr2[0] = 400; //  error:Index signature in type 'readonly number[]' only permits reading.
console.log('------');
var mySearchFun = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
console.log('函数接口:');
console.log(mySearchFun('abc123abc', '123')); // true
console.log(mySearchFun('abc123abc', '1234')); // false
console.log('------');
/*
例子5 索引签名
共有支持两种索引签名：字符串和数字。
1. 数字索引的返回值必须是字符串索引返回值类型的子类型。
    意思是说索引签名number和string类型同时存在时，2个的返回值类型需要相同
    这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。
    也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
2. 存在索引签名的interface要求所有属性与其返回值类型相匹配
3. 索引签名可以设置为只读
*/
// Grades: 索引签名为number类型，返回值类型为number.
// 个人理解：凡是符合通过number索引得到的返回值为number的类型
console.log('索引签名: ');
;
// 索引为隐式类型下标:number 返回值显示定义为:number
var myGrade = [90, 95, 100];
var grade0 = myGrade[0];
console.log("grade0=" + grade0); // grade0=90
;
var myNameGrades = { 'lily': 80, 'lucy': 90, 'Jonny': 100 };
var lucyGrades = myNameGrades['Jonny'];
console.log("lucyGrades=" + lucyGrades); // lucyGrades=100
var myOkay = { 'name': 'micky', 10: 'haha' };
var okRet1 = myOkay['name'];
var okRet2 = myOkay[10];
console.log("okRet1=" + okRet1 + ", okRet2=" + okRet2); // okRet1=micky, okRet2=haha
var myNameDictionary = [1, 2, 3];
console.log("myNameDictionary=" + myNameDictionary); // myNameDictionary=1,2,3
var myReadonlyStringArray = ['Alice', 'Bob'];
console.log("myReadonlyStringArray=" + myReadonlyStringArray); // myReadonlyStringArray=Alice,Bob
console.log('------');
