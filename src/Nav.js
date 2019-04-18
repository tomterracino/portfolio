import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
import "./index.css";
import Routes from "./Routes";


class Main extends Component {

    constructor(props) {
        super(props);
        this.state={ navClass: "sidenav", shapeClass: "container"  }
        this.navToggle = this.navToggle.bind(this);
      }
      navToggle() { 
        if (this.state.navClass === "sidenav"){
          this.setState ({ navClass: "open sidenav", shapeClass: "container change"  })
        } else {
          this.setState ({ navClass: "sidenav" , shapeClass: "container" })
        }
      }

      navHide=()=> { 
           this.setState ({ navClass: "sidenav" , shapeClass: "container" })
              }

  
      render(){
          return(
            <React.Fragment>
                <div>
                <span onClick={()=>this.navToggle()} style={{cursor:"pointer"}}>
                
                <div className={this.state.shapeClass}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                    </span>
                <div id="mySidenav" className={this.state.navClass}>
                         <ul className="header">
                            <li onClick={()=>this.navHide()}><Link to="/">Home</Link></li>
                            <li onClick={()=>this.navHide()}><Link to="/Resume">Resume</Link></li>
                            <li onClick={()=>this.navHide()}><Link to="/Projects">Projects</Link></li>
                            <li onClick={()=>this.navHide()}><Link to="/About">About</Link></li>
                        </ul> 
                    </div>
                    <div className="content">
                       {Routes}
                    </div>
                    
                </div>
                
            </React.Fragment>
                )  
             };
    
  };
 
export default Main;