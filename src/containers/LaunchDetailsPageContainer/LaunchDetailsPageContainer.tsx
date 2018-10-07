
import { LaunchDetailsPage, LaunchDetailsPageProps } from "@components";
import { ResourceType } from "@models/Resource";
import { StoreState } from "@store";
import { resourceActions } from "@store/resource";
import { getResource } from "@store/resource/selectors";
import { connect } from "react-redux";
import { RouteProps } from "react-router";
import { Dispatch } from "redux";

function mapStateToProps(state: StoreState): Partial<LaunchDetailsPageProps> {
    return {
        launchDetails: getResource(state.resources, ResourceType.LaunchDetails),
        launchStatus: getResource(state.resources, ResourceType.LaunchStatus)
    };
}

function mapDispatchToProps(
    dispatch: Dispatch<resourceActions.ResourceAction>,
    routeProps: RouteProps
): Partial<LaunchDetailsPageProps> {
    return {
        onDidMount: () => {
            const id = Number.parseInt((routeProps as any).match.params.id, 10);
            dispatch(resourceActions.resourceRequested(
                ResourceType.LaunchDetails, { id }
            ));
            dispatch(resourceActions.resourceRequested(
                ResourceType.LaunchStatus, { id }
            ));
        }
    };
}

export const LaunchDetailsPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LaunchDetailsPage as any);
// TODO: Fix types, remove any
