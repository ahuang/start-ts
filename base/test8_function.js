"use strict";
exports.__esModule = true;
console.log('---  函数的完整写法 ---');
var myAdd1 = function (x, y) {
    return x + y;
};
// myAdd2是myAdd1的完整写法
// (x: number, y: number) => number 这是一个整体， 表示myAdd2的类型是函数
var myAdd2 = function (x, y) {
    return x + y;
};
console.log("myAdd1: " + myAdd1(111, 222)); // myAdd1: 333
console.log("myAdd2: " + myAdd2(111, 222)); // myAdd1: 333
console.log('---  函数的可选参数 ---');
// 可选参数定义的位置 必须跟在 必须参数后面
function buildName(firstName, middleName, lastName) {
    return firstName + " " + middleName + " " + lastName;
}
var name2 = buildName('bob', 'simes');
var name3 = buildName('bob', 'simes', 'charli');
console.log("buildName name2=" + name2); // buildName name2=bob simes undefined
console.log("buildName name3=" + name3); // buildName name3=bob simes charli
console.log('---  函数的默认参数 ---');
// 默认参数定义的位置没有要求，调用时需要显式传入undefined给默认参数  
function buildDevice(brand, type) {
    if (brand === void 0) { brand = 'xiaomi'; }
    return brand + " " + type;
}
var device1 = buildDevice('oppo', 'r11');
var device3 = buildDevice(undefined, '红米');
console.log("buildDevice device1=" + device1); // buildDevice device1=oppo r11
console.log("buildDevice device3=" + device3); // buildDevice device3=xiaomi 红米
console.log('---  函数的剩余参数  ---');
// ...restMovies，表示将剩余的参数接收后组装到restMovies数组里
function buildTopMovies(firstMovie) {
    var restMovies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restMovies[_i - 1] = arguments[_i];
    }
    console.log("restMovies " + restMovies);
    console.log("restMovies " + Object.prototype.toString.call(restMovies));
    return firstMovie + ", " + restMovies.join(", ");
}
var top3Movies = buildTopMovies('黑客帝国', '美丽心灵', '阿甘正传');
console.log("top3Movies: " + top3Movies);
console.log('--- 函数重载 ---');
function addAll(x) {
    if (x instanceof Array) {
        return x.join(',');
    }
    else if (x instanceof Object) {
        return x.name + "," + x.age;
    }
}
console.log("\u53C2\u6570\u4E3Aarray: " + addAll([1, 2, 3]));
console.log("\u53C2\u6570\u4E3Aobject: " + addAll({ name: 'haha', age: 19 }));
