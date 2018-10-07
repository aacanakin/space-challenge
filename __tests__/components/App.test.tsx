import { App } from "@app";
import { LaunchListPage } from "@components";
import { LaunchDetailsPageContainer } from "@containers/LaunchDetailsPageContainer";
import { LaunchMissionDetailsPageContainer } from "@containers/LaunchMissionDetailsPageContainer";
import { ConnectedRouter } from "connected-react-router";
import { shallow } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router";

describe("App", () => {

  const wrapper = shallow(<App />);

  it("renders without crashing", () => {
    expect(wrapper).toHaveLength(1);
    
  });

  it("should connect to store", () => {
    expect(wrapper.find(Provider)).toHaveLength(1);
    expect(wrapper.find(ConnectedRouter)).toHaveLength(1);
  });

  describe("Routes", () => {
    
    it("should register routes", () => {
      const routes = wrapper.find(Route);
      routes.map(route => {
        expect(route.prop("exact")).toBeTruthy();
      });
    });

    it("should register launch list route", () => {
      const route = wrapper.find({ path: "/", component: LaunchListPage });
      expect(route).toHaveLength(1);
    });

    it("should register launch details route", () => {
      const route = wrapper.find({ path: "/launch/:id", component: LaunchDetailsPageContainer });
      expect(route).toHaveLength(1);
    });

    it("should register launch mission details route", () => {
      const route = wrapper.find({
        path: "/launch/:id/missionDetails",
        component: LaunchMissionDetailsPageContainer
      });
      expect(route).toHaveLength(1);
    });

  });


});
