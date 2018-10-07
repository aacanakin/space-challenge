
import { LaunchStatus } from "@models/Launch";
import * as React from "react";
import { Label } from "semantic-ui-react";

export interface LaunchStatusBadgeProps {
  status?: LaunchStatus;
}

export class LaunchStatusBadge extends React.Component<LaunchStatusBadgeProps> {
  constructor(props: LaunchStatusBadgeProps) {
    super(props);
  }

  public render() {
    const { status } = this.props;
    if (status && status.description) {
      return (
        <Label>
          Status: {status.description}
        </Label>
      );
    }

    return <Label color="red">Status: N/A</Label>;
  }
}
