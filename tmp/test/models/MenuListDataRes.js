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
exports.MenuListDataRes = void 0;
var MenuListDataRes = exports.MenuListDataRes = /** @class */ (function () {
    function MenuListDataRes() {
    }
    MenuListDataRes.getAttributeTypeMap = function () {
        return MenuListDataRes.attributeTypeMap;
    };
    MenuListDataRes.discriminator = undefined;
    MenuListDataRes.attributeTypeMap = [
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
            "type": "Array<Menu>",
            "format": ""
        }
    ];
    return MenuListDataRes;
}());
