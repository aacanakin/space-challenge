
import { LaunchImage } from "@components";
import { Launch, LaunchDetails } from '@models/Launch';
import * as React from "react";
import { Header, Label, List } from "semantic-ui-react";

export interface LaunchListItemProps {
  item: Launch | LaunchDetails;
  onClick?: () => void;
  children?: JSX.Element;
}

export class LaunchListItem extends React.Component<LaunchListItemProps> {

  public render() {
    const { item } = this.props;
    return (
      <List.Item onClick={this.props.onClick}>
        <List.Content floated="right">
          <Label>{item.launchAt}</Label>
        </List.Content>
        <LaunchImage url={item.image.url} imageSizes={item.image.sizes} />
        <List.Content>
          <Header>{item.name}</Header>
          {this.props.children}
        </List.Content>
      </List.Item>
    );
  }
}
