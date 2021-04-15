import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/Signup";
import Menu from "../components/Menu"




function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= "/">
                    <Login/>
                </Route>
                <Route exact path="/signup">
                    <SignUp/>
                </Route>
                <Route exact path="/menu">
                    <Menu/>
                </Route>               
            </Switch>
        </BrowserRouter>
    )
}
export default Router;