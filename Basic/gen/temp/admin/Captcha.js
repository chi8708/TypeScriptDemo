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
exports.Captcha = void 0;
var http_client_1 = require("./http-client");
var Captcha = /** @class */ (function (_super) {
    __extends(Captcha, _super);
    function Captcha() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * No description
         *
         * @tags Captcha
         * @name AdminCaptchaGenerateCreate
         * @summary 生成
         * @request POST:/api/admin/Captcha/generate
         * @secure
         */
        _this.adminCaptchaGenerateCreate = function (query, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/admin/Captcha/generate", method: "POST", query: query, secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Captcha
         * @name AdminCaptchaCheckCreate
         * @summary 验证
         * @request POST:/api/admin/Captcha/check
         * @secure
         */
        _this.adminCaptchaCheckCreate = function (data, query, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/admin/Captcha/check", method: "POST", query: query, body: data, secure: true, type: http_client_1.ContentType.Json, format: "json" }, params));
        };
        return _this;
    }
    return Captcha;
}(http_client_1.HttpClient));
exports.Captcha = Captcha;
