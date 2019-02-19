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
        "color": "gold",
        "background": "green",
        "padding":"40px",
        "opacity":".5",

    }
    
    return (
      <form onSubmit={this.onFormSubmit}>
          <label>name:</label><input name="name" onChange={this.tracker} value={name} style={necessary}></input>
          <label>position:</label><input name="position" onChange={this.tracker} value={position}></input>
          <label>team:</label><input name="team" onChange={this.tracker} value={team}></input>

        <button type="submit">Obey</button>
      </form>
    )
  }
}

export default Form
