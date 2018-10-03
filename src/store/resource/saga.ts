import { LaunchItem } from "@models/LaunchItem";
import { requestHttpResource } from "@services";
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

        const launchItems: LaunchItem[] = response.data.launches.map((launch: any) => {
            return new LaunchItem(launch);
        });
        console.log(launchItems);
        yield put(resourceSucceeded(action.payload.resourceType, launchItems));
    } catch (e) {
        console.error(e);
        yield put(resourceFailed(action.payload.resourceType, e));
    }
}

export function* resourceSaga() {
    yield takeEvery(RESOURCE_REQUESTED, requestResource);
}
