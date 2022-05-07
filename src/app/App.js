import React from "react";
import Users from "./components/users";
import NavBar from "./components/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/layouts/login";
import NotFound from "./components/not-found";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
