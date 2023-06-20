//模块化导出

//基础类型
export let t: number = 1;

//函数
let fun = function (name: string, age: number): void {
    console.log(`name:${name},age:${age}`);
}
export {fun};

//类
export class User2{
    name:string;
    age:number;
    address?:string;
    [propName: string]: any;//可以添加任意属性
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    sayHello(){
        console.log(`name:${this.name},age:${this.age}`);
    }
}


//类实例
let u2:User2=new User2('rose',18);
export default u2;
