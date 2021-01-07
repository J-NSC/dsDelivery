import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Index";
import NavBar from "./NavBar/Index";
import Orders from "./Orders/Index";

function Routes (){
    return( 
        <BrowserRouter> 
            <NavBar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path = "/">
                    <Home />
                </Route> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;