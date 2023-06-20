//1.基础类型使用
// number：表示数值类型，例如：let age: number = 25;
// string：表示字符串类型，例如：let name: string = "John";
// boolean：表示布尔类型，例如：let isReady: boolean = true;
// null 和 undefined：表示空值类型，例如：let data: null = null;
// object：表示对象类型，例如：let person: object = { name: "John", age: 25 };
// symbol：表示唯一的符号类型，例如：let id: symbol = Symbol("id");
let a: string = 'hello ts';
console.log(a);

let b: number = 3;
console.log(b);

//2. 数组
let arr: number[] = [1, 2, 3];
console.log(arr[1]);

//3.元组
let p: [string, number] = ['cts', 18]

//4.接口和对象
interface Person {
    name: string,
    age: number
}
//使用了hello.ts 的接口
let Student: Person = {
    id: 1,
    name: 'jack',
    age: 23
}

//5.函数
function add(a: number, b: number): number {
    return a + b;
}
add(1, 2);

//6.类
class Teacher {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): void {
        console.log(`name:${this.name},age:${this.age}`);
    }
}

let t:Teacher=new Teacher('121',1);
console.log(t.sayHello());

//7.泛型
function toArray<T>(arg: T): T[] {
    return [arg];
}

let array = toArray<number>(5);