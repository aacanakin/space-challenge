
import { LaunchListItem } from "@components";
import { Launch } from "@models/Launch";
import { Resource } from "@models/Resource";
import * as React from "react";
import * as InfiniteScroll from "react-infinite-scroller";
import { List, Loader } from "semantic-ui-react";

export interface LaunchListProps {
  hasMore: boolean;
  resource: Resource<Launch[]>;
  onItemClick: (item: Launch) => void;
  onScroll: (offset: number, isBusy: boolean) => void;
  onDidMount: () => void;
  onWillUnmount: () => void;
}

export class LaunchList extends React.Component<LaunchListProps> {

  constructor(props: LaunchListProps) {
    super(props);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  public componentDidMount() {
    this.props.onDidMount();
  }

  public componentWillUnmount() {
    this.props.onWillUnmount();
  }

  public renderLoading() {
    return (
      <List.Item key="item-loader">
        <List.Content>
          <Loader active={true} inline="centered" />
        </List.Content>
      </List.Item>
    );
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

  public onScroll() {
    const data = this.props.resource.data || [];
    const { isBusy } = this.props.resource;
    this.props.onScroll(data.length, isBusy);
  }

  public render() {
    return (
      <InfiniteScroll
        key="infinite-scroll"
        pageStart={0}
        hasMore={this.props.hasMore}
        loadMore={this.onScroll}
        initialLoad={false}
        loader={this.renderLoading()}>
        <List
          selection={true}
          divided={true}
          verticalAlign="middle">
          {this.renderItems()}
        </List>
      </InfiniteScroll>
    );
  }
}
