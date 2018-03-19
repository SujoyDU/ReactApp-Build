import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './js/Layout';
class App extends Component {
  
  constructor() {
    super()
    this.element= 'Atom';
  
  }
  
  getValFromVariable(){
    let  materials = [
      'Hydrogen',
      'Helium',
      'Lithium',
      'Beryllium'
    ];
    return materials;

    // return ['Hydorgen','oxygen', 'lithum']
    // return 'Hydrogen'
  }
  getVal(){
    return ['Hydorgen','oxygen', 'lithum']
  }
  render() {
    var val = this.getValFromVariable();
    var val2 = this.getVal();
    return (
      <div className="App">

     
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Layout />
        <h1 className="My-dialoge">Hello React</h1>
        <h2 className="My-dialoge-2">Learning React</h2>

        <p>These are {this.element} elements</p>
        <p>{val.map(material => material.length).join(', ')}</p>
        <p>{val.join(', ')}</p>
        <p>{val2.map(x => x.length).join(', ')}</p>
        <p>{val2.join(', ')}</p>


      </div>
    );
  }
}



export default App;
