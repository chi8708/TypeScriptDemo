//模块化导入
import {t,fun,User2,default as d} from './03Module_Export'
import d3 from './03Module_Export'//等同{default as d}

//基础类型
let t1:any=t;
t1='122';
console.log(t1);
//函数
fun('jack',12);
//类
let u=new User2('ck',12);
u.sayHello();
//类实例
d.name='rose2';
d3.name='rose3'
//d 和d3指向同一个实例。所以d和d3的name都是rose3;
d.sayHello();
d3.sayHello();