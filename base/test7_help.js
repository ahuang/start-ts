/**
 * 用来理解function和class的实例方法
 *      C和D的m方法 是等价的，是2种方式的实现
 *      E中的m方法是属性，并不是实例对象
 */

 // 用class的方式
class C {
    constructor(){
        this.p = 12; // 实例对象属性
    }
    // 实例对象方法
    m(){  console.log('Cm...'); }
}
let c = new C();
console.log(c); // { p: 12 }
c.m();
 
 // 用function的方式
function D(){
    this.p = 13;    // 实例对象属性
}
// 实例对象方法
D.prototype.m = function(){ console.log('Dm...');}
let d = new D();
console.log(d); // D { p: 13 }
d.m();  // Dm...

// E中的m方法是属性方法，并不是实例对象
function E(){
    this.p = 14;
    this.m = function(){console.log('Em...');}
}
let e = new E();
console.log(e); // E { p: 14, m: [Function] }
e.m(); // Em...

