import * as moment from "moment";

export interface LaunchItem {
    id: string;
    name: string;
    launchAt: moment.Moment;
    imageUrl: string;
}