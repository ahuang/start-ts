/*
展开数组和对象
*/


console.log('-- 展开数组的基本用法---'); 
let first = [1, 2];
let second = [3, 4];
// 相当于bothPlus=[0].concat(first).concat(second).concat([5])
let bothPlus = [0, ...first, ...second, 5];
console.log(first); // [ 1, 2 ]
console.log(second); // [ 3, 4 ]
console.log(bothPlus); // [ 0, 1, 2, 3, 4, 5 ]


console.log('-- 展开对象的基本用法---');
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// 展开对象后面的属性 会覆盖 前面的属性
let search = { ...defaults, food: "rich" };
console.log(defaults); // { food: 'spicy', price: '$$', ambiance: 'noisy' }
console.log(search);    // { food: 'rich', price: '$$', ambiance: 'noisy' }


console.log('-- 展开实例对象---');
let Car = function(brand) {
    this.brand = brand;
    // 这种写法下，run方法不是实例方法,而是实例的一个对象
    this.run = function() {
        console.log(`i can run at high speed!`);        
    }
}
let c1 = new Car('mazida'); // 实例也是对象，所以可以展开
console.log(c1); // Car { brand: 'mazida', run: [Function] }
c1.run(40); // i can run at high speed!

let cloneC1 = {...c1};
console.log(cloneC1); // { brand: 'mazida', run: [Function] }
cloneC1.run(40); // i can run at high speed!








export {}