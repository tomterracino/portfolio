import React, { Component } from "react";
import "./index.css";

 
class Projects extends Component {
  render() {
    return (
      <div className=" float-lg-left float-md-left float-sm-left copybody">
         <h3 className="title"><u>Projects</u> </h3>
      <h3 className="section">URL Defense Proofpoint</h3>
      <p>Along with a friend we built a Chrome Extenstion that uses Regex and Javascript to locate URLs that have been given the Defense Proofpoint code and it strips it out and spits out the original uncoded URL.</p>
      <p><a href="https://chrome.google.com/webstore/detail/url-defense-point-remover/icchicahlfonnpnadgfmplnapcjoghfp">URL Defense Proofpoint Link</a></p>
      <h3 className="section mt-2">Videos</h3>
      <div class=" px-4 embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/34877111"></iframe>
</div>
<p><a href="https://vimeo.com/34877111">Tom Terracino Short Cinematography Reel</a></p>
<div className="px-4 embed-responsive embed-responsive-16by9">
  <iframe class="  embed-responsive-item" src="https://player.vimeo.com/video/10930205"></iframe>
</div>
<p><a href="https://vimeo.com/10930205">Chasing the Dollar</a></p>
    
      </div>
    );
  }
}
 
export default Projects;