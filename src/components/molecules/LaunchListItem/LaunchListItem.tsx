
import { LaunchItem } from '@models/LaunchItem';
import * as React from "react";
import { Image, Label, List } from "semantic-ui-react";

export interface LaunchListItemProps {
  item: LaunchItem;
  onClick: () => void;
}

export class LaunchListItem extends React.Component<LaunchListItemProps> {

  public render() {
    const { item } = this.props;
    return (
      <List.Item onClick={this.props.onClick}>
        <List.Content floated="right">
          <Label>{item.launchAt.toLocaleString()}</Label>
        </List.Content>
        <Image avatar={true} src="https://via.placeholder.com/100x100" />
        <List.Content>{item.name}</List.Content>
      </List.Item>
    );
  }
}
