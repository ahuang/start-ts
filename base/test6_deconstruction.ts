/*
解构数组
*/

console.log('-- 解构数组获取数组内容 ---');
let grades: number[] = [80,90];
let [g1, g2] = grades;
console.log(g1);    // 80
console.log(g2);    // 90

console.log('-- 解构数组截取数组部分元素 ---');
let nature: number[] = [1,2,3,4,5];
let [a] = nature;
let [,b,,c] = nature;
let [d, e, ...rest] = nature;
console.log(a); // 1
console.log(b,c); //2 4
console.log(d,e,rest); // 1 2 [ 3, 4, 5 ]

console.log('-- 解构数组实现交换swap ---');
let g3: number = 50;
let g4: number = 60;
console.log(g3,g4); // 50 60
[g3,g4] = [g4,g3];
console.log(g3,g4); // 60 50

console.log('-- 解构数组作为函数参数 ---');
function fun1([firstName, lastName]: [string, string]){
    return `fullname: ${firstName} ${lastName}`;
}
let fullname: [string, string] = ['san', 'zhang'];
console.log(fun1(fullname)); // fullname: san zhang


/*
解构对象
*/
let obj1 = {
    k1: 'abc',
    k2: 100,
    k3: [1,2,3],
    k4: 200,
    k5: 'xyz'
}

console.log('-- 解构对象的基本用法1 ---');
// 另一种写法: let k1:string, k2:number; ({k1, k2} = obj1); 
let {k1,k2} = obj1; 
console.log(k1, k2);  // abc 100

console.log('-- 解构对象的基本用法2 ---');
let k4:any,v4:number, k5:any,v5:string;
({k4:v4, k5:v5} = obj1); // 冒号不是指示类型
console.log(k4,v4);  // undefined 200
console.log(k5,v5);  // undefined 'xyz'

console.log('-- 解构对象截取剩余元素 ---');
let {k3, ...restK} = obj1;
console.log(k3);    // [ 1, 2, 3 ]
console.log(restK); // { k1: 'abc', k2: 100, k4: 200, k5: 'xyz' }

export {}