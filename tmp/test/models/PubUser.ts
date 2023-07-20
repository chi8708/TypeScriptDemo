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

export class PubUser {
    'id'?: number;
    'userCode'?: string | null;
    'userName'?: string | null;
    'realName'?: string | null;
    'userPwd'?: string | null;
    'sex'?: number;
    'identityNo'?: string | null;
    'birthday'?: Date | null;
    'deptCode'?: string | null;
    'managerFlag'?: number;
    'tel'?: string | null;
    'eMail'?: string | null;
    'qq'?: string | null;
    'remark'?: string | null;
    'stopFlag'?: number;
    'crid'?: string | null;
    'crdt'?: Date | null;
    'lmid'?: string | null;
    'lmdt'?: Date | null;
    'loginDate'?: Date | null;
    'provinceCode'?: string | null;
    'cityCode'?: string | null;
    'regionCode'?: string | null;
    'userAddress'?: string | null;
    'wxcode'?: string | null;
    'headUrl'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return PubUser.attributeTypeMap;
    }

    public constructor() {
    }
}

