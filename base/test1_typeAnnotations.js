"use strict";
/*
topic: （type annotations 类型校验)
校验传参类型和传参数目
注意：即使出现编译error，编译还是会完成
*/
exports.__esModule = true;
// 参数带上类型
function greeter(person) {
    return "hello" + person;
}
var user = [1, 2, 3];
