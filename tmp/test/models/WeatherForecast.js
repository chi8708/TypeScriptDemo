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
exports.WeatherForecast = void 0;
var WeatherForecast = exports.WeatherForecast = /** @class */ (function () {
    function WeatherForecast() {
    }
    WeatherForecast.getAttributeTypeMap = function () {
        return WeatherForecast.attributeTypeMap;
    };
    WeatherForecast.discriminator = undefined;
    WeatherForecast.attributeTypeMap = [
        {
            "name": "date",
            "baseName": "date",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "temperatureC",
            "baseName": "temperatureC",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "temperatureF",
            "baseName": "temperatureF",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string",
            "format": ""
        }
    ];
    return WeatherForecast;
}());
