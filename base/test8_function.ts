
console.log('---  函数的完整写法 ---');
let myAdd1 = function(x: number, y: number) :number {
    return x+y;
}
// myAdd2是myAdd1的完整写法
// (x: number, y: number) => number 这是个整体， 表示myAdd2的类型是函数
let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number { 
    return x + y; 
};
console.log(`myAdd1: ${myAdd1(111,222)}`); // myAdd1: 333
console.log(`myAdd2: ${myAdd2(111,222)}`); // myAdd1: 333



console.log('---  函数的可选参数 ---');
// 可选参数定义的位置 必须跟在 必须参数后面
function  buildName(firstName: string, middleName: string, lastName?: string) {
    return firstName + " " + middleName + " " + lastName;
}
let name2 = buildName('bob', 'simes') 
let name3 = buildName('bob', 'simes', 'charli');  
console.log(`buildName name2=${name2}`);   // buildName name2=bob simes undefined
console.log(`buildName name3=${name3}`);   // buildName name3=bob simes charli


console.log('---  函数的默认参数 ---');
// 默认参数定义的位置没有要求，调用时需要显式传入undefined给默认参数  
function buildDevice(brand: string = 'xiaomi', type: string) {
    return brand + " " + type;    
}
let device1 = buildDevice('oppo', 'r11'); 
let device3 = buildDevice(undefined, '红米');
console.log(`buildDevice device1=${device1}`);  // buildDevice device1=oppo r11
console.log(`buildDevice device3=${device3}`);  // buildDevice device3=xiaomi 红米


console.log('---  函数的剩余参数  ---');
// ...restMovies，表示将剩余的参数接收后组装到restMovies数组里
function buildTopMovies(firstMovie: string, ...restMovies: string[]) {
    console.log(`restMovies ${restMovies}`);  // restMovies 美丽心灵,阿甘正传
    console.log(`restMovies ${Object.prototype.toString.call(restMovies)}`);  //restMovies [object Array]
    return firstMovie + ", " + restMovies.join(", ");
}
let top3Movies = buildTopMovies('黑客帝国', '美丽心灵', '阿甘正传');
console.log(`top3Movies: ${top3Movies}`); // top3Movies: 黑客帝国, 美丽心灵, 阿甘正传



console.log('--- 函数重载 ---');
// 前2个的函数声明意义: 限制addAll接收的参数类型只能是array和object
// 如果没有前2个函数声明: 没有对addAll接收参数做限制，任何类型都可以传入
function addAll(x: number[]): string; // 函数声明，接受数组参数
function addAll(x: {name:string, age: number}): string; // 函数声明，接受对象参数
function addAll(x:any): string{ // 函数定义
    if(x instanceof Array){
        return x.join(',');
    }else if (x instanceof Object){
        return `${x.name},${x.age}`;
    }
}
console.log(`参数为array: ${addAll([1,2,3])}`); // 参数为array: 1,2,3
console.log(`参数为object: ${addAll({name:'haha', age: 19})}`); // 参数为object: haha,19
// console.log(`参数为object: ${addAll('123test')}`); // error  No overload matches this call




/*
例子3: 
    getName返回普通函数，ts属于严格模式，myName调用者是undefined
    getEmail返回箭头函数，父函数是普通函数getEmail，getEmail调用这是user，因此getEmail定义这作用域是user 
*/
let user = {
    name: 'haha',
    email: 'haha@123.com',
    getName: function() {
        return function() {
            console.log(`getName this: `, this)
            return `name is ${this && this.name}`;
        }
    },
    getEmail: function() {
        return () => {
            console.log(`getEmail this: `, this)
            return `email is ${this.email}`;
        }
    }
}
let myName = user.getName(); 
// getName this: undefined
console.log(`myName is ${myName()}`); // myName is name is undefined

let myEmail = user.getEmail();
// getEmail this: user
console.log(`myEmail is ${myEmail()}`); // myEmail is email is haha@123.com



// 同getEmail箭头函数，getFruit返回的是箭头函数，并且父函数指定了this为food 
interface food {
    fruit: string,
    getFruit(this: food): () => string
}
let food = {
    fruit: 'orange',
    getFruit: function(this: food) {
        return () => {
            return `fruit is ${this.fruit}`;
        }
    }
};
let myFruit = food.getFruit();
console.log(`myFruit is ${myFruit()}`); // myFruit is fruit is orange






export {}