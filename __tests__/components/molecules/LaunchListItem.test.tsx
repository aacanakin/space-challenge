
import { LaunchImage, LaunchListItem } from "@components";
import { Launch } from "@models/Launch";
import { shallow } from "enzyme";
import * as React from "react";
import { Header, ListContent, ListItem } from "semantic-ui-react";

describe("Component -> LaunchListItem", () => {
    const launch: Launch = {
        id: `${1}`,
        name: "Sample Name",
        launchAt: "Sample Date Time",
        image: {
            url: "/plaecholder_3.png",
            sizes: [
                1,
                2,
                3
            ]
        },
        missions: []
    }

    it("should render", () => {
        const wrapper = shallow(<LaunchListItem item={launch} />);
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(ListItem)).toHaveLength(1);
        expect(wrapper.find(ListContent)).toHaveLength(2);
        expect(wrapper.find(LaunchImage)).toHaveLength(1);
        expect(wrapper.find(Header)).toHaveLength(1);
    });

    it("should render children", () => {
        const wrapper = shallow(
            <LaunchListItem item={launch}>
                <p>sample</p>
            </LaunchListItem>
        );
        expect(wrapper.find("p")).toHaveLength(1);
        expect(wrapper.find("p").html()).toEqual("<p>sample</p>");
    });
});
