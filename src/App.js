import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

const Heading = ()=>{
  return (
    <h2>Add your favorite players to the list</h2>
  )
}

const Ending = ()=>{
  return (
    <h5>Thanks for using <a href="https://maxjann.com">my</a> website</h5>
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
// I will add a delete button later
  render() {
    return (
      <div className="App">
        < Heading  />
        < Form obey={this.handleSubmit}/>
        < Table players={this.state.players}/>
        < Ending />
      </div>
    );
  }
}

export default App;
