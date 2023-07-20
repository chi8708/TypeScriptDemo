export * from '../models/BooleanDataRes';
export * from '../models/BooleanIResultOutput';
export * from '../models/CaptchaData';
export * from '../models/CaptchaDataIResultOutput';
export * from '../models/LoginViewModel';
export * from '../models/Menu';
export * from '../models/MenuListDataRes';
export * from '../models/Meta';
export * from '../models/PageDataReq';
export * from '../models/PubDepartment';
export * from '../models/PubDepartmentListDataRes';
export * from '../models/PubFunction';
export * from '../models/PubFunctionListDataRes';
export * from '../models/PubFunctionListIResultOutput';
export * from '../models/PubRole';
export * from '../models/PubRoleListDataRes';
export * from '../models/PubRolePageDateRes';
export * from '../models/PubUser';
export * from '../models/ResCode';
export * from '../models/SlideTrack';
export * from '../models/StringIEnumerableDataRes';
export * from '../models/Track';
export * from '../models/VPubdeptParent';
export * from '../models/VPubdeptParentListDataRes';
export * from '../models/VPubfunctionParent';
export * from '../models/VPubfunctionParentListDataRes';
export * from '../models/VPubuserDept';
export * from '../models/VPubuserDeptDataRes';
export * from '../models/VPubuserDeptPageDateRes';
export * from '../models/ValidateResult';
export * from '../models/ValidateResultIResultOutput';
export * from '../models/ValidateResultType';
export * from '../models/WeatherForecast';

import { BooleanDataRes    } from '../models/BooleanDataRes';
import { BooleanIResultOutput } from '../models/BooleanIResultOutput';
import { CaptchaData } from '../models/CaptchaData';
import { CaptchaDataIResultOutput } from '../models/CaptchaDataIResultOutput';
import { LoginViewModel } from '../models/LoginViewModel';
import { Menu } from '../models/Menu';
import { MenuListDataRes    } from '../models/MenuListDataRes';
import { Meta } from '../models/Meta';
import { PageDataReq } from '../models/PageDataReq';
import { PubDepartment } from '../models/PubDepartment';
import { PubDepartmentListDataRes    } from '../models/PubDepartmentListDataRes';
import { PubFunction } from '../models/PubFunction';
import { PubFunctionListDataRes    } from '../models/PubFunctionListDataRes';
import { PubFunctionListIResultOutput } from '../models/PubFunctionListIResultOutput';
import { PubRole } from '../models/PubRole';
import { PubRoleListDataRes    } from '../models/PubRoleListDataRes';
import { PubRolePageDateRes        } from '../models/PubRolePageDateRes';
import { PubUser } from '../models/PubUser';
import { ResCode } from '../models/ResCode';
import { SlideTrack } from '../models/SlideTrack';
import { StringIEnumerableDataRes    } from '../models/StringIEnumerableDataRes';
import { Track } from '../models/Track';
import { VPubdeptParent } from '../models/VPubdeptParent';
import { VPubdeptParentListDataRes    } from '../models/VPubdeptParentListDataRes';
import { VPubfunctionParent } from '../models/VPubfunctionParent';
import { VPubfunctionParentListDataRes    } from '../models/VPubfunctionParentListDataRes';
import { VPubuserDept } from '../models/VPubuserDept';
import { VPubuserDeptDataRes    } from '../models/VPubuserDeptDataRes';
import { VPubuserDeptPageDateRes        } from '../models/VPubuserDeptPageDateRes';
import { ValidateResult   } from '../models/ValidateResult';
import { ValidateResultIResultOutput } from '../models/ValidateResultIResultOutput';
import { ValidateResultType } from '../models/ValidateResultType';
import { WeatherForecast } from '../models/WeatherForecast';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "ResCode",
    "ValidateResultType",
]);

let typeMap: {[index: string]: any} = {
    "BooleanDataRes": BooleanDataRes,
    "BooleanIResultOutput": BooleanIResultOutput,
    "CaptchaData": CaptchaData,
    "CaptchaDataIResultOutput": CaptchaDataIResultOutput,
    "LoginViewModel": LoginViewModel,
    "Menu": Menu,
    "MenuListDataRes": MenuListDataRes,
    "Meta": Meta,
    "PageDataReq": PageDataReq,
    "PubDepartment": PubDepartment,
    "PubDepartmentListDataRes": PubDepartmentListDataRes,
    "PubFunction": PubFunction,
    "PubFunctionListDataRes": PubFunctionListDataRes,
    "PubFunctionListIResultOutput": PubFunctionListIResultOutput,
    "PubRole": PubRole,
    "PubRoleListDataRes": PubRoleListDataRes,
    "PubRolePageDateRes": PubRolePageDateRes,
    "PubUser": PubUser,
    "SlideTrack": SlideTrack,
    "StringIEnumerableDataRes": StringIEnumerableDataRes,
    "Track": Track,
    "VPubdeptParent": VPubdeptParent,
    "VPubdeptParentListDataRes": VPubdeptParentListDataRes,
    "VPubfunctionParent": VPubfunctionParent,
    "VPubfunctionParentListDataRes": VPubfunctionParentListDataRes,
    "VPubuserDept": VPubuserDept,
    "VPubuserDeptDataRes": VPubuserDeptDataRes,
    "VPubuserDeptPageDateRes": VPubuserDeptPageDateRes,
    "ValidateResult": ValidateResult,
    "ValidateResultIResultOutput": ValidateResultIResultOutput,
    "WeatherForecast": WeatherForecast,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
