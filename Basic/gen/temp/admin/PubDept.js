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
exports.PubDept = void 0;
var http_client_1 = require("./http-client");
var PubDept = /** @class */ (function (_super) {
    __extends(PubDept, _super);
    function PubDept() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * No description
         *
         * @tags PubDept
         * @name PubDeptGetListCreate
         * @request POST:/api/PubDept/GetList
         * @secure
         */
        _this.pubDeptGetListCreate = function (params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubDept/GetList", method: "POST", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubDept
         * @name PubDeptGetChildListCreate
         * @summary 获取子部门列表
         * @request POST:/api/PubDept/GetChildList
         * @secure
         */
        _this.pubDeptGetChildListCreate = function (query, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubDept/GetChildList", method: "POST", query: query, secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubDept
         * @name PubDeptGetChildListCreate2
         * @summary 获取子部门列表
         * @request POST:/api/PubDept/GetChildList/{code}
         * @originalName pubDeptGetChildListCreate
         * @duplicate
         * @secure
         */
        _this.pubDeptGetChildListCreate2 = function (code, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubDept/GetChildList/".concat(code), method: "POST", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubDept
         * @name PubDeptAddCreate
         * @summary 添加
         * @request POST:/api/PubDept/Add
         * @secure
         */
        _this.pubDeptAddCreate = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubDept/Add", method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubDept
         * @name PubDeptEditCreate
         * @summary 编辑
         * @request POST:/api/PubDept/Edit
         * @secure
         */
        _this.pubDeptEditCreate = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubDept/Edit", method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubDept
         * @name PubDeptDeleteCreate
         * @summary 删除
         * @request POST:/api/PubDept/Delete/{id}
         * @secure
         */
        _this.pubDeptDeleteCreate = function (id, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubDept/Delete/".concat(id), method: "POST", secure: true, format: "json" }, params));
        };
        return _this;
    }
    return PubDept;
}(http_client_1.HttpClient));
exports.PubDept = PubDept;
