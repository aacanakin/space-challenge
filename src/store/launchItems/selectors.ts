import { Launch, LaunchDetails, LaunchStatus, Mission } from "@models/Launch";
import { Resource } from "@models/Resource";
import * as moment from "moment";

export const DATE_FORMAT = "dddd, MMMM Do YYYY, h:mm:ss a";

export function getLaunchDetails(response: any): LaunchDetails {
    const launchItems: Launch[] = getLaunchItems(response);
    const launchDetails: LaunchDetails = {
        ...launchItems[0],
        hashtag: response.data.launches[0].hashtag,
        status: response.data.launches[0].status
    }
    return launchDetails;
}

export function getLaunchStatus(response: any): (LaunchStatus | undefined) {
    console.log(response.data);
    const status = response.data.types.length > 0 ? response.data.types[0] : undefined;
    if (status) {
        return {
            name: status.name,
            description: status.description
        };
    }

    return undefined;
}

export function getLaunchItems(response: any): Launch[] {

    return response.data.launches.map((item: any) => {

        const id: string = item.id;
        const name: string = item.name;
        let launchAt: string = "TBD";

        if (item.tbddate !== 1 && item.netstamp > 0) {
            launchAt = moment.unix(item.netstamp).format(DATE_FORMAT);
        }

        const missions: Mission[] = [];
        item.missions.map((mission: any) => {
            missions.push({
                id: mission.id,
                name: mission.name,
                description: mission.description,
                type: mission.typeName
            });
        });

        return {
            id,
            name,
            launchAt,
            image: {
                url: item.rocket.imageURL,
                sizes: item.rocket.imageSizes
            },
            missions
        }
    });
}

export function hasMore(resource: Resource<Launch[]>, count: number): boolean {
    if (resource.data) {
        return resource.data.length % count === 0;
    }

    return true;
}