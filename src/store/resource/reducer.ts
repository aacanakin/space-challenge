import { ResourceAction, ResourceFailed, ResourceSucceeded } from "./actions";
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
    switch (action.type) {
        case RESOURCE_REQUESTED:
            return {
                ...state,
                [resourceType]: {
                    ...state[resourceType],
                    error: undefined,
                    isBusy: true,
                }
            };
        case RESOURCE_FAILED:
            const error = (action as ResourceFailed).payload.error;
            return {
                ...state,
                [resourceType]: {
                    data: state[resourceType].data,
                    error,
                    isBusy: false,
                }
            };
        case RESOURCE_SUCCEEDED:
            const data = (action as ResourceSucceeded).payload.data;
            return {
                ...state,
                [resourceType]: {
                    data, // TODO: append data with respect to configuration
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
                    isBusy: false,
                }
            };
        }
        default:
            return state;
    }
}
