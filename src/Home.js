import React, { Component } from "react";
import "./index.css";

 
class Home extends Component {
  render() {
    return (
      <div className="homebody homepageimage ">
            <h3 className="title"><u>Tom Terracino's Portfolio</u></h3>
            <img className="homeimage d-flex justify-content-center mt-2" src="images/photo4.jpg"></img>
            <img className="homeimage d-flex justify-content-center mt-2" src="images/photo2.jpg"></img>
            <img className="homeimage d-flex justify-content-center mt-2" src="images/photo3.jpg"></img>
            <img className="homeimage d-flex justify-content-center mt-2" src="images/photo1.jpg"></img>
            <img className="homeimage d-flex justify-content-center mt-2" src="images/photo5.jpg"></img>
      </div>
    );
  }
}
 
export default Home;