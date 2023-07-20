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

export class PubRole {
    'id'?: number;
    'roleCode'?: string | null;
    'roleName'?: string | null;
    'remark'?: string | null;
    'stopFlag'?: boolean;
    'crid'?: string | null;
    'crdt'?: Date | null;
    'lmid'?: string | null;
    'lmdt'?: Date | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "roleCode",
            "baseName": "roleCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "roleName",
            "baseName": "roleName",
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
            "type": "boolean",
            "format": ""
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
        }    ];

    static getAttributeTypeMap() {
        return PubRole.attributeTypeMap;
    }

    public constructor() {
    }
}
