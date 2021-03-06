

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

// 定义父类Door
class Door{
    /** 
     * 下面一行（参数属性）同时完成: 声明成员变量 + 定义构造函数 ，相当于
     *      private width:number,
     *      private height:number,
     *      private color:string
     *      public constructor(width:number,height:number,color:string){
     *          this.width = width;
     *          this.height = height;
     *          this.color = color;
     *      }
     * */
    public constructor(private width: number, private height: number, private color: string){ };
    getInfo(){
        console.log(`Door class: width=${this.width}, height=${this.height}, color=${this.color}`);
    };
}
// 定义接口Alarm，报警功能
interface Alarm{
    alert(): void
}
// 定义子类SecurityDoor，防盗门: 继承父类(门)+实现接口(报警)
class SecurityDoor extends Door implements Alarm {
    public constructor(width: number, height: number, color: string) {        
        super(width, height, color); // 子类构造函数必须调用super
    };
    alert():void{
        console.log('SecurityDoor 滴～ 报警...');        
    };
}
console.log('---防盗门---');
let myDoor1 = new SecurityDoor(0.5, 2, 'red');
// 继承父类的方法
myDoor1.getInfo();  // Door class: width=0.5, height=2, color=red
// 接口的实现方法
myDoor1.alert();    // SecurityDoor 滴～ 报警...

// 接口-灯光功能
interface Light{
    lightOn(): void
}
// 定义类车: 实现接口(报警,灯光)
class Car implements Alarm, Light{
    public constructor(private name: string, private color: string){ };
    getInfo(){
        console.log(`Car class: name=${this.name}, color=${this.color}`);        
    };
    alert(): void{
        console.log('Car 啊呜啊呜 报警... ');        
    };
    lightOn(): void{
        console.log('Car 开灯啦... ');                
    };
};
console.log('--- 警车 ---');
let myCar1 = new Car('mazida', 'blue');
// 类Car方法
myCar1.getInfo();   // Car class: name=mazida, color=blue
// 接口的实现方法
myCar1.alert();     // Car 啊呜啊呜 报警... 
// 接口的实现方法
myCar1.lightOn();   // Car 开灯啦... 



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
console.log('--- 青蛙Frog ---');
//  使用方式1
let myFrog1: Frog = {color: 'green', age: 1, isHappy: true};
// myFrog1={"color":"green","age":1,"isHappy":true}
console.log(`myFrog1=${JSON.stringify(myFrog1)}`);
//  使用方式2
let myFrog2 = <Frog>{};
myFrog2.color = 'deepGreen';
myFrog2.age = 2;
myFrog2.isHappy = false;
// myFrog2={"color":"deepGreen","age":2,"isHappy":false}
console.log(`myFrog2=${JSON.stringify(myFrog2)}`);

// 多重继承 Hippo->Skin+Address
interface Skin{
    color: string
}
interface Address{
    place: string
}
interface Hippo extends Skin, Address{
    mouthRadius: number
}
console.log('--- 河马Hippo ---');
let myHippo: Hippo = {color: 'gray', place: 'water', mouthRadius: 0.3};
// myHippo={"color":"gray","place":"water","mouthRadius":0.3}
console.log(`myHippo=${JSON.stringify(myHippo)}`);



/*
例子3 接口继承类
前提条件:
    1. class除了构造函数，不能包含其他函数
        否则接口继承时会报错:　Property 'getInfo' is missing in type
    2. class的成员变量必须为public,不能为private和protected，
        否则接口继承时会报错: Property 'X' is private in type 'Point3d' but not in type
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
console.log('--- Point2dCls Point3dInt ---');
let myPoint2d = new Point2dCls(1, 1);
let myPoint3d: Point3dInt = {X: 2, Y: 2, Z: 2};
// myPoint2d={"X":1,"Y":1}
console.log(`myPoint2d=${JSON.stringify(myPoint2d)}`);
// myPoint3d={"X":2,"Y":2,"Z":2}
console.log(`myPoint3d=${JSON.stringify(myPoint3d)}`);




/*
例子 混合类型
函数还可以有自己的属性和方法
*/
interface Counter {
    (start: number): string; // 决定了Counter是函数接口,接口的本质
    interval: number; // Counter包含interval属性
    reset(): void;  // Counter包含reset方法
}

function getCounter(): Counter { // getCounter 返回值是:Counter函数接口
    // Counter函数接口的实现
    let counterStart = function (start:number) {
        console.log(`start ${start}`);        
    }
    let counter = <Counter> counterStart;
    // 函数包含的属性和方法
    counter.interval = 123;
    counter.reset = function() {
        console.log('reset!');
    }
    return counter;
}
console.log('--- Counter 函数接口 ---');
let myCount1 = getCounter(); // 返回的是包含interval属性和reset方法的函数接口
// { [Function: counterStart] interval: 123, reset: [Function] }
console.log(myCount1);  // 函数定义
// start 10
myCount1(10); // 调用函数
// reset!
myCount1.reset(); // 调用函数的reset方法
myCount1.interval = 5.0; // 赋值函数的interval属性


export {}