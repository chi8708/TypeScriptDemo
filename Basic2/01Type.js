"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var n = 18;
var str = "张三";
var b = true;
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
var data = undefined;
var data2 = null;
var data3 = { name: "张三", age: 18 };
//2.其他数据类型
//元组
var tuple = [18, "cts"];
//联合类型 类型可选择
var union;
union = 18;
union = "cts";
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var tom = {
    id: 1,
    name: 'Tom',
    age: 12,
    gender2: 'male',
    color: Color.Red
};
console.log(tom.age);
var c = {
    print: function (str) {
        console.log("Printable");
    },
    log: function () {
        console.log("Loggable");
    }
};
c.print("你好呀");
var myStr = "123";
var person;
person = {
    name: 'Echo',
    age: 26,
};
//类
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("name:".concat(this.name, ",age:").concat(this.age));
    };
    return Person;
}());
//类继承
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.sayHello = function () {
        console.log("Teacher,name:".concat(this.name, ",age:").concat(this.age));
    };
    return Teacher;
}(Person));
//类实例
var user = new Person('rose', 18);
user.sayHello();
var user2 = new Teacher('jack', 18);
user2.sayHello();
//类型推断
var num = 123; // 推断为 number 类型
console.log(num.toFixed(2)); // 输出：123.00
//类型断言
// 示例代码
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength); // 输出：16
