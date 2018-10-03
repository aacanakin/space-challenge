
export enum ResourceType {
    LaunchItems = "launchItems"
}

export interface Resource<T> {
    data?: T;
    isBusy: boolean;
    error?: Error;
}