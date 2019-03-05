import React from "react";
import {Switch, Route} from "react-router-dom";
import Resume from "./Resume";
import Projects from "./Projects";
import About from "./About";
import Nav from "./Nav";
import Home from "./Home";


const Routes = (

<Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/Nav" component={Nav}/>
<Route path="/Resume" component={Resume}/>
<Route path="/Projects" component={Projects}/>
<Route path="/About" component={About}/>
</Switch>

)

export default Routes;
