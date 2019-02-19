import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

const Heading = ()=>{
  return (
    <h2>hello world</h2>
  )
}

class App extends Component {
  state = {
    players: [
      {
        name: "Baker",
        postion: "QB",
        team: "browns",
      }
    ],
  }

  // handle submit
handleSubmit = player => {
  console.log("from app.js")
  console.log(player.name);
  // I have the name I typed in the form here... just trouble changing the state with spread operators
  let myList = [...this.state.players, player];
  console.log(myList);
  // Prevent DEFAULT!!!
  this.setState({
    players: myList,
  })
}

  render() {
    return (
      <div className="App">
        < Heading  />
        < Form obey={this.handleSubmit}/>
        <h1>hey</h1>
        < Table players={this.state.players}/>
      </div>
    );
  }
}

export default App;
