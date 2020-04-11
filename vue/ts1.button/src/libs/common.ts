// 使用ts语法的小例子
function add(x:number, y:number){
    return x+y;
}

console.log(add(1,2)); // 3

// 装饰器
function fun(target: any){
    console.log('target: ', target); // 看看target是啥 [Function: Hello]
    target.prototype.name = 'fun';
    target.prototype.run = () => {
        console.log('这是run方法');        
    }
}

@fun 
class Hello{} // 使用了注解的孔类

let a:any = new Hello();
console.log(a.name); // fun
a.run() // 这是run方法



// 可传参的装饰器
function bar(msg:string){
    return function(target:any){
        target.prototype.name = 'bar';
        target.prototype.print = () =>{
            console.log('msg: ', msg);            
        }
    }
}

@bar('处理成功')
class World{};
let b:any = new World();
console.log(b.name); // bar
b.print(); // msg:  处理成功
