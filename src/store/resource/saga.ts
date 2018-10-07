import { requestHttpResource } from "@services";
import { selectorMap } from "@store/resource/state";
import { call, put, takeEvery } from "redux-saga/effects";
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
        
        const selector = selectorMap[action.payload.resourceType];
        const data: any = selector(response);
        yield put(resourceSucceeded(action.payload.resourceType, data));
    } catch (e) {
        console.error(e);
        yield put(resourceFailed(action.payload.resourceType, e));
    }
}

export function* resourceSaga() {
    yield takeEvery(RESOURCE_REQUESTED, requestResource);
}
