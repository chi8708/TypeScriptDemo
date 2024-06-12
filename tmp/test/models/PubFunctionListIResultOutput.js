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
exports.PubFunctionListIResultOutput = void 0;
/**
* 泛型结果输出接口
*/
var PubFunctionListIResultOutput = exports.PubFunctionListIResultOutput = /** @class */ (function () {
    function PubFunctionListIResultOutput() {
    }
    PubFunctionListIResultOutput.getAttributeTypeMap = function () {
        return PubFunctionListIResultOutput.attributeTypeMap;
    };
    PubFunctionListIResultOutput.discriminator = undefined;
    PubFunctionListIResultOutput.attributeTypeMap = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<PubFunction>",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "msg",
            "baseName": "msg",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        }
    ];
    return PubFunctionListIResultOutput;
}());
