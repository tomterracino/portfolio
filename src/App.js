import React from "react";
import {
    HashRouter
  } from "react-router-dom";
  import Nav from "./Nav";



  export default class App extends React.Component {
      render (){
        return (        
        <HashRouter>
            <Nav/>
        </HashRouter>
            )
      }
  }