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
exports.VPubfunctionParentListDataRes = void 0;
var VPubfunctionParentListDataRes = exports.VPubfunctionParentListDataRes = /** @class */ (function () {
    function VPubfunctionParentListDataRes() {
    }
    VPubfunctionParentListDataRes.getAttributeTypeMap = function () {
        return VPubfunctionParentListDataRes.attributeTypeMap;
    };
    VPubfunctionParentListDataRes.discriminator = undefined;
    VPubfunctionParentListDataRes.attributeTypeMap = [
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
            "type": "Array<VPubfunctionParent>",
            "format": ""
        }
    ];
    return VPubfunctionParentListDataRes;
}());