import {
    RESOURCE_FAILED,
    RESOURCE_INIT,
    RESOURCE_REQUESTED,
    RESOURCE_SUCCEEDED
} from "./constants";

export type ResourceType = string;

export interface ResourceRequested {
    type: RESOURCE_REQUESTED;
    payload: {
        resourceType: ResourceType;
        params?: { [key: string]: any; };
    };
}

export interface ResourceSucceeded {
    type: RESOURCE_SUCCEEDED;
    payload: {
        resourceType: ResourceType;
        data: any;
    };
}

export interface ResourceFailed {
    type: RESOURCE_FAILED;
    payload: {
        resourceType: ResourceType;
        error: Error;
    };
}

export interface ResourceInit {
    type: RESOURCE_INIT;
    payload: {
        resourceType: ResourceType;
    };
}

export type ResourceAction = ResourceRequested | ResourceFailed | ResourceSucceeded | ResourceInit;

export function resourceRequested(resourceType: ResourceType, params?: { [key: string]: any }): ResourceRequested {
    return {
        payload: {
            params,
            resourceType
        },
        type: RESOURCE_REQUESTED
    };
}

export function resourceSucceeded(resourceType: ResourceType, data: any): ResourceSucceeded {
    return {
        payload: {
            data,
            resourceType,
        },
        type: RESOURCE_SUCCEEDED
    };
}

export function resourceFailed(resourceType: ResourceType, error: Error): ResourceFailed {
    return {
        payload: {
            error,
            resourceType
        },
        type: RESOURCE_FAILED
    };
}

export function resourceInit(resourceType: ResourceType): ResourceInit {
    return {
        payload: {
            resourceType
        },
        type: RESOURCE_INIT
    };
}
