
export interface Launch {
    id: string;
    name: string;
    launchAt: string;
    image: {
        url: string;
        sizes: number[];
    };
}