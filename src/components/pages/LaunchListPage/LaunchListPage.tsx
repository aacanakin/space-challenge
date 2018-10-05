
import { LaunchListContainer } from "@containers/LaunchListContainer";
import * as React from "react";
import { Label, Segment } from "semantic-ui-react";

export class LaunchListPage extends React.Component {

  public render() {

    return (
      <Segment raised={true} padded={true}>
        <Label>Launch List</Label>
        <LaunchListContainer />
      </Segment>
    );
  }
}
