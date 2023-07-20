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

import { CaptchaData } from '../models/CaptchaData';
import { HttpFile } from '../http/http';

/**
* 泛型结果输出接口
*/
export class CaptchaDataIResultOutput {
    'data'?: CaptchaData;
    /**
    * 是否成功
    */
    'success'?: boolean;
    /**
    * 消息
    */
    'msg'?: string | null;
    /**
    * 编码
    */
    'code'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "CaptchaData",
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
        }    ];

    static getAttributeTypeMap() {
        return CaptchaDataIResultOutput.attributeTypeMap;
    }

    public constructor() {
    }
}

