
import { LaunchListItem } from "@components";
import { LaunchItem } from "@models/LaunchItem";
import { Resource } from "@models/Resource";
import * as React from "react";
import { List, Loader } from "semantic-ui-react";

export interface LaunchListProps {
  resource: Resource<LaunchItem[]>;
  onItemClick: (item: LaunchItem) => void;
}

export class LaunchList extends React.Component<LaunchListProps> {

  constructor(props: LaunchListProps) {
    super(props);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  public renderLoading() {
    const { isBusy } = this.props.resource;
    if (isBusy) {
      return (
        <Loader />
      );
    }

    return undefined;
  }

  public renderItems() {
    const data = this.props.resource.data || [];
    return data.map((launchItem) => {
      return (
        <LaunchListItem
          key={launchItem.id}
          item={launchItem}
          // tslint:disable-next-line:jsx-no-lambda
          onClick={() => this.props.onItemClick(launchItem)}
        />
      )
    });
  }

  public render() {
    return (
      <>
        <List
          selection={true}
          divided={true}
          verticalAlign="middle">
          {this.renderItems()}
        </List>
        {this.renderLoading()}
      </>
    );
  }
}
