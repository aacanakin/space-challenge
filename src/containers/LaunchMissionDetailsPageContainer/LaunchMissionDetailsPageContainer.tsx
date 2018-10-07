
import { LaunchMissionDetailsPage, LaunchMissionDetailsPageProps } from "@components";
import { ResourceType } from "@models/Resource";
import { StoreState } from "@store";
import { resourceActions } from "@store/resource";
import { getResource } from "@store/resource/selectors";
import { connect } from "react-redux";
import { RouteProps } from "react-router";
import { Dispatch } from "redux";

function mapStateToProps({ resources }: StoreState): Partial<LaunchMissionDetailsPageProps> {
    return {
        launchDetails: getResource(resources, ResourceType.LaunchDetails),
    };
}

function mapDispatchToProps(
    dispatch: Dispatch<resourceActions.ResourceAction>,
    routeProps: RouteProps
): Partial<LaunchMissionDetailsPageProps> {
    const id = Number.parseInt((routeProps as any).match.params.id, 10);
    return {
        onDidMount: () => {
            dispatch(resourceActions.resourceRequested(
                ResourceType.LaunchDetails, { id }
            ));
        },
    };
}

export const LaunchMissionDetailsPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LaunchMissionDetailsPage as any);
// TODO: Fix types
