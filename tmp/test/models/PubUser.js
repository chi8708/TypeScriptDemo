"use strict";
/**
 * CNet API
 * CNet基础框架API
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubUser = void 0;
var PubUser = exports.PubUser = /** @class */ (function () {
    function PubUser() {
    }
    PubUser.getAttributeTypeMap = function () {
        return PubUser.attributeTypeMap;
    };
    PubUser.discriminator = undefined;
    PubUser.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "userCode",
            "baseName": "userCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string",
            "format": ""
        },
        {
            "name": "realName",
            "baseName": "realName",
            "type": "string",
            "format": ""
        },
        {
            "name": "userPwd",
            "baseName": "userPwd",
            "type": "string",
            "format": ""
        },
        {
            "name": "sex",
            "baseName": "sex",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "identityNo",
            "baseName": "identityNo",
            "type": "string",
            "format": ""
        },
        {
            "name": "birthday",
            "baseName": "birthday",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "deptCode",
            "baseName": "deptCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "managerFlag",
            "baseName": "managerFlag",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "tel",
            "baseName": "tel",
            "type": "string",
            "format": ""
        },
        {
            "name": "eMail",
            "baseName": "eMail",
            "type": "string",
            "format": ""
        },
        {
            "name": "qq",
            "baseName": "qq",
            "type": "string",
            "format": ""
        },
        {
            "name": "remark",
            "baseName": "remark",
            "type": "string",
            "format": ""
        },
        {
            "name": "stopFlag",
            "baseName": "stopFlag",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "crid",
            "baseName": "crid",
            "type": "string",
            "format": ""
        },
        {
            "name": "crdt",
            "baseName": "crdt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lmid",
            "baseName": "lmid",
            "type": "string",
            "format": ""
        },
        {
            "name": "lmdt",
            "baseName": "lmdt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "loginDate",
            "baseName": "loginDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "provinceCode",
            "baseName": "provinceCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "cityCode",
            "baseName": "cityCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "regionCode",
            "baseName": "regionCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "userAddress",
            "baseName": "userAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "wxcode",
            "baseName": "wxcode",
            "type": "string",
            "format": ""
        },
        {
            "name": "headUrl",
            "baseName": "headUrl",
            "type": "string",
            "format": ""
        }
    ];
    return PubUser;
}());
