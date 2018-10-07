
import { LaunchListPage } from "@components";
import { LaunchListContainer } from "@containers/LaunchListContainer";
import { shallow } from "enzyme";
import * as React from "react";
import { Label, Segment } from "semantic-ui-react";

describe("Component -> LaunchListPage", () => {
    it("should render", () => {
        const wrapper = shallow(<LaunchListPage />);
        expect(wrapper).toHaveLength(1);
    });

    it("should render child items", () => {
        const wrapper = shallow(<LaunchListPage />);
        expect(wrapper.find(Segment)).toHaveLength(1);
        expect(wrapper.find(Label)).toHaveLength(1);
        expect(wrapper.find(Label).html()).toEqual("<div class=\"ui label\">Launch List</div>");
        expect(wrapper.find(LaunchListContainer)).toHaveLength(1);
    });
});
