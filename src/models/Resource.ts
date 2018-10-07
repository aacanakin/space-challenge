
export enum ResourceType {
    LaunchItems = "launchItems",
    LaunchDetails = "launchDetails",
    LaunchStatus = "launchStatus"
}

export interface Resource<T> {
    data?: T;
    isBusy: boolean;
    error?: Error;
}