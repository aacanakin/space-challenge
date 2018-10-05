import { ResourceAction, ResourceFailed, ResourceInit, ResourceSucceeded } from "./actions";
import {
    RESOURCE_FAILED,
    RESOURCE_INIT,
    RESOURCE_REQUESTED,
    RESOURCE_SUCCEEDED
} from "./constants";
import { ResourceStoreState } from "./state";

export function resourceReducer(
    state: ResourceStoreState,
    action: ResourceAction
): ResourceStoreState {

    if (action === undefined || action.payload === undefined || action.payload.resourceType === undefined) {
        return state;
    }

    const resourceType = action.payload.resourceType;
    const resourceState = state[resourceType];
    switch (action.type) {
        case RESOURCE_REQUESTED:
            return {
                ...state,
                [resourceType]: {
                    ...resourceState,
                    error: undefined,
                    isBusy: true,
                }
            };
        case RESOURCE_FAILED:
            const error = (action as ResourceFailed).payload.error;
            return {
                ...state,
                [resourceType]: {
                    ...resourceState,
                    error,
                    isBusy: false,
                }
            };
        case RESOURCE_SUCCEEDED:

            const actionData = (action as ResourceSucceeded).payload.data; 
            let data = resourceState.data;
            if (Array.isArray(resourceState.data)) {
                data.push(...actionData);
            } else {
                data = actionData;
            }

            return {
                ...state,
                [resourceType]: {
                    data,
                    error: undefined,
                    isBusy: false,
                }
            };
        case RESOURCE_INIT: {
            return {
                ...state,
                [resourceType]: {
                    data: undefined,
                    error: undefined,
                    isBusy: (action as ResourceInit).payload.isBusy || false,
                }
            };
        }
        default:
            return state;
    }
}
