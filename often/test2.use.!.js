"use strict";
exports.__esModule = true;
var a = {
    fruit: {
        name: 'banana',
        price: 3
    }
};
function print(p) {
    console.log('name:', p.fruit.name); // 正常访问  name: banana
    // console.log('name:', p.dog.name); // 异常访问  报错 TypeError: Cannot read property 'name' of undefined
    console.log('name:', p.dog.name); // 异常访问  报错 TypeError: Cannot read property 'name' of undefined
}
print(a);
