/*
展开数组和对象
*/


 
console.log('-- 展开数组---');
// 展开数组的基本用法   相当于 let bothPlus = [0].concat(first).concat(second).concat([5])
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(first); // [ 1, 2 ]
console.log(second); // [ 3, 4 ]
console.log(bothPlus); // [ 0, 1, 2, 3, 4, 5 ]
console.log('------');


console.log('-- 展开对象---');
// 展开对象的基本用法  出现在展开对象后面的属性会覆盖前面的属性
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(defaults); // { food: 'spicy', price: '$$', ambiance: 'noisy' }
console.log(search);    // { food: 'rich', price: '$$', ambiance: 'noisy' }
// 展开后会丢失对象展开前已有的方法 ? 为什么下面例子1没有丢失，下面例子2编译报错？
// 例子1
let Cat = function(brand) {
    this.brand = brand;
    this.run = function() {
        console.log(`i can run at high speed!`);        
    }
}
let c1 = new Cat('mazida');
console.log(c1.brand);
c1.run(40);
let cloneC1 = {...c1};
console.log(cloneC1.brand);
cloneC1.run(40);
// 例子2
/*
class C {
    p = 12;
    m() {
    }
  }
  let c = new C();
  let clone = { ...c };
  clone.p; // ok
  clone.m(); // error!
*/
console.log('------');




export {}