/*
topic:  class-based object-oriented programming 基于类的面向对象编程
*/


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
class Greeter {
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    };
    sayHi() {
        console.log(this.greeting);
    }
}
console.log('Greeter:');
let myGreeter1 = new Greeter('hi, nice to meet you!');
myGreeter1.sayHi(); // hi, nice to meet you!
console.log('------');


/*
例子2: 继承
父类,基类,超类; 
子类,派生类
*/
class Animal {
    name: string;
    constructor(name: string){
        this.name = name;
    };
    move(distance: number){
        console.log(`${this.name} moved ${distance} m`);        
    };
};
// 子类通过super方法执行父类的构造函数 并且 子类重写了父类的move方法
class Snake extends Animal {
    constructor(name: string){
        // 注意！！
        // 子类的构造函数必须调用super方法，之后才能正常使用this, 
        // 这个是TypeScript强制执行的一条重要规则。
        super(name); 
    };
    move(distance: number = 5){
        console.log('snake slitering...');
        super.move(distance);
    }
}
console.log('Animal,Snake:');
let snake1 = new Snake('sk1');
snake1.move();   // snake slitering...  sk1 moved 5 m
let snake2: Animal = new Snake('sk2');
snake2.move(100);   // snake slitering... sk2 moved 100 m
console.log('------');



/*
例子3: 修饰符public protected private
public：TypeScript里，成员(包括属性和方法)都默认为 public
private：只能在当前类内部访问, 子类和实例不能直接访问类的private属性成员
protected：可以在当前类和子类内部访问, 实例不能直接访问类的private属性成员
        如果构造函数是protected, 则这个类不能在类外实例化,但可以被子类继承
*/
class Plant {
    // Plant.name是public修饰符,在子类和实例都可以访问
    public name:string;
    // Plant.age是protected修饰符，可以在子类中访问，但是不可以在实例中访问
    protected age: number;
    // Plant.region是private修饰符, 不能在子类中访问，也不能在实例中访问
    private region: string;
    // Plant的构造函数是protected修饰符，意味着Plant不能被实例化
    protected constructor(name:string, age: number, region:string){
        this.name = name;
        this.age = age;
        this.region = region;
    }
};
class Bamboo extends Plant {
    public color: string;
    // Bamboo的构造函数是public修饰符，意味着Bamboo可以被实例化
    public constructor(name: string, age:number, region:string, color: string){
        super(name, age, region);
        this.color = color;
    }
    public getInfo(){
        console.log(`my name is ${this.name}`);
        console.log(`my age is ${this.age}`);
        // console.log(`my region is ${this.region}`);// compile error!
    }
};
console.log('Plant,Bamboo:');

// Plant不可实例化
//  let plant1 = new Plant('tree', 2, 'south'); // compile error!
// Bamboo可以实例化
let bamboo1 = new Bamboo('boom1', 1, 'north','lightGreen');

// bamboo1.name=boom1, bamboo1.color=lightGreen
// 不可以访问bamboo1.age和bamboo1.region)
console.log(`bamboo1.name=${bamboo1.name}, bamboo1.color=${bamboo1.color}`);  
console.log('------');


/*
例子4: readonly修饰符
    设置属性为只读,readonly属性必须在声明时或者构造函数里被初始化
*/
class Octopus{
    // readonly属性，在声明和构造函数中初始化，
    public readonly enviroment: string;
    public readonly legs: number = 8;
    // Octopus.name不是readonly属性，实例变量可以读，也可以写
    public name: string; 
    public constructor(enviroment:string, name: string, legs: number){
        // readonly属性，可以在构造函数可以覆盖声明时的值，实例变量可以读，不可以写
        this.enviroment = enviroment;
        this.legs = legs;
        this.name = name;
    }
}
console.log('Octopus:');
let oct1 = new Octopus('water', 'oct1', 10);
//  oct1.enviroment 和 oct1.legs 只能读不能写, oct1.name 可读可写
console.log(oct1.enviroment, oct1.legs, oct1.name); // water 10 oct1    
oct1.name = 'newOct1'
console.log(oct1.enviroment, oct1.legs, oct1.name);// water 10 newOct1 
console.log('------');





/*
例子5 参数属性
    构造函数的语法糖：使用参数属性，可以把声明和赋值合并到一起
*/
class OriginalAnimal{
    private name:string;
    public constructor(name: string){
        this.name = name;
    }
    getInfo(){
        console.log(`OriginalAnimal: my name is ${this.name}`);
    }
}
console.log('OriginalAnimal, BetterAnimal:');

let myOrigin1 = new OriginalAnimal('kawa');
// 实例name只能通过接口方法访问
myOrigin1.getInfo();// OriginalAnimal: my name is kawa   

class BetterAnimal{
    // 注意！！ts规定
    // 此构造函数和OriginalAnimal构造函数是等价的
    constructor(private name:string){}; 
    getInfo(){
        console.log(`BetterAnimal: my name is ${this.name}`);      
    }
}
let myBetter1 = new BetterAnimal('loty');
myBetter1.getInfo(); //BetterAnimal: my name is loty
console.log('------');



/*
例子6 静态属性 
静态属性属于类，不是属于实例，可以通过类名.静态属性来访问
*/
class Movie{
    public static goal:string = 'for fun!';
    public constructor(public name:string) { };
    public getInfo(){
        console.log(`i am movive ${this.name} and my goal is ${Movie.goal}`);
    }
};
console.log('Movie:');
let myMovie = new Movie('matrix');
// 类Movie内部方法访问Movie.goal静态属性
// i am movive matrix and my goal is for fun!
myMovie.getInfo(); 
// 类Movie外部直接访问Movie.goal静态属性 
// 静态属性Movie.goal: for fun!
console.log(`静态属性Movie.goal: ${Movie.goal}`);
console.log('------'); 

export {}