import * as axios from "axios";
import * as qs from "qs";

export const API_URL = "https://launchlibrary.net/1.4";
export const DATE_FORMAT = "YYYY-MM-DD";
export const DEFAULT_LIMIT = 10;

export const DEFAULT_FIELDS = [
    "name",
    "netstamp",
    "rocket",
    "tbddate"
];

export class LaunchService {

    public static getLaunches(params: { [key: string]: any }) {
        const { start, end, offset } = params;

        const fields = params.fields || DEFAULT_FIELDS;
        const limit = params.limit || DEFAULT_LIMIT;

        const query = qs.stringify({
            enddate: end.format(DATE_FORMAT),
            fields: fields.join(","),
            limit,
            offset,
            startdate: start.format(DATE_FORMAT),
            sort: "desc"
        });

        const url = `${API_URL}/launch?${query}`;

        return axios.default.get(url);
    }

    public static getLaunchDetails(params: { [key: string]: any }) {
        const url = `${API_URL}/launch/${params.id}`;
        return axios.default.get(url);
    }

    public static getLaunchStatus(params: { [key: string]: any}) {
        const url =`${API_URL}/launchstatus/${params.id}`;
        return axios.default.get(url);
    }
}