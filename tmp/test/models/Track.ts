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

export class Track {
    'x'?: number;
    'y'?: number;
    't'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "x",
            "baseName": "x",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "y",
            "baseName": "y",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "t",
            "baseName": "t",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return Track.attributeTypeMap;
    }

    public constructor() {
    }
}
