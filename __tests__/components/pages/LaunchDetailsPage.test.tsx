
import {
    LaunchDetailsPage,
    LaunchDetailsPageProps
} from "@components";
import { shallow } from "enzyme";
import * as React from "react";

describe("Component -> LaunchDetailsPage", () => {

    const props: LaunchDetailsPageProps = {
        launchDetails: {
            isBusy: true,
        },
        launchStatus: {
            isBusy: true
        },
        onDidMount: jest.fn(),
        onClickMissionDetails: jest.fn()
    };

    it("should render", () => {
        const wrapper = shallow(<LaunchDetailsPage {...props} />);
        expect(wrapper).toHaveLength(1);
    });

    // TODO: Add more cases
});
