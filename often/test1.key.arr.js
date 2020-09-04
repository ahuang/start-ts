"use strict";
exports.__esModule = true;
function print(ib) {
    console.log('print: ', JSON.stringify(ib));
}
exports.print = print;
var data = {
    loading: false,
    name: 'abc',
    age: 10
};
print(data);
