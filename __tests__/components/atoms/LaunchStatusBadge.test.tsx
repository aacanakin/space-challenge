
import { LaunchStatusBadge, LaunchStatusBadgeProps } from "@components";
import { shallow } from "enzyme";
import * as React from "react";
import { Label } from "semantic-ui-react";

describe("Component -> LaunchStatusBadge", () => {

    const props: LaunchStatusBadgeProps = {
        status: undefined
    }

    it("should render without crashing", () => {
        const wrapper = shallow(<LaunchStatusBadge {...props} />);
        expect(wrapper).toHaveLength(1);
    });

    it("should render N/A badge", () => {
        const wrapper = shallow(<LaunchStatusBadge {...props} />);
        expect(wrapper.find({color: "red"})).toHaveLength(1);
        expect(wrapper.find(Label).html()).toEqual("<div class=\"ui red label\">Status: N/A</div>");
    });

    it("should render description badge", () => {
        const fullProps: LaunchStatusBadgeProps = {
            ...props,
            status: {
                name: "sample name",
                description: "sample description"
            }
        }
        const wrapper = shallow(<LaunchStatusBadge {...fullProps} />);
        expect(wrapper.find(Label)).toHaveLength(1);
        expect(wrapper.find(Label).html()).toEqual("<div class=\"ui label\">Status: sample description</div>");
    });
});
