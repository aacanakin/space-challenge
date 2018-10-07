
import { LaunchListItem, LaunchStatusBadge } from "@components";
import { LaunchDetails, LaunchStatus } from "@models/Launch";
import { Resource } from "@models/Resource";
import * as React from "react";
import { Button, Grid, Label, List, Loader, Segment } from "semantic-ui-react";

export interface LaunchDetailsPageProps {
  launchDetails: Resource<LaunchDetails>;
  launchStatus: Resource<LaunchStatus>;
  onDidMount: () => void;
  onClickMissionDetails: () => void;
}

export class LaunchDetailsPage extends React.Component<LaunchDetailsPageProps> {
  constructor(props: LaunchDetailsPageProps) {
    super(props);

    this.renderLoading = this.renderLoading.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
  }

  public componentDidMount() {
    this.props.onDidMount();
  }

  public renderDetails() {
    const { isBusy } = this.props.launchDetails;
    const launchDetails = this.props.launchDetails.data;
    const launchStatus = this.props.launchStatus.data;
    if (isBusy || launchDetails === undefined) {
      return undefined;
    }

    return (
      <List
        selection={false}
        divided={true}
        verticalAlign="middle">
        <LaunchListItem item={launchDetails}>
          <>
            <Grid.Row>
              <Grid.Column width={4}>
                <LaunchStatusBadge status={launchStatus} />
              </Grid.Column>
              <Grid.Column width={8} />
              <Grid.Column width={4}>
                <Button onClick={this.props.onClickMissionDetails}>See Mission Details</Button>
              </Grid.Column>
            </Grid.Row>
          </>
        </LaunchListItem>
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
      </Segment>
    );
  }
}
