/**
 * Dusky API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DuskyObjectModelsErrorDetails } from './duskyObjectModelsErrorDetails';

export class DuskyObjectModelsError {
    'reason'?: string;
    'message'?: string;
    'details'?: DuskyObjectModelsErrorDetails;
    'code'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "DuskyObjectModelsErrorDetails"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DuskyObjectModelsError.attributeTypeMap;
    }
}
