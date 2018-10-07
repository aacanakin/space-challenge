export interface Mission {
    id: number;
    name: string;
    description: string;
    type: string;
}

export interface Launch {
    id: string;
    name: string;
    launchAt: string;
    image: {
        url: string;
        sizes: number[];
    };
    missions: Mission[];
}

export interface LaunchStatus {
    name: string;
    description: string;
}

export interface LaunchDetails extends Launch {
    hashtag?: string;
    status: LaunchStatus;
}