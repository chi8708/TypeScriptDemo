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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    // 异步 async add(model: T, url: string): Promise<any>
    BaseBLL.prototype.add = function (model, url) {
        var modelJson = JSON.stringify(model !== null && model !== void 0 ? model : {});
        console.log("model:".concat(modelJson, " url:").concat(url));
        //return await makeRequest(url, 'GET');
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
bll.add(coder, 'http://www.qq.com')
    .then(function (data) {
    console.log(data);
})
    .catch(function (error) {
    console.error(error);
});
;
var s = PropHander(coder, 'name');
//异步async
function Codeadd() {
    return __awaiter(this, void 0, void 0, function () {
        var data1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bll.add(coder, 'http://www.baidu.com')];
                case 1:
                    data1 = _a.sent();
                    console.log(data1);
                    return [2 /*return*/];
            }
        });
    });
}
Codeadd();
