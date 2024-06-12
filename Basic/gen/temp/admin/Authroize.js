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
exports.Authroize = void 0;
var http_client_1 = require("./http-client");
var Authroize = /** @class */ (function (_super) {
    __extends(Authroize, _super);
    function Authroize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * No description
         *
         * @tags Authroize
         * @name AuthroizeCreate
         * @summary 登录获取token
         * @request POST:/api/Authroize
         * @secure
         */
        _this.authroizeCreate = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/Authroize", method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json }, params));
        };
        /**
         * No description
         *
         * @tags Authroize
         * @name AuthroizeIsCaptchaList
         * @summary 是否开启验证码
         * @request GET:/api/Authroize/isCaptcha
         * @secure
         */
        _this.authroizeIsCaptchaList = function (params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/Authroize/isCaptcha", method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Authroize
         * @name AuthroizeGetUserMenuCreate
         * @summary 获取菜单
         * @request POST:/api/Authroize/GetUserMenu
         * @secure
         */
        _this.authroizeGetUserMenuCreate = function (params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/Authroize/GetUserMenu", method: "POST", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Authroize
         * @name AuthroizeGetUserAccessCreate
         * @summary 获取菜单
         * @request POST:/api/Authroize/GetUserAccess
         * @secure
         */
        _this.authroizeGetUserAccessCreate = function (params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/Authroize/GetUserAccess", method: "POST", secure: true }, params));
        };
        return _this;
    }
    return Authroize;
}(http_client_1.HttpClient));
exports.Authroize = Authroize;
