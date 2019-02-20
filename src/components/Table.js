import React, { Component } from 'react'

export class Table extends Component {
// lol arrow function prevents auto fire for onclick
  
  render() {
      // also pass a delete button with thing.id as a parameter
    const destroyer = id =>{
      // filter list and replace list with only guys without id match
      this.props.kill(id);
    }


      const livePlayers = this.props.players;
      console.log(livePlayers);
      const rows = livePlayers.map((thing, spot) => {
          return (
              <tr key = {spot} >
                  <td>{thing.name}</td>
                  <td>{thing.position}</td>
                  <td>{thing.team}</td>
                  <td onClick={()=>destroyer(spot)}>Delete?</td>
              </tr>
          )
      });
    return <table><tbody>{rows}</tbody></table>
  }
}

export default Table
