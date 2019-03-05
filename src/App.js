import React from "react";
import {
    BrowserRouter
  } from "react-router-dom";
  import Nav from "./Nav";



  export default class App extends React.Component {
      render (){
        return (        
        <BrowserRouter>
            <Nav/>
        </BrowserRouter>
            )
      }
  }