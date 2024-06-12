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
exports.SlideTrack = void 0;
var SlideTrack = exports.SlideTrack = /** @class */ (function () {
    function SlideTrack() {
    }
    SlideTrack.getAttributeTypeMap = function () {
        return SlideTrack.attributeTypeMap;
    };
    SlideTrack.discriminator = undefined;
    SlideTrack.attributeTypeMap = [
        {
            "name": "backgroundImageWidth",
            "baseName": "backgroundImageWidth",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "backgroundImageHeight",
            "baseName": "backgroundImageHeight",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "sliderImageWidth",
            "baseName": "sliderImageWidth",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "sliderImageHeight",
            "baseName": "sliderImageHeight",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endTime",
            "baseName": "endTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "tracks",
            "baseName": "tracks",
            "type": "Array<Track>",
            "format": ""
        },
        {
            "name": "percent",
            "baseName": "percent",
            "type": "number",
            "format": "float"
        }
    ];
    return SlideTrack;
}());