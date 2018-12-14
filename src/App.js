import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
          <Logo />
          <Hello />
          <Bomjur name="Верстальщик" />
          <Reverse text="Академия Верстки" />
        </div>
    );
  }
}


function Hello () {
  return( 
      <div>
        <h1>Hello World</h1>
      </div>
    )
}

function Bomjur (props) {
  return(
      <h3>Привет, {props.name}</h3>
    )
}

function Logo () {
  return (
      <img src={logo} className="App-logo" alt="logo" />
    )
}

function Reverse (props) {
  let res = (props.text).split("").reverse().join("");
  return(
      <h1>{res}</h1>
    )
}

export default App;
