import React, { Component } from 'react';
import logo from './logo.svg';
import './App.cssdddddddd';
import {
  NavLink
} from "react-router-dom";
import Side from './components/commond/Side';
import Nav from './components/commond/Nav';
class App extends Component {
  constructor(){
    super();
    this.state={
      isShow:false
    }
  }
  render() {
    return (

      <div className="App123">
      {isTrusted  bubbles}
         <Nav event={()=>{
          this.setState({
            isShow:!this.state.isShow
          })
         }}/>
         <Side show={this.state.isShow} event={()=>{
            this.setState({
            isShow:false
          })
         }}/>
       
      </div>
    )
  }
}

export default App;
