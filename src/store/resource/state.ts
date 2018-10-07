
import { Resource, ResourceType } from "@models/Resource";
import { getLaunchDetails, getLaunchItems, getLaunchStatus } from "@store/launchItems/selectors";
import { Dictionary } from "lodash";

export type ResourceStoreState = Dictionary<Resource<any>>;

export const selectorMap = {
    [ResourceType.LaunchItems]: getLaunchItems,
    [ResourceType.LaunchDetails]: getLaunchDetails,
    [ResourceType.LaunchStatus]: getLaunchStatus
}

export function initialResourceState(): Resource<any> {
    return {
        data: undefined,
        error: undefined,
        isBusy: false,
    };
}