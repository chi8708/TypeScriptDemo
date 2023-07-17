
import { makeRequest } from './06makeRequest';

class Person05 {
    name: string;
    protected age: number;// 封装
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }
    sayHello() {
        console.log(`name:${this.name},age:${this.age}`);
    }
     getName=(name:string):string=>{
        return name;
    }
}

//继承
class Coder extends Person05 {
    sex: boolean;
    private idNo: string;
    constructor(name: string, age: number, sex: boolean) {
        super(name, age);
        this.sex = sex;
        this.idNo = "123";
    }
    Code() {
        console.log(`程序员${this.name}在Coding`);
    }
    //多态
    sayHello(): void {
        console.log(`name:${this.name},age:${this.age},idNo:${this.idNo}`);
    }
}

//基类
class BaseBLL<T extends any>{
    // 异步 async add(model: T, url: string): Promise<any>
     add(model: T, url: string): any {
        let modelJson = JSON.stringify(model ?? {});
        console.log(`model:${modelJson} url:${url}`);
        //return await makeRequest(url, 'GET');
        return  makeRequest(url, 'GET');
    }
    //等价上面add
    add2: (model: T, url: string) => any = function (model: T, url: string) {
        let modelJson = JSON.stringify(model ?? {});
        console.log(`model:${modelJson} url:${url}`);
        // fetch(url,{method:'post',body:modelJson}).then(function(){
        //     console.log(url);
        // })
    }
}

class CoderBLL<T extends Coder> extends BaseBLL<Coder>{

}

//泛型约束
function PropHander<T>(T: Object, prop: keyof T) {

}

let coder = new Coder('jack', 12, true);
coder.sayHello();
coder.Code();
coder.getName('122');

let bll = new CoderBLL();
bll.add(coder, 'http://www.qq.com')
    .then((data: any) => {
        console.log(data);
    })
    .catch((error: any) => {
        console.error(error);
    });;

let s = PropHander<Coder>(coder, 'name');

//异步async
async function Codeadd() {
    let data1:any = await bll.add(coder, 'http://www.baidu.com')
    console.log(data1);
}

Codeadd();
