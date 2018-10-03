
import { Resource } from "@models/Resource";
import { Dictionary } from "lodash";

export type ResourceStoreState = Dictionary<Resource<any>>;

export function initialResourceState(): Resource<any> {
    return {
        data: undefined,
        error: undefined,
        isBusy: false,
    };
}