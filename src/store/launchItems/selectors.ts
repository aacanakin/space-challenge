import { Launch } from "@models/Launch";
import { Resource } from "@models/Resource";
import * as moment from "moment";

export const DATE_FORMAT = "dddd, MMMM Do YYYY, h:mm:ss a";

export function getLaunchItems(response: any): Launch[] {

    return response.data.launches.map((item: any) => {

        const id: string = item.id;
        const name: string = item.name;
        let launchAt: string = "TBD";

        if (item.tbddate !== 1 && item.netstamp > 0) {
            launchAt = moment.unix(item.netstamp).format(DATE_FORMAT);
        }

        return {
            id,
            name,
            launchAt,
            image: {
                url: item.rocket.imageURL,
                sizes: item.rocket.imageSizes
            }
        }
    });
}

export function hasMore(resource: Resource<Launch[]>, count: number): boolean {
    if (resource.data) {
        return resource.data.length % count === 0;
    }

    return true;
}