var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 使用ts语法的小例子
function add(x, y) {
    return x + y;
}
console.log(add(1, 2)); // 3
// 装饰器
function fun(target) {
    console.log('target: ', target); // 看看target是啥 [Function: Hello]
    target.prototype.name = 'fun';
    target.prototype.run = function () {
        console.log('这是run方法');
    };
}
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello = __decorate([
        fun
    ], Hello);
    return Hello;
}()); // 使用了注解的孔类
var a = new Hello();
console.log(a.name); // fun
a.run(); // 这是run方法
// 可传参的装饰器
function bar(msg) {
    return function (target) {
        target.prototype.name = 'bar';
        target.prototype.print = function () {
            console.log('msg: ', msg);
        };
    };
}
var World = /** @class */ (function () {
    function World() {
    }
    World = __decorate([
        bar('处理成功')
    ], World);
    return World;
}());
;
var b = new World();
console.log(b.name); // bar
b.print(); // msg:  处理成功
