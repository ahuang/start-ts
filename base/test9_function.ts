




/*
例子1: 函数的完整写法
myAdd2是myAdd1的完整写法
*/
let myAdd1 = function(x: number, y: number) :number {
    return x+y;
}

let myAdd2: (x: number, y: number) => number = function(x: number, y: number): number { 
    return x + y; 
};
console.log(`myAdd1: ${myAdd1(111,222)}`);
console.log(`myAdd2: ${myAdd2(111,222)}`);
console.log('------');




/*
例子2： 可选参数和默认参数
可选参数: 可选参数必须跟在必须参数后面
默认参数: 带默认值的参数可以在必须参数前，也可以在必须参数后，如果在必须参数前，则如果需要使用默认参数，需要显式传入undefined给默认参数    
剩余参数: 可能没有，可能1个，可能有多个
*/

// 可选参数
function  buildName(firstName: string, middleName: string, lastName?: string) {
    return firstName + " " + middleName + " " + lastName;
}
// let name1 = buildName('bob'); // error Expected 2-3 arguments, but got 1.
let name2 = buildName('bob', 'simes') // ok bob simes undefined
let name3 = buildName('bob', 'simes', 'charli');  // ok bob simes charli
// let name4 = buildName('bob', 'simes', 'charli', 'niko'); // error Expected 2-3 arguments, but got 4.
console.log(`buildName name2=${name2}`);  
console.log(`buildName name3=${name3}`);  


// 默认参数
function buildDevice(brand: string = 'xiaomi', type: string) {
    return brand + " " + type;    
}
let device1 = buildDevice('oppo', 'r11'); // ok oppo r11
// let device2 = buildDevice('r11'); // error Expected 2 arguments, but got 1.
let device3 = buildDevice(undefined, '红米')    // ok xiaomi 红米
console.log(`buildDevice device1=${device1}`); 
console.log(`buildDevice device3=${device3}`); 


// 剩余参数 
function buildTopMovies(firstMovie: string, ...restMovies: string[]) {
    console.log(`restMovies ${restMovies}`);
    return firstMovie + ", " + restMovies.join(", ");
}
let top3Movies = buildTopMovies('黑客帝国', '美丽心灵', '阿甘正传');
console.log(`top3Movies: ${top3Movies}`);
console.log('------');






/*
例子3: this参数
    getName返回的是普通函数，this指向调用者，也就是window
    getEmail返回的是箭头函数，this指向定义者，也就是user 
    getFruit返回的是箭头函数，并且父函数指定了this为food
*/

let user = {
    name: 'haha',
    email: 'haha@123.com',
    getName: function() {
        return function() {
            return `name is ${this.name}`;
        }
    },
    getEmail: function() {
        return () => {
            return `email is ${this.email}`;
        }
    }
}
let myName = user.getName(); 
console.log(`myName is ${myName()}`); // myName is name is undefined
let myEmail = user.getEmail();
console.log(`myEmail is ${myEmail()}`); // myEmail is email is haha@123.com



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
console.log('------');



/*
例子4 函数重载

*/

function addAll(x: number[]): string;
function addAll(x: {name:string, age: number}): string;
function addAll(x:any): string{
    if(x instanceof Array){
        return x.join(',');
    }else if (x instanceof Object){
        return `${x.name},${x.age}`;
    }
}
console.log(`参数为array: ${addAll([1,2,3])}`);
console.log(`参数为object: ${addAll({name:'haha', age: 19})}`);
console.log('------');





export {}