
import * as React from "react";
import { Image } from "semantic-ui-react";
// import { Image, Loader } from "semantic-ui-react";

export interface LaunchImageProps {
  url: string;
  imageSizes: number[];
}

export interface LaunchImageState {
  isBusy: boolean;
  isError: boolean;
}

export class LaunchImage extends React.Component<LaunchImageProps, LaunchImageState> {
  constructor(props: LaunchImageProps) {
    super(props);

    this.state = {
      isBusy: true,
      isError: false
    }

    this.onImageLoad = this.onImageLoad.bind(this);
    this.onImageError = this.onImageError.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  public onImageLoad() {
    this.setState({
      isBusy: false,
      isError: false
    });
  }

  public onImageError() {
    this.setState({
      isBusy: false,
      isError: true
    });
  }

  public renderError() {
    const { isError } = this.state;
    if (isError) {
      // TODO: Revisit this 
      return <Image size="small" rounded={true} src="/placeholder.png" />;
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
        {this.renderError()}
        <Image
          spaced="right"
          size="small"
          rounded={true}
          src={imageUrl}
          hidden={isBusy}
          onError={this.onImageError}
          onLoad={this.onImageLoad} />
      </>
    );
  }
}
