function sayHello(person:string){
   return `hello ${person}`;
}

let user:string = 'Tom';
let r= sayHello(user);
console.log(r);

interface Person {
   readonly id: number;
   name: string,
   age: number,
   address?:string,
   [propName: string]: any;
}

let tom: Person = {
   id:1,
   name: 'Tom',
   age:18,
   gender:'male'
};


//ts 通过es6 import引入js文件模块会报错 无法写入文件“e:/Study/front/TypeScriptDemo/Basic/04Module_JSES.js”，因为它会覆盖输入文件。
// 可以修改04Module_JSES.js 通过 commonjs 规范导出模块。用module.exports 代替export default。同时引入的地方也要用require代替import
//import JSModule from './04Module_JSES.js';
const JSModule = require('./04Module_JSES.js');
JSModule.sayHello();
