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
exports.PubUser = void 0;
var http_client_1 = require("./http-client");
var PubUser = /** @class */ (function (_super) {
    __extends(PubUser, _super);
    function PubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * No description
         *
         * @tags PubUser
         * @name PubUserGetAccessList
         * @request GET:/api/PubUser/GetAccess
         * @secure
         */
        _this.pubUserGetAccessList = function (params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubUser/GetAccess", method: "GET", secure: true }, params));
        };
        /**
         * No description
         *
         * @tags PubUser
         * @name PubUserGetPageCreate
         * @summary 获取用户分页
         * @request POST:/api/PubUser/GetPage
         * @secure
         */
        _this.pubUserGetPageCreate = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubUser/GetPage", method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubUser
         * @name PubUserAddCreate
         * @summary 添加用户
         * @request POST:/api/PubUser/Add
         * @secure
         */
        _this.pubUserAddCreate = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubUser/Add", method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubUser
         * @name PubUserEditCreate
         * @summary 编辑用户
         * @request POST:/api/PubUser/Edit
         * @secure
         */
        _this.pubUserEditCreate = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubUser/Edit", method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubUser
         * @name PubUserDeleteCreate
         * @summary 删除用户
         * @request POST:/api/PubUser/Delete/{id}
         * @secure
         */
        _this.pubUserDeleteCreate = function (id, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubUser/Delete/".concat(id), method: "POST", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubUser
         * @name PubUserGetFunctionsCreate
         * @summary 获取用户权限
         * @request POST:/api/PubUser/GetFunctions/{code}
         * @secure
         */
        _this.pubUserGetFunctionsCreate = function (code, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubUser/GetFunctions/".concat(code), method: "POST", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubUser
         * @name PubUserSaveFunctionsCreate
         * @summary 保存用户权限
         * @request POST:/api/PubUser/SaveFunctions/{code}
         * @secure
         */
        _this.pubUserSaveFunctionsCreate = function (code, data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubUser/SaveFunctions/".concat(code), method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubUser
         * @name PubUserLogoutCreate
         * @summary 注销登录
         * @request POST:/api/PubUser/Logout
         * @secure
         */
        _this.pubUserLogoutCreate = function (params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubUser/Logout", method: "POST", secure: true }, params));
        };
        /**
         * No description
         *
         * @tags PubUser
         * @name PubUserGetModelCreate
         * @summary 获取用户实体
         * @request POST:/api/PubUser/GetModel/{id}
         * @secure
         */
        _this.pubUserGetModelCreate = function (id, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubUser/GetModel/".concat(id), method: "POST", secure: true, format: "json" }, params));
        };
        return _this;
    }
    return PubUser;
}(http_client_1.HttpClient));
exports.PubUser = PubUser;
