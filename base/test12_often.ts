interface IBasicLayout {
    loading: any;
    [key: string]: any;
}

function print (ib: IBasicLayout): void {
    console.log('print: ',JSON.stringify(ib));
}

let data: IBasicLayout = {
    loading: false,
    name: 'abc',
    age: 10
}
print(data);
// print:  {"loading":false,"name":"abc","age":10}


export {}