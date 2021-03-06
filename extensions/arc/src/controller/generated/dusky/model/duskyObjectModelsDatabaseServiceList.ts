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

import { DuskyObjectModelsDatabaseService } from './duskyObjectModelsDatabaseService';

export class DuskyObjectModelsDatabaseServiceList {
    'kind'?: string;
    'apiVersion'?: string;
    'metadata'?: object;
    'items': Array<DuskyObjectModelsDatabaseService>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<DuskyObjectModelsDatabaseService>"
        }    ];

    static getAttributeTypeMap() {
        return DuskyObjectModelsDatabaseServiceList.attributeTypeMap;
    }
}

