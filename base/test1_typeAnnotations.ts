/*
topic: （type annotations 类型校验) 
annotations: 注解,note,comment,remark....

校验传参类型和传参数目
注意：即使出现编译error，编译还是会完成
*/

// 参数带上类型
function greeter(person: string){
    return "hello" + person;
}

let user = [1, 2, 3];

// 传参类型错误
// console.log(greeter(user));

// 传参数目错误
// console.log(greeter());

export {}
