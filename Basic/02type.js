"use strict";
//1.基础类型使用
// number：表示数值类型，例如：let age: number = 25;
// string：表示字符串类型，例如：let name: string = "John";
// boolean：表示布尔类型，例如：let isReady: boolean = true;
// null 和 undefined：表示空值类型，例如：let data: null = null;
// object：表示对象类型，例如：let person: object = { name: "John", age: 25 };
// symbol：表示唯一的符号类型，例如：let id: symbol = Symbol("id");
var a = 'hello ts';
console.log(a);
var b = 3;
console.log(b);
//2. 数组
var arr = [1, 2, 3];
console.log(arr[1]);
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
console.log(t.sayHello());
//7.泛型
function toArray(arg) {
    return [arg];
}
var array = toArray(1);
console.log(array);
function logPoint(p) {
    console.log("X:".concat(p.X, ",Y:").concat(p.Y));
}
var p1 = { X: 1, Y: 2 };
logPoint(p1);
