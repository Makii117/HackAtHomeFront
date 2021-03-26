import React from "react";

import "antd/dist/antd.css";
import "./App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Routes from "./routes/Routes";
import { Bot, Portal, MediaCenter, Guide } from "./pages";
import { PermissionType } from "./shared/types";
import CustomRoute from "./routes/CustomRoutes";

function App() {
  return (
    <Router>
      <Switch>
        <CustomRoute
          permission={[PermissionType.All]}
          exact
          path="/portal"
          component={Portal}
          title="Portal"
        />
        <CustomRoute
          permission={[PermissionType.All]}
          exact
          path="/MediaCenter"
          component={MediaCenter}
          title="MediaCenter"
        />
        <CustomRoute permission={[PermissionType.All]} exact title="Guide" path="/guide" component={Guide} />
        <CustomRoute permission={[PermissionType.All]} exact title="Bot" path="/bot" component={Bot} />
        {/* <CustomRoute permission={[PermissionType.All]} exact path="/login" component={LogIn} title="Log In" /> */} 
        {/* <CustomRoute
          permission={[PermissionType.All]}
          exact
          path="/singup"
          component={SingUp}
          title="Sing Up"
        /> */}
       <CustomRoute permission={[PermissionType.All]} exact path="/" component={Portal} title="Portal" />
        <Route exact path="" component={Routes} />
      </Switch>
    </Router>
  );
}

export default App;
