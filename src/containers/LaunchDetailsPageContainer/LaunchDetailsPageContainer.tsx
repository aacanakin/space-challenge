
import { LaunchDetailsPage, LaunchDetailsPageProps } from "@components";
import { ResourceType } from "@models/Resource";
import { StoreState } from "@store";
import { resourceActions } from "@store/resource";
import { getResource } from "@store/resource/selectors";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { RouteProps } from "react-router";
import { Dispatch } from "redux";

function mapStateToProps({ resources }: StoreState): Partial<LaunchDetailsPageProps> {
    return {
        launchDetails: getResource(resources, ResourceType.LaunchDetails),
        launchStatus: getResource(resources, ResourceType.LaunchStatus)
    };
}

function mapDispatchToProps(
    dispatch: Dispatch<resourceActions.ResourceAction>,
    routeProps: RouteProps
): Partial<LaunchDetailsPageProps> {
    const id = Number.parseInt((routeProps as any).match.params.id, 10);
    return {
        onDidMount: () => {
            dispatch(resourceActions.resourceRequested(
                ResourceType.LaunchDetails, { id }
            ));
            dispatch(resourceActions.resourceRequested(
                ResourceType.LaunchStatus, { id }
            ));
        },
        onClickMissionDetails: () => {
            dispatch(push(`/launch/${id}/missionDetails`));
        }
    };
}

export const LaunchDetailsPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LaunchDetailsPage as any);
// TODO: Fix types, remove any
