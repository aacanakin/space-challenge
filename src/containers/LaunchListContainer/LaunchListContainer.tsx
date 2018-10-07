
import { LaunchList, LaunchListProps } from "@components";
import { Launch } from "@models/Launch";
import { ResourceType } from "@models/Resource";
import { DEFAULT_LIMIT } from "@services";
import { StoreState } from "@store";
import { launchItemsSelectors } from "@store/launchItems";
import { resourceActions } from "@store/resource";
import { push } from "connected-react-router";
import * as moment from "moment";
import { connect } from "react-redux";
import { Dispatch } from "redux";

function mapStateToProps(state: StoreState): Partial<LaunchListProps> {
    return {
        resource: state.resources[ResourceType.LaunchItems],
        hasMore: launchItemsSelectors.hasMore(state.resources[ResourceType.LaunchItems], DEFAULT_LIMIT)
    };
}

function mapDispatchToProps(
    dispatch: Dispatch<resourceActions.ResourceAction>
): Partial<LaunchListProps> {

    const start = moment().add(-6, "months");
    const end = moment().add(3, "months");

    return {
        onItemClick: (item: Launch) => {
            dispatch(push(`/launch/${item.id}`));
        },
        onDidMount: () => {
            dispatch(resourceActions.resourceRequested(
                ResourceType.LaunchItems, {
                    start,
                    end,
                    offset: 0,
                }
            ));
        },
        onWillUnmount: () => {
            dispatch(resourceActions.resourceInit(ResourceType.LaunchItems));
        },
        onScroll: (offset: number, isBusy: boolean) => {
            if (!isBusy) {
                dispatch(resourceActions.resourceRequested(
                    ResourceType.LaunchItems, {
                        start,
                        end,
                        offset,
                    }
                ));
            }
        }
    }
}

export const LaunchListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LaunchList as any);
// TODO: Fix types, remove any