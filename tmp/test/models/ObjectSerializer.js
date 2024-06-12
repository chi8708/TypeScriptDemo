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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("../models/BooleanDataRes"), exports);
__exportStar(require("../models/BooleanIResultOutput"), exports);
__exportStar(require("../models/CaptchaData"), exports);
__exportStar(require("../models/CaptchaDataIResultOutput"), exports);
__exportStar(require("../models/LoginViewModel"), exports);
__exportStar(require("../models/Menu"), exports);
__exportStar(require("../models/MenuListDataRes"), exports);
__exportStar(require("../models/Meta"), exports);
__exportStar(require("../models/PageDataReq"), exports);
__exportStar(require("../models/PubDepartment"), exports);
__exportStar(require("../models/PubDepartmentListDataRes"), exports);
__exportStar(require("../models/PubFunction"), exports);
__exportStar(require("../models/PubFunctionListDataRes"), exports);
__exportStar(require("../models/PubFunctionListIResultOutput"), exports);
__exportStar(require("../models/PubRole"), exports);
__exportStar(require("../models/PubRoleListDataRes"), exports);
__exportStar(require("../models/PubRolePageDateRes"), exports);
__exportStar(require("../models/PubUser"), exports);
__exportStar(require("../models/ResCode"), exports);
__exportStar(require("../models/SlideTrack"), exports);
__exportStar(require("../models/StringIEnumerableDataRes"), exports);
__exportStar(require("../models/Track"), exports);
__exportStar(require("../models/VPubdeptParent"), exports);
__exportStar(require("../models/VPubdeptParentListDataRes"), exports);
__exportStar(require("../models/VPubfunctionParent"), exports);
__exportStar(require("../models/VPubfunctionParentListDataRes"), exports);
__exportStar(require("../models/VPubuserDept"), exports);
__exportStar(require("../models/VPubuserDeptDataRes"), exports);
__exportStar(require("../models/VPubuserDeptPageDateRes"), exports);
__exportStar(require("../models/ValidateResult"), exports);
__exportStar(require("../models/ValidateResultIResultOutput"), exports);
__exportStar(require("../models/ValidateResultType"), exports);
__exportStar(require("../models/WeatherForecast"), exports);
var BooleanDataRes_1 = require("../models/BooleanDataRes");
var BooleanIResultOutput_1 = require("../models/BooleanIResultOutput");
var CaptchaData_1 = require("../models/CaptchaData");
var CaptchaDataIResultOutput_1 = require("../models/CaptchaDataIResultOutput");
var LoginViewModel_1 = require("../models/LoginViewModel");
var Menu_1 = require("../models/Menu");
var MenuListDataRes_1 = require("../models/MenuListDataRes");
var Meta_1 = require("../models/Meta");
var PageDataReq_1 = require("../models/PageDataReq");
var PubDepartment_1 = require("../models/PubDepartment");
var PubDepartmentListDataRes_1 = require("../models/PubDepartmentListDataRes");
var PubFunction_1 = require("../models/PubFunction");
var PubFunctionListDataRes_1 = require("../models/PubFunctionListDataRes");
var PubFunctionListIResultOutput_1 = require("../models/PubFunctionListIResultOutput");
var PubRole_1 = require("../models/PubRole");
var PubRoleListDataRes_1 = require("../models/PubRoleListDataRes");
var PubRolePageDateRes_1 = require("../models/PubRolePageDateRes");
var PubUser_1 = require("../models/PubUser");
var SlideTrack_1 = require("../models/SlideTrack");
var StringIEnumerableDataRes_1 = require("../models/StringIEnumerableDataRes");
var Track_1 = require("../models/Track");
var VPubdeptParent_1 = require("../models/VPubdeptParent");
var VPubdeptParentListDataRes_1 = require("../models/VPubdeptParentListDataRes");
var VPubfunctionParent_1 = require("../models/VPubfunctionParent");
var VPubfunctionParentListDataRes_1 = require("../models/VPubfunctionParentListDataRes");
var VPubuserDept_1 = require("../models/VPubuserDept");
var VPubuserDeptDataRes_1 = require("../models/VPubuserDeptDataRes");
var VPubuserDeptPageDateRes_1 = require("../models/VPubuserDeptPageDateRes");
var ValidateResult_1 = require("../models/ValidateResult");
var ValidateResultIResultOutput_1 = require("../models/ValidateResultIResultOutput");
var WeatherForecast_1 = require("../models/WeatherForecast");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
var enumsMap = new Set([
    "ResCode",
    "ValidateResultType",
]);
var typeMap = {
    "BooleanDataRes": BooleanDataRes_1.BooleanDataRes,
    "BooleanIResultOutput": BooleanIResultOutput_1.BooleanIResultOutput,
    "CaptchaData": CaptchaData_1.CaptchaData,
    "CaptchaDataIResultOutput": CaptchaDataIResultOutput_1.CaptchaDataIResultOutput,
    "LoginViewModel": LoginViewModel_1.LoginViewModel,
    "Menu": Menu_1.Menu,
    "MenuListDataRes": MenuListDataRes_1.MenuListDataRes,
    "Meta": Meta_1.Meta,
    "PageDataReq": PageDataReq_1.PageDataReq,
    "PubDepartment": PubDepartment_1.PubDepartment,
    "PubDepartmentListDataRes": PubDepartmentListDataRes_1.PubDepartmentListDataRes,
    "PubFunction": PubFunction_1.PubFunction,
    "PubFunctionListDataRes": PubFunctionListDataRes_1.PubFunctionListDataRes,
    "PubFunctionListIResultOutput": PubFunctionListIResultOutput_1.PubFunctionListIResultOutput,
    "PubRole": PubRole_1.PubRole,
    "PubRoleListDataRes": PubRoleListDataRes_1.PubRoleListDataRes,
    "PubRolePageDateRes": PubRolePageDateRes_1.PubRolePageDateRes,
    "PubUser": PubUser_1.PubUser,
    "SlideTrack": SlideTrack_1.SlideTrack,
    "StringIEnumerableDataRes": StringIEnumerableDataRes_1.StringIEnumerableDataRes,
    "Track": Track_1.Track,
    "VPubdeptParent": VPubdeptParent_1.VPubdeptParent,
    "VPubdeptParentListDataRes": VPubdeptParentListDataRes_1.VPubdeptParentListDataRes,
    "VPubfunctionParent": VPubfunctionParent_1.VPubfunctionParent,
    "VPubfunctionParentListDataRes": VPubfunctionParentListDataRes_1.VPubfunctionParentListDataRes,
    "VPubuserDept": VPubuserDept_1.VPubuserDept,
    "VPubuserDeptDataRes": VPubuserDeptDataRes_1.VPubuserDeptDataRes,
    "VPubuserDeptPageDateRes": VPubuserDeptPageDateRes_1.VPubuserDeptPageDateRes,
    "ValidateResult": ValidateResult_1.ValidateResult,
    "ValidateResultIResultOutput": ValidateResultIResultOutput_1.ValidateResultIResultOutput,
    "WeatherForecast": WeatherForecast_1.WeatherForecast,
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var date = data_1[_i];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var _a = 0, attributeTypes_1 = attributeTypes; _a < attributeTypes_1.length; _a++) {
                var attributeType = attributeTypes_1[_a];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var date = data_2[_i];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var _a = 0, attributeTypes_2 = attributeTypes; _a < attributeTypes_2.length; _a++) {
                var attributeType = attributeTypes_2[_a];
                var value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    };
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0, normalMediaTypes_1 = normalMediaTypes; _i < normalMediaTypes_1.length; _i++) {
            var mediaType = normalMediaTypes_1[_i];
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    };
    /**
     * Convert data to a string according the given media type
     */
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "text/plain") {
            return String(data);
        }
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    /**
     * Parse data from a string according to the given media type
     */
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "text/plain") {
            return rawData;
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        if (mediaType === "text/html") {
            return rawData;
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
