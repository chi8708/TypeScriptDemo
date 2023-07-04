"use strict";
//1.基础类型使用
// number：表示数值类型，例如：let age: number = 25;
// string：表示字符串类型，例如：let name: string = "John";
// boolean：表示布尔类型，例如：let isReady: boolean = true;
// null 和 undefined：表示空值类型，例如：let data: null = null;
// object：表示对象类型，例如：let person: object = { name: "John", age: 25 };
Object.defineProperty(exports, "__esModule", { value: true });
// symbol：表示唯一的符号类型，例如：let id: symbol = Symbol("id");
var a = 'hello ts';
console.log(a);
var b = 3;
console.log(b);
//2. 数组
var arr = [1, 2, 3];
console.log(arr[1]);
//泛型数组
var arr2 = [4, 5];
console.log(arr2[0]);
//3.元组
var p = ['cts', 18];
var Student = {
    id: 123,
    name: 'jack',
    age: 23
};
// ---方法参数使用接口---
function getAdminUser() {
    return Student;
}
function deleteUser(user) {
    // ...
}
deleteUser(Student);
//5.函数
function add(a, b) {
    return a + b;
}
add(1, 2);
//函数变量写法2
var myAdd = add;
//function(x: number, y: number): number { return x + y; };
myAdd(1, 5);
//6.类
var Teacher = /** @class */ (function () {
    function Teacher(name, age) {
        this.name = name;
        this.age = age;
    }
    Teacher.prototype.sayHello = function () {
        console.log("name:".concat(this.name, ",age:").concat(this.age));
        [1, 2, 3].forEach(function (e) {
            console.log(e);
        });
    };
    return Teacher;
}());
var t = new Teacher('121', 1);
t.d = 12;
t.sayHello();
//7.泛型
function toArray(arg) {
    return [arg];
}
var array = toArray(1);
console.log(array);
//泛型2
var users;
// declare let userBLL: UserBLL<string>;
// userBLL.add=function (a:string):void{
//     console.log(a+"添加成功");    
// };
// userBLL.add("hh");
var userBLL = {
    add: function (a) {
        console.log(a + "添加成功");
    },
    get: function () {
        return "哈哈";
    }
};
userBLL.add("hh");
console.log(userBLL.get());
function logPoint(p) {
    console.log("X:".concat(p.X, ",Y:").concat(p.Y));
}
var p1 = { X: 1, Y: 2 };
logPoint(p1);
//10.枚举
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Yellow"] = 2] = "Yellow";
})(color || (color = {}));
;
var c = color.Green;
console.log(c);
//declare 全局声明
// declare let myGlobal: string;
// myGlobal='1234';
// console.log(myGlobal); 
// declare function myFunction(arg:string):number;
// const a1=myFunction('123');
