/*
基础类型
boolean, number, string, array, tuple, any, enum,  void, undefined/null, <>
*/


// boolean
let isDone: boolean = true;
let disabled: boolean = false;
console.log(`boolean`);
console.log(`isDone: ${isDone}`);   // isDone: true
console.log(`disabled: ${disabled}`); //disabled: false
console.log(`------`);

// number 
// 十进制,十六进制,八进制,二进制
let n1: number = 666;
let n2: number = 0x0a;
let n3: number = 0o17;
let n4: number = 0b11;
console.log(`number`);
console.log(`n1: ${n1}`); // n1: 666
console.log(`n2: ${n2}`); // n2: 10
console.log(`n3: ${n3}`); // n3: 15
console.log(`n4: ${n4}`); // n4: 3
console.log(`------`);

// string
// 支持模板字符串
let myname: string = 'john';
let myage: number = 18;
let greeting: string = `i am ${myname} and i am ${myage} years old!`
console.log(`string`);
console.log(greeting); // i am john and i am 18 years old!
console.log(`------`);

// array
// 2种定义方式
let arr1: string[] = ['a','b'];
let arr2: Array<number> = [1,2,3];
console.log(`array`);
console.log(arr1); // [ 'a', 'b' ]
console.log(arr2); // [ 1, 2, 3 ]
console.log(`------`);


// tuple 元组
// 特殊的数组 定义了类型和数目的数组(指定每个元素的类型)
let tp1: [number, string] = [1,'abc'];
let tp2: [number, string, string] = [1,'abc', ''];
tp2[2] = 'x';
// tp2[3] = 'y'; // tuple定义后，不能再新增元素
console.log(`tuple`);
console.log(tp1); // [ 1, 'abc' ]
console.log(tp2); // [ 1, 'abc', 'x' ]
console.log(`------`);

// enum
// 可以全部默认赋值，部分手动赋值，全部手动赋值
// 枚举的作用是：可以通过下标反过来获取对应的key
enum Color {Red = 2, Green = 1, Blue};
let c1: Color = Color.Red;
let c2: Color = Color.Green;
let c3: Color = Color.Blue;
let cname1: string = Color[2];
console.log(`enum`);
console.log(c1); // 2
console.log(c2); // 1
console.log(c3); // 2 自动计算的吧
console.log(cname1); // 'Blue' 对应的是key
console.log(`------`);


// any
// 任意值 不确定类型的变量 
// 1.不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
// 2.调用不存在的方法时，编译时通过运行时报错
console.log('any');
let notSure: any;
notSure = 1;
console.log(notSure); // 1
notSure = 'abc';
console.log(notSure); // 'abc'
console.log(`------`);


// void
// 它表示没有任何类型。 
// 常用语当一个函数没有返回值的情况
function f1(): void{
    console.log('no return');
}
function f2(): string{
    return 'have return'
}
console.log('void');
console.log(f1()); // void -> no return
console.log(f2()); // have return
console.log(`------`);


// undefined null
let empty1: undefined = undefined;
let empty2: null = null;
console.log('undefined null');
console.log(empty1); //  undefined
console.log(empty2); //  null
console.log(`------`);


// <>
// 类型断言，表示程序员非常确认类型，可以实现类型自动转化
let verysure: any = 'very sure type';
let verysureLength: number = (<string>verysure).length;
console.log('<>');
console.log(verysure); // very sure type
console.log(verysureLength); // 14
console.log(`------`);


// 泛型 Generics
// 定义函数、接口或类时，不预先指定具体类型，在使用时再指定类型的一种特性

// 没使用泛型：生成长度为n，默认值为v的数组
function genArray (n: Number, v: any): Array<any> {
    let result = [];
    for(let i=0; i<n; i++){
        result[i] = v;
    }
    return result;
}

// 使用泛型 相同概念
// 函数名后添加 <T>用来定义任意输入类型，然后在参数v和返回值类型使用了T
function genArray1<T> (n: Number, v: T): Array<T> {
    let result = [];
    for(let i=0; i<n; i++){
        result[i] = v;
    }
    return result;
}
console.log('泛型 Generics');
console.log(genArray(3, 'x')); // [ 'x', 'x', 'x' ]
console.log(genArray1<Number>(3, 100)); // 显示指定泛型类型 [ 100, 100, 100 ]
console.log(genArray1(3, true)); // 没有显示置顶 ts能类型推论 [ true, true, true ]


// 使用泛型：多参数
function gen2<T, U> (a: [T, U]): Object{
    return {
        x: a[0],
        y: a[1] 
    };
}
console.log(gen2(['abc', 123])); // { x: 'abc', y: 123 }


console.log(`------`);

export {}