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
exports.Values = void 0;
var http_client_1 = require("./http-client");
var Values = /** @class */ (function (_super) {
    __extends(Values, _super);
    function Values() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * No description
         *
         * @tags Values
         * @name ValuesList
         * @request GET:/api/Values
         * @secure
         */
        _this.valuesList = function (params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/Values", method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Values
         * @name ValuesCreate
         * @request POST:/api/Values
         * @secure
         */
        _this.valuesCreate = function (data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/Values", method: "POST", body: data, secure: true, type: http_client_1.ContentType.Json }, params));
        };
        /**
         * No description
         *
         * @tags Values
         * @name ValuesDetail
         * @request GET:/api/Values/{id}
         * @secure
         */
        _this.valuesDetail = function (id, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/Values/".concat(id), method: "GET", secure: true, format: "json" }, params));
        };
        /**
         * No description
         *
         * @tags Values
         * @name ValuesUpdate
         * @request PUT:/api/Values/{id}
         * @secure
         */
        _this.valuesUpdate = function (id, data, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/Values/".concat(id), method: "PUT", body: data, secure: true, type: http_client_1.ContentType.Json }, params));
        };
        /**
         * No description
         *
         * @tags Values
         * @name ValuesDelete
         * @request DELETE:/api/Values/{id}
         * @secure
         */
        _this.valuesDelete = function (id, params) {
            if (params === void 0) { params = {}; }
            return _this.request(__assign({ path: "/api/Values/".concat(id), method: "DELETE", secure: true }, params));
        };
        return _this;
    }
    return Values;
}(http_client_1.HttpClient));
exports.Values = Values;
