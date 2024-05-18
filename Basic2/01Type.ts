//1.基础类型使用
// number：表示数值类型，例如：let age: number = 25;
// string：表示字符串类型，例如：let name: string = "John";
// boolean：表示布尔类型，例如：let isReady: boolean = true;
// null 和 undefined：表示空值类型，例如：let data: null = null;
// object：表示对象类型，例如：let person: object = { name: "John", age: 25 };\
export{}
let n:number=18;
let str:string="张三";
let b:boolean=true;
let arr:number[]=[1,2,3];  
let arr2:Array<number>=[1,2,3];
let data:undefined=undefined;
let data2:null=null;
let data3:object={name:"张三",age:18};

//2.其他数据类型
//元组
let tuple:[number,string]=[18,"cts"];

//联合类型 类型可选择
let union:string|number;
union=18;
union="cts";


//枚举
enum Color{Red,Yellow,Blue};
//接口
interface IPerson {
   readonly id: number;
   name: string,
   age: number,
   color: Color;
   address?:string,
   [propName: string]: any;//可以添加任意属性
}
 let tom: IPerson = {
    id:1,
    name: 'Tom',
    age:12,
    gender2:'male',
    color:Color.Red
 };

console.log(tom.age);



//交叉类型 将多个类型合并成一个新的类型
interface IPrintable {
    print(str:string): void;
}

interface ILoggable {
   isLog?:boolean;
   log(): void;
}
let c:IPrintable & ILoggable={
   print(str:string){
      console.log("Printable")
   },
   log(){
      console.log("Loggable")
   }
};
c.print("你好呀");

// 1type 用于定义类型别名，使得我们可以为一个复杂类型或者一个较长的类型声明一个简短的别名。这个别名可以在任何地方使用，以代替原始的类型。
// 2.如果多次声明同一个变量、函数或类，这些声明会被自动合并为一个声明。这种合并称为声明合并。而 type 关键字也可以用于声明合并，允许我们扩展已有的类型声明。
type MyString = string;
type Point = { x: number; y: number };
type Callback = (data: any) => void;
let myStr:MyString="123";

type Person2 = {
   name: string;
 }
 type User2 = {
   age: number;
 }
 let person: Person2 & User2;
 person = {
   name: 'Echo',
   age: 26,
 }

 //类
 class Person{
   name:string;
   age:number;
   address?:string;
   [propName: string]: any;//可以添加任意属性
   constructor(name:string,age:number){
       this.name=name;
       this.age=age;
   }
   sayHello():void{
       console.log(`name:${this.name},age:${this.age}`);
   }
}
//类继承
class Teacher extends Person{
   sayHello():void{
      console.log( `Teacher,name:${this.name},age:${this.age}`);
  }
}


//类实例
let  user:Person=new Person('rose',18);
user.sayHello();

let  user2:Person=new Teacher('jack',18);
user2.sayHello();

//类型推断
let num = 123; // 推断为 number 类型
console.log(num.toFixed(2)); // 输出：123.00
//类型断言
// 示例代码
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength); // 输出：16