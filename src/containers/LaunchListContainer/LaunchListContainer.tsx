
import { LaunchList, LaunchListProps } from "@components";
import { LaunchItem } from "@models/LaunchItem";
import { StoreState } from "@store";
import * as moment from "moment";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as uuidv4 from "uuid/v4";

function mapStateToProps(state: StoreState): Partial<LaunchListProps> {
    // TODO: this should be coming from store state
    const items: LaunchItem[] = [];
    for (let i = 0; i < 10; i++) {
        items.push({
            id: uuidv4().toString(),
            imageUrl: "https://via.placeholder.com/150x150",
            launchAt: moment.utc(),
            name: "sample name"
        })
    }

    return {
        // TODO: Move onItemClick to mapDispatchToProps
        onItemClick: (item: LaunchItem) => {
            console.log(item);
        },
        resource: {
            data: items,
            error: undefined,
            isBusy: true,
        },
    };
}

function mapDispatchToProps(
    dispatch: Dispatch<any>, // TODO: Convert any to action
): Partial<LaunchListProps> {
    return {
        // TODO: Map your dispatch to props here
    };
}

export const LaunchListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LaunchList as any);
// TODO: Fix types, remove any