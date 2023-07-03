//1.基础类型使用
// number：表示数值类型，例如：let age: number = 25;
// string：表示字符串类型，例如：let name: string = "John";
// boolean：表示布尔类型，例如：let isReady: boolean = true;
// null 和 undefined：表示空值类型，例如：let data: null = null;
// object：表示对象类型，例如：let person: object = { name: "John", age: 25 };

import { fun } from "./03Module_Export";

// symbol：表示唯一的符号类型，例如：let id: symbol = Symbol("id");
let a: string = 'hello ts';
console.log(a);

let b: number = 3;
console.log(b);

//2. 数组
let arr: number[] = [1, 2, 3];
console.log(arr[1]);
//泛型数组
let arr2:Array<number>=[4,5];
console.log(arr2[0]);

//3.元组
let p: [string, number] = ['cts', 18]

//4.接口和对象
interface User {
    name: string,
    age: number,
    readonly id:number,
    address?:string
}

let Student: User = {
    id:123,
    name: 'jack',
    age: 23
}
// ---方法参数使用接口---
function getAdminUser(): User {
    return Student;
}

function deleteUser(user: User) {
    // ...
}
deleteUser(Student);

//5.函数
function add(a: number, b: number): number {
    return a + b;
}
add(1, 2);

//函数变量写法2
let myAdd: (x: number, y: number) => number =add;
    //function(x: number, y: number): number { return x + y; };
myAdd(1,5);

//6.类
class Teacher {
    name: string;
    age: number;
    [propName: string]: any;//可以添加任意属性
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): void {
        console.log(`name:${this.name},age:${this.age}`);
        [1,2,3].forEach(e => {
            console.log(e);
        });
    }
}

let t: Teacher = new Teacher('121', 1);
t.d=12;
t.sayHello();

//7.泛型
function toArray<T>(arg: T): T[] {
    return [arg];
}

let array = toArray<number>(1);
console.log(array);

//泛型2
let users: string[];
interface UserBLL<T> {
    add: (arr: T) => void;
    get: () => T;
}

// declare let userBLL: UserBLL<string>;
// userBLL.add=function (a:string):void{
//     console.log(a+"添加成功");    
// };
// userBLL.add("hh");

let userBLL: UserBLL<string>={
    add:function (a:string):void{
        console.log(a+"添加成功");    
    },
    get:function():string{
        return "哈哈";
    }
}
userBLL.add("hh");
console.log(userBLL.get());

//const object = userBLL.get();


//8.联合类型
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

//9.结构体
interface Point {
    X: number;
    Y: number;
}
function logPoint(p: Point) {
    console.log(`X:${p.X},Y:${p.Y}`);
}
const p1:Point={X:1,Y:2};
logPoint(p1);

//10.枚举
enum color{Red,Green,Yellow};
let c:color=color.Green;
console.log(c);

//declare 全局声明
// declare let myGlobal: string;
// myGlobal='1234';
// console.log(myGlobal); 

// declare function myFunction(arg:string):number;
// const a1=myFunction('123');
