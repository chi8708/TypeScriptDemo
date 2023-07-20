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

import { HttpFile } from '../http/http';

export class VPubdeptParent {
    'deptCode'?: string | null;
    'deptName'?: string | null;
    'remark'?: string | null;
    'parentCode'?: string | null;
    'deptLevel'?: number;
    'lmid'?: string | null;
    'lmdt'?: Date | null;
    'stopFlag'?: boolean | null;
    'parentName'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deptCode",
            "baseName": "deptCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "deptName",
            "baseName": "deptName",
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
            "name": "parentCode",
            "baseName": "parentCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "deptLevel",
            "baseName": "deptLevel",
            "type": "number",
            "format": "int32"
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
            "name": "stopFlag",
            "baseName": "stopFlag",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "parentName",
            "baseName": "parentName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VPubdeptParent.attributeTypeMap;
    }

    public constructor() {
    }
}
