
export interface Launch {
    id: string;
    name: string;
    launchAt: string;
    image: {
        url: string;
        sizes: number[];
    };
}

export interface LaunchStatus {
    name: string;
    description: string;
}

export interface LaunchDetails extends Launch {
    hashtag?: string;
    status: LaunchStatus;
}