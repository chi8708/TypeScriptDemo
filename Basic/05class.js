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
var _06makeRequest_1 = require("./06makeRequest");
var Person05 = /** @class */ (function () {
    function Person05(name, age) {
        this.name = name;
        this.age = age;
    }
    Person05.prototype.sayHello = function () {
        console.log("name:".concat(this.name, ",age:").concat(this.age));
    };
    return Person05;
}());
//继承
var Coder = /** @class */ (function (_super) {
    __extends(Coder, _super);
    function Coder(name, age, sex) {
        var _this = _super.call(this, name, age) || this;
        _this.sex = sex;
        _this.idNo = "123";
        return _this;
    }
    Coder.prototype.Code = function () {
        console.log("\u7A0B\u5E8F\u5458".concat(this.name, "\u5728Coding"));
    };
    //多态
    Coder.prototype.sayHello = function () {
        console.log("name:".concat(this.name, ",age:").concat(this.age, ",idNo:").concat(this.idNo));
    };
    return Coder;
}(Person05));
//基类
var BaseBLL = /** @class */ (function () {
    function BaseBLL() {
        //等价上面add
        this.add2 = function (model, url) {
            var modelJson = JSON.stringify(model !== null && model !== void 0 ? model : {});
            console.log("model:".concat(modelJson, " url:").concat(url));
            // fetch(url,{method:'post',body:modelJson}).then(function(){
            //     console.log(url);
            // })
        };
    }
    BaseBLL.prototype.add = function (model, url) {
        var modelJson = JSON.stringify(model !== null && model !== void 0 ? model : {});
        console.log("model:".concat(modelJson, " url:").concat(url));
        return (0, _06makeRequest_1.makeRequest)(url, 'GET');
    };
    return BaseBLL;
}());
var CoderBLL = /** @class */ (function (_super) {
    __extends(CoderBLL, _super);
    function CoderBLL() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoderBLL;
}(BaseBLL));
//泛型约束
function PropHander(T, prop) {
}
var coder = new Coder('jack', 12, true);
coder.sayHello();
coder.Code();
var bll = new CoderBLL();
bll.add(coder, 'http://www.baidu.com')
    .then(function (data) {
    console.log(data);
})
    .catch(function (error) {
    console.error(error);
});
;
var s = PropHander(coder, 'name');
