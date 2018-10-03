import { call, put, takeEvery } from "redux-saga/effects";
import { resourceFailed, ResourceRequested, resourceSucceeded } from "./actions";
import { ResourceType } from "./actions";
import { RESOURCE_REQUESTED } from "./constants";

export function requestHttpResource(resourceType: ResourceType, params: { [key: string]: any }) {
    // TODO: Fill this 
}

export function* requestResource(action: ResourceRequested) {

    try {
        // const accessToken = localStorage.getItem(authStorageKeys.accessToken);
        const response = yield call(
            requestHttpResource,
            action.payload.resourceType,
            {
                // accessToken: accessToken,
                ...action.payload.params
            }
        );
        yield put(resourceSucceeded(action.payload.resourceType, response));
    } catch (e) {
        yield put(resourceFailed(action.payload.resourceType, e));
    }
}

export function* resourceSaga() {
    yield takeEvery(RESOURCE_REQUESTED, requestResource);
}
