import { LaunchListPage } from "@components";
import { LaunchDetailsPageContainer } from "@containers/LaunchDetailsPageContainer";
import { LaunchMissionDetailsPageContainer } from "@containers/LaunchMissionDetailsPageContainer";
import { history, initStore } from "@store";
import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";

const store = initStore();

export class App extends React.Component {

  public render() {
    return (
      <Provider store={store}>
        <>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact={true} path="/" component={LaunchListPage} />
              <Route exact={true} path="/launch/:id" component={LaunchDetailsPageContainer} />
              <Route exact={true} path="/launch/:id/missionDetails" component={LaunchMissionDetailsPageContainer} />
            </Switch>
          </ConnectedRouter>
        </>
      </Provider>
    );
  }
}
