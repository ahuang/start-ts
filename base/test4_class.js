"use strict";
/*
topic:  class-based object-oriented programming 基于类的面向对象编程
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/*
class
例子1: class的基本使用
例子2: 继承
例子3: 修饰符public protected private
例子4: readonly修饰符
例子5 参数属性
例子6 静态属性
 */
/*
例子1: class的基本使用
    定义类的成员变量，
    定义构造函数初始化类的成员变量
    定义类的成员函数
*/
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    ;
    Greeter.prototype.sayHi = function () {
        console.log(this.greeting);
    };
    return Greeter;
}());
console.log('Greeter:');
var myGreeter1 = new Greeter('hi, nice to meet you!');
myGreeter1.sayHi(); // hi, nice to meet you!
console.log('------');
/*
例子2: 继承
父类,基类,超类;
子类,派生类
*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    ;
    Animal.prototype.move = function (distance) {
        console.log(this.name + " moved " + distance + " m");
    };
    ;
    return Animal;
}());
;
// 子类通过super方法执行父类的构造函数 并且 子类重写了父类的move方法
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        // 注意！！
        // 子类的构造函数必须调用super方法，之后才能正常使用this, 
        // 这个是TypeScript强制执行的一条重要规则。
        return _super.call(this, name) || this;
    }
    ;
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('snake slitering...');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
console.log('Animal,Snake:');
var snake1 = new Snake('sk1');
snake1.move(); // snake slitering...  sk1 moved 5 m
var snake2 = new Snake('sk2');
snake2.move(100); // snake slitering... sk2 moved 100 m
console.log('------');
/*
例子3: 修饰符public protected private
public
    TypeScript里，成员(包括属性和方法)都默认为 public
private
    只能在当前类内部访问, 子类和实例不能直接访问类的private属性成员
protected
    可以在当前类和子类内部访问, 实例不能直接访问类的private属性成员
    如果构造函数是protected, 则这个类不能在类外实例化,但可以被子类继承
*/
var Plant = /** @class */ (function () {
    // Plant的构造函数是protected修饰符，意味着Plant不能被实例化
    function Plant(name, age, region) {
        this.name = name;
        this.age = age;
        this.region = region;
    }
    return Plant;
}());
;
var Bamboo = /** @class */ (function (_super) {
    __extends(Bamboo, _super);
    // Bamboo的构造函数是public修饰符，意味着Bamboo可以被实例化
    function Bamboo(name, age, region, color) {
        var _this = _super.call(this, name, age, region) || this;
        _this.color = color;
        return _this;
    }
    Bamboo.prototype.getInfo = function () {
        console.log("my name is " + this.name);
        console.log("my age is " + this.age);
        // console.log(`my region is ${this.region}`);// compile error!
    };
    return Bamboo;
}(Plant));
;
console.log('Plant,Bamboo:');
// Plant不可实例化
//  let plant1 = new Plant('tree', 2, 'south'); // compile error!
// Bamboo可以实例化
var bamboo1 = new Bamboo('boom1', 1, 'north', 'lightGreen');
// bamboo1.name=boom1, bamboo1.color=lightGreen
// 不可以访问bamboo1.age和bamboo1.region)
console.log("bamboo1.name=" + bamboo1.name + ", bamboo1.color=" + bamboo1.color);
console.log('------');
/*
例子4: readonly修饰符
    设置属性为只读,readonly属性必须在声明时或者构造函数里被初始化
*/
var Octopus = /** @class */ (function () {
    function Octopus(enviroment, name, legs) {
        this.legs = 8;
        // readonly属性，可以在构造函数可以覆盖声明时的值，实例变量可以读，不可以写
        this.enviroment = enviroment;
        this.legs = legs;
        this.name = name;
    }
    return Octopus;
}());
console.log('Octopus:');
var oct1 = new Octopus('water', 'oct1', 10);
//  oct1.enviroment 和 oct1.legs 只能读不能写, oct1.name 可读可写
console.log(oct1.enviroment, oct1.legs, oct1.name); // water 10 oct1    
oct1.name = 'newOct1';
console.log(oct1.enviroment, oct1.legs, oct1.name); // water 10 newOct1 
console.log('------');
/*
例子5 参数属性
    构造函数的语法糖：使用参数属性，可以把声明和赋值合并到一起
*/
var OriginalAnimal = /** @class */ (function () {
    function OriginalAnimal(name) {
        this.name = name;
    }
    OriginalAnimal.prototype.getInfo = function () {
        console.log("OriginalAnimal: my name is " + this.name);
    };
    return OriginalAnimal;
}());
console.log('OriginalAnimal, BetterAnimal:');
var myOrigin1 = new OriginalAnimal('kawa');
// 实例name只能通过接口方法访问
myOrigin1.getInfo(); // OriginalAnimal: my name is kawa   
var BetterAnimal = /** @class */ (function () {
    // 注意！！ts规定
    // 此构造函数和OriginalAnimal构造函数是等价的
    function BetterAnimal(name) {
        this.name = name;
    }
    ;
    BetterAnimal.prototype.getInfo = function () {
        console.log("BetterAnimal: my name is " + this.name);
    };
    return BetterAnimal;
}());
var myBetter1 = new BetterAnimal('loty');
myBetter1.getInfo(); //BetterAnimal: my name is loty
console.log('------');
/*
例子6 静态属性
静态属性属于类，不是属于实例，可以通过类名.静态属性来访问
*/
var Movie = /** @class */ (function () {
    function Movie(name) {
        this.name = name;
    }
    ;
    Movie.prototype.getInfo = function () {
        console.log("i am movive " + this.name + " and my goal is " + Movie.goal);
    };
    Movie.goal = 'for fun!';
    return Movie;
}());
;
console.log('Movie:');
var myMovie = new Movie('matrix');
// 类Movie内部方法访问Movie.goal静态属性
// i am movive matrix and my goal is for fun!
myMovie.getInfo();
// 类Movie外部直接访问Movie.goal静态属性 
// 静态属性Movie.goal: for fun!
console.log("\u9759\u6001\u5C5E\u6027Movie.goal: " + Movie.goal);
console.log('------');
