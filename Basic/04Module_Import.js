"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//模块化导入
var _03Module_Export_1 = __importStar(require("./03Module_Export"));
var _03Module_Export_2 = __importDefault(require("./03Module_Export")); //等同{default as d}
//基础类型
var t1 = _03Module_Export_1.t;
t1 = '122';
console.log(t1);
//函数
(0, _03Module_Export_1.fun)('jack', 12);
//类
var u = new _03Module_Export_1.User2('ck', 12);
u.sayHello();
//类实例
_03Module_Export_1.default.name = 'rose2';
_03Module_Export_2.default.name = 'rose3';
//d 和d3指向同一个实例。所以d和d3的name都是rose3;
_03Module_Export_1.default.sayHello();
_03Module_Export_2.default.sayHello();
