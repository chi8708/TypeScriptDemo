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
exports.PubRole = void 0;
var http_client_1 = require("./http-client");
var PubRole = /** @class */ (function (_super) {
    __extends(PubRole, _super);
    function PubRole() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * No description
         *
         * @tags PubRole
         * @name PubRoleGetListCreate
         * @request POST:/api/PubRole/GetList
         * @secure
         */
        _this.pubRoleGetListCreate = function (params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubRole/GetList", method: "POST", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubRole
         * @name PubRoleGetPageCreate
         * @summary 获取角色分页
         * @request POST:/api/PubRole/GetPage
         * @secure
         */
        _this.pubRoleGetPageCreate = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubRole/GetPage", method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubRole
         * @name PubRoleAddCreate
         * @summary 添加角色
         * @request POST:/api/PubRole/Add
         * @secure
         */
        _this.pubRoleAddCreate = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubRole/Add", method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubRole
         * @name PubRoleEditCreate
         * @summary 编辑角色
         * @request POST:/api/PubRole/Edit
         * @secure
         */
        _this.pubRoleEditCreate = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubRole/Edit", method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubRole
         * @name PubRoleDeleteCreate
         * @summary 删除角色
         * @request POST:/api/PubRole/Delete/{id}
         * @secure
         */
        _this.pubRoleDeleteCreate = function (id, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubRole/Delete/".concat(id), method: "POST", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubRole
         * @name PubRoleGetFunctionsCreate
         * @summary 获取角色权限
         * @request POST:/api/PubRole/GetFunctions/{code}
         * @secure
         */
        _this.pubRoleGetFunctionsCreate = function (code, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubRole/GetFunctions/".concat(code), method: "POST", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags PubRole
         * @name PubRoleSaveFunctionsCreate
         * @summary 保存角色权限
         * @request POST:/api/PubRole/SaveFunctions/{code}
         * @secure
         */
        _this.pubRoleSaveFunctionsCreate = function (code, data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/PubRole/SaveFunctions/".concat(code), method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        return _this;
    }
    return PubRole;
}(http_client_1.HttpClient));
exports.PubRole = PubRole;
