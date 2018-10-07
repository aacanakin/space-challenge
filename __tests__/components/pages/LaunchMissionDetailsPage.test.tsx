import { LaunchMissionDetailsPage, LaunchMissionDetailsPageProps } from "@components";
import { mount, shallow } from "enzyme";
import * as React from "react";

describe("Component -> LaunchMissionDetailsPage", () => {

    const props: LaunchMissionDetailsPageProps = {
        launchDetails: {
            isBusy: true,
        },
        onDidMount: jest.fn()
    }

    it("should render", () => {
        const wrapper = shallow(<LaunchMissionDetailsPage {...props} />);
        expect(wrapper).toHaveLength(1);
    });

    it("should trigger ondidmount", () => {
        const wrapper = mount(<LaunchMissionDetailsPage {...props} />);
        expect(wrapper).toHaveLength(1);
        expect(props.onDidMount).toHaveBeenCalled();
    });

    // TODO: Add more cases
});
