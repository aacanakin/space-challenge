import { ResourceType } from "@models/Resource";
import { LaunchService } from "./LaunchService";

export const resourceApiMap = {
    [ResourceType.LaunchItems]: LaunchService.getLaunches
};

export function requestHttpResource(resourceType: ResourceType, params: {[key: string]: any}) {
    return resourceApiMap[resourceType](params);
}
