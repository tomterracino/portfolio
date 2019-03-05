import React, { Component } from "react";
import "./index.css";

 
class Projects extends Component {
  render() {
    return (
      <div className=" float-lg-left float-md-left float-sm-left copybody">
         <h3 className="title"><u>Projects</u> </h3>
      <h3 className="section">URL Defense Proofpoint</h3>
      <p>Along with a friend we built a Chrome Extenstion that uses Regex and Javascript to locate URLs that have been given the Defense Proofpoint code and it strips it out and spits out the original uncoded URL.</p>
      <a href="https://chrome.google.com/webstore/detail/url-defense-point-remover/icchicahlfonnpnadgfmplnapcjoghfp">URL Defense Proofpoint Link</a>
      <h3 className="section mt-2">Videos</h3>
      </div>
    );
  }
}
 
export default Projects;