
import * as React from "react";
import { Image } from "semantic-ui-react";
// import { Image, Loader } from "semantic-ui-react";

export interface LaunchImageProps {
  url: string;
  imageSizes: number[];
}

export interface LaunchImageState {
  isBusy: boolean;
}

export class LaunchImage extends React.Component<LaunchImageProps, LaunchImageState> {
  constructor(props: LaunchImageProps) {
    super(props);

    this.state = {
      isBusy: true
    }

    this.onImageLoad = this.onImageLoad.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
  }

  public onImageLoad() {
    this.setState({
      isBusy: false
    });
  }

  public renderLoading() {
    const { isBusy } = this.state;
    if (isBusy) {
      // TODO: Revisit this 
      return <Image size="small" rounded={true} src="/placeholder.png" hidden={!isBusy} />;
      // return <Loader active={true} inline={true} />;
    }
    return undefined;
  }

  public render() {

    const { isBusy } = this.state;
    const { url, imageSizes } = this.props;

    const smallestImageSize = imageSizes[0];
    const largestImageSize = imageSizes[imageSizes.length - 1];
    const imageUrl = url.replace(`${largestImageSize}`, `${smallestImageSize}`);

    return (
      <>
        {this.renderLoading()}
        <Image spaced="right" size="small" rounded={true} src={imageUrl} hidden={isBusy} onLoad={this.onImageLoad} />
      </>
    );
  }
}
