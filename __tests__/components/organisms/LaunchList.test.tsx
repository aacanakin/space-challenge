import { LaunchList, LaunchListItem, LaunchListProps } from "@components";
import { Launch } from "@models/Launch";
import { mount, shallow } from "enzyme";
import * as React from "react";
import * as InfiniteScroll from "react-infinite-scroller";

describe("Component -> LaunchList", () => {

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

    const listProps: LaunchListProps = {
        hasMore: true,
        resource: {
            isBusy: false,
            data: [launch],
            error: undefined
        },
        onItemClick: jest.fn(),
        onScroll: jest.fn(),
        onDidMount: jest.fn(),
        onWillUnmount: jest.fn()
    };

    it("should render", () => {
        const wrapper = shallow(<LaunchList {...listProps} />);
        expect(wrapper).toHaveLength(1);
    });

    it("should render infinite scroll", () => {
        const wrapper = shallow(<LaunchList {...listProps} />);
        expect(wrapper.find(InfiniteScroll)).toHaveLength(1);
    });

    it("should render items", () => {
        const wrapper = shallow(<LaunchList {...listProps} />);
        expect(wrapper.find(LaunchListItem)).toHaveLength(1);
    });

    it("should trigger on did mount", () => {
        const wrapper = mount(<LaunchList {...listProps} />);
        expect(listProps.onDidMount).toHaveBeenCalled();
    });

    it("should trigger on will unmount", () => {
        const wrapper = mount(<LaunchList {...listProps} />);
        wrapper.unmount();
        expect(listProps.onWillUnmount).toHaveBeenCalled();
    });

    it("should trigger on click", () => {
        const wrapper = shallow(<LaunchList {...listProps} />);
        expect(wrapper.find(LaunchListItem)).toHaveLength(1);
        wrapper.find(LaunchListItem).simulate("click");
        expect(listProps.onItemClick).toHaveBeenCalled();
    });
});
