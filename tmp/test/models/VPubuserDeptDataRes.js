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
exports.VPubuserDeptDataRes = void 0;
var VPubuserDeptDataRes = exports.VPubuserDeptDataRes = /** @class */ (function () {
    function VPubuserDeptDataRes() {
    }
    VPubuserDeptDataRes.getAttributeTypeMap = function () {
        return VPubuserDeptDataRes.attributeTypeMap;
    };
    VPubuserDeptDataRes.discriminator = undefined;
    VPubuserDeptDataRes.attributeTypeMap = [
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
            "type": "VPubuserDept",
            "format": ""
        }
    ];
    return VPubuserDeptDataRes;
}());