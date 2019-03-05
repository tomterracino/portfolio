import React, { Component } from "react";
import "./index.css";

class Resume extends Component {
  render() {
    return (
      <div className=" float-lg-left float-md-left float-sm-left copybody">
      <h3 className="title"><u>Resume</u> </h3>
          <h3 className="section">Education</h3>
           <p>Burlington College, Burlington VT</p>
          <p>Bachelor Degree in Cinema Studies and Film Production</p>
        <h3 className="section" >Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Dealer.com Products</li>
          <li>Inbound Marketing</li>
          <li>DDC Presence Award</li>
        </ul>
        <h3 className="section">Experience</h3>
        <ul>
          <li className="jobheader"><b>Dealer.com</b> <i>Technical Lead</i> 2016-Present</li>
          <li>Promoted to Technical Lead of the Major Accounts Group of Dealer.com Support a year in previous position because of ability, drive, and work ethic.</li>
          <li>Work high priorty cases and escalation in the queue.</li>
          <li>Set example for quality of work, amount of work, and mindset during my day.</li>
          <li>Provide assitance and on going training to new hires and other anaylsts.</li>
          <li>Build on-going trainings, classes, and documentations.</li>
          <li>Awarded the Presence award and Retail Case Closure award for 2017.</li>
          <li>DDC Presence Award</li>
        </ul>

        <ul>
          <li className="jobheader"><b>TSL Marketing</b> <i>Inbound Marketing Strategist</i> 2015-16</li>
          <li>Built Websites, landing pages, and emails using HTML, CSS, and Wordpress</li>
          <li>Maintain social media positings and content for multiple clients.</li>
          <li>Communicate directly with clients regrading their steps in the Inbound Marketing Funnel.</li>
          <li>Spear-headed and managed the video marketing department using fully animated videos and whiteboard videos. </li>
        </ul>

       
      </div>
    );
  }
}
 
export default Resume;