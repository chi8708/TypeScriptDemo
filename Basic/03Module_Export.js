"use strict";
//模块化导出
Object.defineProperty(exports, "__esModule", { value: true });
exports.User2 = exports.fun = exports.t = void 0;
//基础类型
exports.t = 1;
//函数
var fun = function (name, age) {
    console.log("name:".concat(name, ",age:").concat(age));
};
exports.fun = fun;
//类
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.name = name;
        this.age = age;
    }
    User2.prototype.sayHello = function () {
        console.log("name:".concat(this.name, ",age:").concat(this.age));
    };
    return User2;
}());
exports.User2 = User2;
//类实例
var u2 = new User2('rose', 18);
exports.default = u2;
