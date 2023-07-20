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

import { ResCode } from '../models/ResCode';
import { VPubfunctionParent } from '../models/VPubfunctionParent';
import { HttpFile } from '../http/http';

export class VPubfunctionParentListDataRes {
    'code'?: ResCode;
    'msg'?: string | null;
    'data'?: Array<VPubfunctionParent> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return VPubfunctionParentListDataRes.attributeTypeMap;
    }

    public constructor() {
    }
}


