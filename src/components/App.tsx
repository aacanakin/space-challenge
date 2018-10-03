import * as React from "react";

import { LaunchListPage } from "@components";
import { history, initStore } from "@store";
import { ConnectedRouter } from "connected-react-router";
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
            </Switch>
          </ConnectedRouter>
        </>
      </Provider>
    );
  }
}
