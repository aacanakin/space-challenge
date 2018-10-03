import * as moment from "moment";

export class LaunchItem {

    public id: string;
    public name: string;
    public launchAt: moment.Moment | string;
    public imageUrl: string;

    constructor(params: { [key: string]: any }) {
        this.id = params.id;
        this.name = params.name;

        if (params.tbddate === 1) {
            this.launchAt = "TBD";
        } else {
            this.launchAt = moment.unix(params.netstamp);
        }

        const imageSizes: number[] = params.rocket.imageSizes.sort();
        const smallestImageSize = imageSizes[0];
        const largestImageSize = imageSizes[imageSizes.length - 1];

        this.imageUrl = params.rocket.imageURL.replace(largestImageSize, smallestImageSize);
    }
}