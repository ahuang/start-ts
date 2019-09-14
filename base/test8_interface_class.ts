

/*
例子1 implements interface的作用

为什么需要implements?
    一般来讲，一个类只能继承自另一个类，
    有时候不同类之间可以有一些共有的特性，
    这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。
    接口的实现: 可以理解为不同类之间的公共特性
举例来说，
    门是一个类，防盗门是门的子类。
    如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。
    这时候如果有另一个类，车，也有报警器的功能，
    就可以考虑把报警器提取出来，作为一个接口，
    防盗门和车 这2个不相关的类都可以去实现它 比如下面的Alarm接口
类的继承和实现的区别
    类只能继承另1个类,比如下面的SecurityDoor
    类可以实现多个接口,比如下面的Car
*/

// 父类-门
class Door{
    public constructor(private width: number, private height: number, private color: string){ };
    getInfo(){
        console.log(`Door class: this.width = ${this.width}, this.height = ${this.height}, this.color = ${this.color}`);
    };
}
// 接口-报警功能
interface Alarm{
    alert(): void;
}
// 接口-灯光功能
interface Light{
    lightOn(): void;
    lightOff(): void;
}
// 子类-防盗门: 继承父类-门, 实现接口-报警功能
class SecurityDoor extends Door implements Alarm {
    public constructor(width: number, height: number, color: string) {
        super(width, height, color);
    };
    alert():void{
        console.log('SecurityDoor Alarmimg...');        
    };
}
let myDoor1 = new SecurityDoor(0.5, 2, 'red');
console.log('调用SecurityDoor继承父类Door的getInfo方法');
myDoor1.getInfo();  // 调用继承父类的方法   Door class: this.width = 0.5, this.height = 2, this.color = red
console.log('调用类SecurityDoor实现接口Alarm的方法');
myDoor1.alert(); // 调用实现接口的方法      SecurityDoor Alarmimg...
console.log();
// 类-车: 实现接口-报警功能，实现接口-灯光功能
class Car implements Alarm, Light{
    public constructor(private name: string, private color: string){ };
    getInfo(){
        console.log(`Car class: this.name = ${this.name}, this.color = ${this.color}`);        
    };
    alert(): void{
        console.log('Car Alarmimg... ');        
    };
    lightOn(): void{
        console.log('Car lightOn... ');                
    };
    lightOff(): void{
        console.log('Car lightOff... ');
    };
};
let myCar1 = new Car('mazida', 'blue');
console.log('调用类Car的getInfo方法');
myCar1.getInfo();   // Car class: this.name = mazida, this.color = blue
console.log('调用类Car实现接口Alarm的方法');
myCar1.alert();     // Car Alarmimg... 
console.log('调用类Car实现接口lightOn,lightOff的方法');
myCar1.lightOn();   // Car lightOn...
myCar1.lightOff();  // Car lightOff... 
console.log('------');



/*

例子2 接口继承接口 可以单一继承也可以多个继承
*/
interface Animal{
    color: string;
    age: number    
}

// 单一继承 Frog->Animal
interface Frog extends Animal {
    isHappy: boolean
}
let myFrog: Frog = {color: 'green', age: 1, isHappy: true};
console.log(`myFrog = ${JSON.stringify(myFrog)}`);  // myFrog = {"color":"green","age":1,"isHappy":true}
let myFrog2 = <Frog>{};
myFrog2.color = 'deepGreen';
myFrog2.age = 2;
myFrog2.isHappy = false;
console.log(`myFrog2 = ${JSON.stringify(myFrog2)}`); // myFrog2 = {"color":"deepGreen","age":2,"isHappy":false}

// 多重继承 Hippo->Animal Hippo->Address
interface Address{
    place: string
}
interface Hippo extends Animal, Address{
    mouthRadius: number
}
let myHippo: Hippo = {color: 'gray', age: 0.5, place: 'water', mouthRadius: 0.3};
console.log(`myHippo = ${JSON.stringify(myHippo)}`); // myHippo = {"color":"gray","age":0.5,"place":"water","mouthRadius":0.3}
console.log('------');



/*
例子3 接口继承类
前提条件:
    1. class除了构造函数，不能包含其他函数，否则接口继承时会报错:　Property 'getInfo' is missing in type
    2. class的属性必须为public,不能为private和protected，否则接口继承时会报错: Property 'X' is private in type 'Point3d' but not in type
*/
class Point2dCls {
    public constructor(public X: number, public Y: number){ };
    // getInfo(){
    //     console.log(`Point class: X=${this.X} Y=${this.Y}`);        
    // };
}
interface Point3dInt extends Point2dCls{
    Z: number;
}
let myPoint2d = new Point2dCls(1, 1);
let myPoint3d: Point3dInt = {X: 2, Y: 2, Z: 2};
console.log(`myPoint2d = ${JSON.stringify(myPoint2d)}`);    // myPoint2d = {"X":1,"Y":1}
console.log(`myPoint3d = ${JSON.stringify(myPoint3d)}`);    // myPoint3d = {"X":2,"Y":2,"Z":2}

console.log('------');


/*
例子 混合类型
一个函数还可以有自己的属性和方法
*/
// Counter是一个函数，这个函数包含interval属性和reset方法
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let counterStart = function (start:number) {
        console.log(`start ${start}`);        
    }
    let counter = <Counter> counterStart;
    counter.interval = 123;
    counter.reset = function() {
        console.log('reset!');
        
    }
    return counter;
}
let myCount1 = getCounter();
console.log(myCount1); // { [Function: counter] interval: 123, reset: [Function] }
myCount1(10); // start 10
myCount1.reset(); // reset!
myCount1.interval = 5.0;
console.log('------');






// console.log('------');
export {}