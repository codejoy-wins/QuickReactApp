import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import both from './both.jpg';
import hunter from './hunter.png';


const Icy = {
  "background":"lightblue",
  "color":"white",
  "padding":"10px",
}

const Heading = ()=>{
  return (
    <div>
      <h1><span style={Icy}>Winter</span> is Coming</h1>
      <h2>Add your favorite players to the list</h2>
    </div>
  )
}
// Can I do an edit mode?  I've never done that before.
// first game of thrones background
const Ending = ()=>{
  return (
    <h5>Thanks for using <a href="https://maxjann.com">my</a> website</h5>
  )
}

const Image = (props)=>{
  return (
    <img src={props.picture} height ="720rem"></img>
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
kill = id => {
  console.log(`killing ${id}`);
  console.log(`current state players ${this.state.players}`);
  console.log(`current state players ${this.state.players.filter((player, i)=>id!==i)}`);
  const newList = this.state.players.filter((player, i)=>id!==i);
  this.setState({
    players: newList,
  })


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
        < Table players={this.state.players} kill={this.kill}/>
        < Image picture={both}/>
        < Image picture={hunter}/>

        < Ending />
      </div>
    );
  }
}

export default App;
