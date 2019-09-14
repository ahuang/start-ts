/*
topic: (interface 抽象接口定义)
interface  
作用：
    1) 描述带有属性的普通对象,用于类型检查 例子1，2，3
    2) 描述函数类型 例子4
    3) 描述索引类型 例子5 
*/






/*
例子1 属性检查
interface用来定义一种数据结构，它包含一些属性和属性类型，服务于类型检查。
隐式类型检查(普通对象)只检查那些必需的属性是否存在，并且类型是否匹配，并且不会检查类型的顺序，也就是说相应属性存在并且类型是对的就可以。
显式类型检查(显示interface对象)需要匹配属性名和属性个数，不能有多余属性，但顺序也不检查
*/
// interface定义
interface Person { firstName: string; lastName: string}

//  interface使用: 函数形参
function greeter(p: Person){
    console.log("hello, " + p.firstName + " " + p.lastName);
}

// 隐式类型检查，user作为参数传递，是interface的一种实现
let intUser1 = {lastName: "Green",firstName: "Jane", middlename: 'naught'};

// 显式类型检查
let intUser2: Person = {lastName: "Zac",firstName: "nava"}; // compile ok!
// let intUser2: Person = {lastName: "Zac",firstName: "nava", middlename: 'lily'}; // compile error!

console.log('属性检查:');
greeter(intUser1); // hello, Jane Green
greeter(intUser2); // hello, nava Zac
console.log('------');





/*
例子2 可选属性
属性名称后接问号，就形成了可选属性
可选属性的作用：1，可以对可能属性进行预定义；2，可以捕获应用了不存在属性时的错误，比如不小心将color拼错为colr时，会报错
*/
interface SquareConfig { color?: string, width?: number }
// 小括号内的冒号表示参数类型， 小括号和花括号之间的冒号表示 花括号为返回值数据结构
function createSquare(config: SquareConfig): {color: string, area: number} {
    let newSquare = {color: 'white', area: 100}; // 这是返回值结构
    if(config.color){
        newSquare.color = config.color;
    };
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    console.log('newSquare: ', newSquare);
    return newSquare;
}
console.log('可选属性:');
createSquare({});                            // { color: 'white', area: 100 }
createSquare({color: 'black'});             //  { color: 'black', area: 100 }
createSquare({width: 5});                   //  { color: 'white', area: 25 }
createSquare({color: 'red', width: 1});     // { color: 'red', area: 1 }
// 使用类型断言(类型转化)可以解决多余属性的检查
createSquare({color: 'red', opactiy: 0.5} as SquareConfig);  //  { color: 'red', area: 100 }
// compile error: 'colr' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
// createSquare({colr: 'red', width: 0.5}); 
console.log('------');












/*
例子3 只读属性
只读属性通过readonly, ReadonlyArray定义
只读属性只有第一次初始化时可以被赋值，之后只能读，不能写了
*/
// 只读属性
interface Point { readonly x: number; readonly y: number }

console.log('只读属性:');
// 只读属性
let p1: Point = {x: 1, y:2}
console.log(p1.x, p1.y); //ok  1 2
// p1.x = 3; // error: Cannot assign to 'x' because it is a read-only property.

// 只读数组
let intArr2: ReadonlyArray<number> = [4,5,6];
console.log(intArr2); // [ 4, 5, 6 ]
// intArr2[0] = 400; //  error:Index signature in type 'readonly number[]' only permits reading.
console.log('------');








/*
例子4 函数接口
组成：函数参数列表 : 函数返回值类型
*/
interface searchFun {
    (source: string, subString: string) : boolean
}
let mySearchFun: searchFun = function(src: string, sub:string): boolean{
    let result = src.search(sub);
    return result > -1;
}
console.log('函数接口:');
console.log(mySearchFun('abc123abc', '123')); // true
console.log(mySearchFun('abc123abc', '1234')); // false
console.log('------');







/*
例子5 索引签名
共有支持两种索引签名：字符串和数字。
1. 数字索引的返回值必须是字符串索引返回值类型的子类型。
    意思是说索引签名number和string类型同时存在时，2个的返回值类型需要相同
    这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 
    也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
2. 存在索引签名的interface要求所有属性与其返回值类型相匹配
3. 索引签名可以设置为只读
*/

// Grades: 索引签名为number类型，返回值类型为number.
// 个人理解：凡是符合通过number索引得到的返回值为number的类型
console.log('索引签名: ');
interface Grades {
    [x: number]: number
};
// 索引为隐式类型下标:number 返回值显示定义为:number
let myGrade: Grades = [90,95,100];
let grade0: number = myGrade[0]
console.log(`grade0=${grade0}`); // grade0=90


// NameGrades: 索引签名为string类型，返回值类型为number.
interface NameGrades {
    [y: string]: number
};
let myNameGrades: NameGrades = {'lily': 80, 'lucy': 90,  'Jonny': 100};
let lucyGrades: number = myNameGrades['Jonny'];
console.log(`lucyGrades=${lucyGrades}`); // lucyGrades=100


// Okay: 索引签名number和string类型同时存在时，2个的返回值类型需要相同!!
interface Okay {
    [x: number]: string;
    [x: string]: string;
}
let myOkay: Okay = {'name': 'micky', 10: 'haha'};
let okRet1: string = myOkay['name'];
let okRet2: string = myOkay[10];
console.log(`okRet1=${okRet1}, okRet2=${okRet2}`); // okRet1=micky, okRet2=haha
// 索引签名number和string类型同时存在时，2个的返回值类型不同时，编译报错
//  Numeric index type 'number' is not assignable to string index type 'string'.
// interface NotOkay {
//     [x: number]: number;
//     [x: string]: string;
// }


// 字符串索引签名能够很好的描述dictionary模式，并且它们也会确保所有属性与其返回值类型相匹配
// 因为字符串索引声明了 obj.property和obj["property"]两种形式都可以。
interface nameDictionary {
    [index: number]: number, // 规定了所有字符串为所有返回的值为number
    length: number, // ok length属于字符串索引，返回值为number
}
let myNameDictionary: nameDictionary = [1,2,3];
console.log(`myNameDictionary=${myNameDictionary}`); // myNameDictionary=1,2,3



// 索引签名可以设置为只读
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myReadonlyStringArray: ReadonlyStringArray = ['Alice', 'Bob'];
console.log(`myReadonlyStringArray=${myReadonlyStringArray}`); // myReadonlyStringArray=Alice,Bob

console.log('------');

export {}

