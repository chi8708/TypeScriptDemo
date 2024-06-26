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
exports.PubDepartmentListDataRes = void 0;
var PubDepartmentListDataRes = exports.PubDepartmentListDataRes = /** @class */ (function () {
    function PubDepartmentListDataRes() {
    }
    PubDepartmentListDataRes.getAttributeTypeMap = function () {
        return PubDepartmentListDataRes.attributeTypeMap;
    };
    PubDepartmentListDataRes.discriminator = undefined;
    PubDepartmentListDataRes.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "ResCode",
            "format": ""
        },
        {
            "name": "msg",
            "baseName": "msg",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<PubDepartment>",
            "format": ""
        }
    ];
    return PubDepartmentListDataRes;
}());
