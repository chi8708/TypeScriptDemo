import {t,fun,User2,default as d} from './03Module_Export'
import d3 from './03Module_Export'//等同{default as d}
let t1:any=t;
console.log(t1);
fun('jack',12);
let u=new User2('ck',12);
u.sayHello();

d.name='rose2';
d3.name='rose3'
//d 和d3指向同一个实例。所以d和d3的name都是rose3;
d.sayHello();
d3.sayHello();