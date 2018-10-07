import { LaunchImage } from "@components";
import { shallow } from "enzyme";
import * as React from "react";
import { Image } from "semantic-ui-react";

describe("Component -> LaunchImage", () => {
    const props = {
        url: "https://s3.amazonaws.com/launchlibrary/RocketImages/Falcon9Block5.jpg_1920.jpg",
        imageSizes: [
            320, 500, 1920
        ]
    }

    it("should render without crashing", () => {
        const wrapper = shallow(<LaunchImage {...props} />);
        expect(wrapper).toHaveLength(1);
    });

    it("should render smallest size of image", () => {
        const wrapper = shallow(<LaunchImage {...props} />);
        const image = wrapper.find(Image);
        expect(image).toHaveLength(1);

        const smallest = props.imageSizes[0];
        const largest = props.imageSizes[props.imageSizes.length - 1];
        const url = props.url.replace(`${largest}`, `${smallest}`);
        expect(image.prop("src")).toEqual(url);
    });
});
