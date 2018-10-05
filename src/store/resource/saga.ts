import { Launch } from "@models/Launch";
import { requestHttpResource } from "@services";
import { launchItemsSelectors } from "@store/launchItems";
import { call, put, takeLatest } from "redux-saga/effects";
import { resourceFailed, ResourceRequested, resourceSucceeded } from "./actions";
import { RESOURCE_REQUESTED } from "./constants";

export function* requestResource(action: ResourceRequested) {

    try {
        const response = yield call(
            requestHttpResource,
            action.payload.resourceType,
            {
                ...action.payload.params
            }
        );
        
        const launches: Launch[] = launchItemsSelectors.getLaunchItems(response);
        yield put(resourceSucceeded(action.payload.resourceType, launches));
    } catch (e) {
        console.error(e);
        yield put(resourceFailed(action.payload.resourceType, e));
    }
}

export function* resourceSaga() {
    yield takeLatest(RESOURCE_REQUESTED, requestResource);
}
