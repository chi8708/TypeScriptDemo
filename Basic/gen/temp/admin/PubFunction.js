"use strict";
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubFunction = void 0;
var http_client_1 = require("./http-client");
var PubFunction = /** @class */ (function (_super) {
    __extends(PubFunction, _super);
    function PubFunction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * No description
         *
         * @tags PubFunction
         * @name PubFunctionGetListCreate
         * @request POST:/api/PubFunction/GetList
         * @secure
         */
        _this.pubFunctionGetListCreate = function (params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubFunction/GetList", method: "POST", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubFunction
         * @name PubFunctionGetChildListCreate
         * @summary 获取子权限列表
         * @request POST:/api/PubFunction/GetChildList
         * @secure
         */
        _this.pubFunctionGetChildListCreate = function (query, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubFunction/GetChildList", method: "POST", query: query, secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubFunction
         * @name PubFunctionGetChildListCreate2
         * @summary 获取子权限列表
         * @request POST:/api/PubFunction/GetChildList/{code}
         * @originalName pubFunctionGetChildListCreate
         * @duplicate
         * @secure
         */
        _this.pubFunctionGetChildListCreate2 = function (code, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubFunction/GetChildList/".concat(code), method: "POST", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubFunction
         * @name PubFunctionAddCreate
         * @summary 添加
         * @request POST:/api/PubFunction/Add
         * @secure
         */
        _this.pubFunctionAddCreate = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubFunction/Add", method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubFunction
         * @name PubFunctionEditCreate
         * @summary 编辑
         * @request POST:/api/PubFunction/Edit
         * @secure
         */
        _this.pubFunctionEditCreate = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubFunction/Edit", method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubFunction
         * @name PubFunctionDeleteCreate
         * @summary 删除
         * @request POST:/api/PubFunction/Delete/{id}
         * @secure
         */
        _this.pubFunctionDeleteCreate = function (id, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubFunction/Delete/".concat(id), method: "POST", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubFunction
         * @name PubFunctionGetMenuCreate
         * @summary 获取左侧菜单
         * @request POST:/api/PubFunction/GetMenu
         * @secure
         */
        _this.pubFunctionGetMenuCreate = function (params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubFunction/GetMenu", method: "POST", secure: true, format: "json" }, params));
        };
        return _this;
    }
    return PubFunction;
}(http_client_1.HttpClient));
exports.PubFunction = PubFunction;
