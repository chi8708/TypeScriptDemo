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