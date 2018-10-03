
import { LaunchList, LaunchListProps } from "@components";
import { LaunchItem } from "@models/LaunchItem";
import { ResourceType } from "@models/Resource";
import { StoreState } from "@store";
import { resourceActions } from "@store/resource";
import * as moment from "moment";
import { connect } from "react-redux";
import { Dispatch } from "redux";

function mapStateToProps(state: StoreState): Partial<LaunchListProps> {
    // TODO: this should be coming from store state
    // const items: LaunchItem[] = [];
    // for (let i = 0; i < 10; i++) {
    //     items.push({
    //         id: uuidv4().toString(),
    //         imageUrl: "https://via.placeholder.com/150x150",
    //         launchAt: moment.utc(),
    //         name: "sample name"
    //     })
    // }

    return {
        // TODO: Move onItemClick to mapDispatchToProps
        
        resource: state.resources[ResourceType.LaunchItems]
    };
}

function mapDispatchToProps(
    dispatch: Dispatch<any>, // TODO: Convert any to action
): Partial<LaunchListProps> {
    return {
        onDidMount: () => {
            dispatch(resourceActions.resourceRequested(
                ResourceType.LaunchItems, {
                    start: moment().add(-6, "months"),
                    end: moment().add(3, "months"),
                    offset: 0,
                }
            ));
        },
        onItemClick: (item: LaunchItem) => {
            console.log(item);
        },
    };
}

export const LaunchListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LaunchList as any);
// TODO: Fix types, remove any