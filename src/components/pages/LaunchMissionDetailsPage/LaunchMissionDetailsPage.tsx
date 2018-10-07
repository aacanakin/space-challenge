
import { LaunchListItem } from "@components";
import { LaunchDetails } from "@models/Launch";
import { Resource } from "@models/Resource";
import * as React from "react";
import { Label, List, Loader, Segment } from "semantic-ui-react";

export interface LaunchMissionDetailsPageProps {
  launchDetails: Resource<LaunchDetails>;
  onDidMount: () => void;
}

export class LaunchMissionDetailsPage extends React.Component<LaunchMissionDetailsPageProps> {

  constructor(props: LaunchMissionDetailsPageProps) {
    super(props);

    this.renderLoading = this.renderLoading.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.renderMissions = this.renderMissions.bind(this);
  }

  public componentDidMount() {
    this.props.onDidMount();
  }

  public renderMissions() {
    const launchDetails = this.props.launchDetails.data;
    if (launchDetails) {
      return (
        <>
        <Label>Missions</Label>
        <List divided={true}>
          {
            launchDetails.missions.map((mission) => {
              return (
                // tslint:disable-next-line:jsx-key
                <List.Item key={mission.id}>
                  <List.Content>
                    <List.Header>
                      {mission.name} / {mission.type}
                    </List.Header>
                    {mission.description}
                  </List.Content>
                </List.Item>
              )
            })
          }
        </List>
        </>
      )
    }

    return undefined;
  }

  public renderDetails() {
    const { isBusy } = this.props.launchDetails;
    const launchDetails = this.props.launchDetails.data;
    if (isBusy || launchDetails === undefined) {
      return undefined;
    }

    return (
      <List
        selection={false}
        divided={true}
        verticalAlign="middle">
        <LaunchListItem item={launchDetails} />
      </List>
    );
  }

  public renderLoading() {
    const { isBusy } = this.props.launchDetails;
    if (isBusy) {
      return <Loader active={true} />;
    }

    return undefined;
  }

  public render() {
    return (
      <Segment>
        <Label>Launch Details</Label>
        {this.renderLoading()}
        {this.renderDetails()}
        {this.renderMissions()}
      </Segment>
    );
  }
}
