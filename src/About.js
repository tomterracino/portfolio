import React, { Component } from "react";
import "./index.css";

class About extends Component {
  render() {
    return (
      <div className=" float-lg-left float-md-left float-sm-left copybody">
       <h3 className="title"><u>About Me</u> </h3>
       <h3 className="section">Life</h3>
      <p>I was born in Tom's River New Jersey and then moved to Ringwood New Jersey when I was 7. I spent my school years in Ringwood and once it was time for college I moved to Burlington Vermont.</p>
      <p>Here I attended Burlington College for 4 years going to film school and attainting my Bachelor's Degree. I spent my years after college working as the Store Manager at Magic Hat Brewing Company, Inbound Marketer at TSL Marketing, and a few others. Then I landed as a Support Analyst at Dealer.com.
      </p>
      <p>I spent the last 2 years here working up from an Analyst to a Senior and now as a Technical Lead for the MAG deparment.</p>
      <h3 className="section">Current Position</h3>
      <p><i>Technical Lead of the Major Accounts Group at Dealer.com</i></p>
        <ul>
          <li>Promoted to Technical Lead of the Major Accounts Group of Dealer.com Support a year in previous position because of ability, drive, and work ethic.</li>
          <li>Work high priorty cases and escalation in the queue.</li>
          <li>Set example for quality of work, amount of work, and mindset during my day.</li>
          <li>Provide assitance and on going training to new hires and other anaylsts.</li>
          <li>Build on-going trainings, classes, and documentation.s</li>
          <li>Awarded the Presence award and Retail Case Closure award for 2017.</li>
          <li>DDC Presence Award</li>
        </ul>
       
        <h3 className="section">Social Media</h3>
        <a href="https://www.facebook.com/tom.terracino" target="_blank">
  <img width="70" height="70" border="0"   src="images/facebooklogo.png"/>
        </a>
        <a href="https://www.instagram.com/bub_productions/?hl=en" target="_blank">
  <img width="55" height="55" border="0"   src="images/instalogo.png"/>
        </a>
        <a className="ml-2" href="https://www.linkedin.com/in/tom-terracino-275228101n" target="_blank">
  <img width="55" height="55" border="0"   src="images/linked.png"/>
        </a>
      </div>
    );
  }
}
 
export default About;