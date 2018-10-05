import { ResourceType } from "./actions";
import { ResourceStoreState } from "./state";

export function getResource(resources: ResourceStoreState, resourceType: ResourceType) {
    if (resources[resourceType]) {
        return resources[resourceType];
    }

    return undefined;
}

export function getData(resources: ResourceStoreState, resourceType: ResourceType) {
    if (resources && resources[resourceType]) {
        return resources[resourceType].data;
    }

    return undefined;
}

export function isBusy(resources: ResourceStoreState, resourceType: ResourceType) {
    if (resources && resources[resourceType]) {
        return resources[resourceType].isBusy;
    }

    return undefined;
}

export function getError(resources: ResourceStoreState, resourceType: ResourceType) {
    if (resources && resources[resourceType]) {
        return resources[resourceType].error;
    }

    return undefined;
}
