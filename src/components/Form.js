import React, { Component } from 'react'

export class Form extends Component {

    // constructor
    constructor(props){
        super(props);
        this.initialState = {
            name: '',
            position: '',
            team: '',
        }
        this.state = this.initialState;
    }
// tracker
    tracker = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    // from tania
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.obey(this.state);
        this.setState(this.initialState);
    }

  render() {

    const { name, position, team} = this.state;

    const necessary = {
        "color": "black",
        "background": "green",
        "padding":"40px",
        "opacity":".8",
        "fontSize": "3rem"

    }
    
    return (
      <form onSubmit={this.onFormSubmit}>
          <label>Who are you?</label><input name="name" onChange={this.tracker} value={name} style={necessary}></input>
          <label>What do you do?</label><input name="position" onChange={this.tracker} value={position} style={necessary}></input>
          <label>What house do you fight for?</label><input name="team" onChange={this.tracker} value={team} style={necessary}></input>

        <button type="submit">Obey</button>
      </form>
    )
  }
}

export default Form
