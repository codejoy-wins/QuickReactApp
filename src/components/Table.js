import React, { Component } from 'react'

export class Table extends Component {
// lol arrow function prevents auto fire for onclick
  
  render() {
      // also pass a delete button with thing.id as a parameter
    const destroyer = id =>{
      // filter list and replace list with only guys without id match
      this.props.kill(id);
    }
    const Sty = {
      "color":"#4f4",
      "fontSize": "50px"
    }

    const Del = {
      "color": "#000",
      "padding":".4rem",
      "backgroundColor":"#f00",
      "fontSize": "3rem",
      "textAlign": "center",
      "opacity": ".3"
    }

      const livePlayers = this.props.players;
      console.log(livePlayers);
      const rows = livePlayers.map((thing, spot) => {
          return (
              <tr key = {spot} >
                  <td style={Sty}>{thing.name}</td>
                  <td style={Sty}>{thing.position}</td>
                  <td style={Sty}>{thing.team}</td>
                  <td style={Del} onClick={()=>destroyer(spot)}>Delete?</td>
              </tr>
          )
      });
    return <table><tbody>{rows}</tbody></table>
  }
}

export default Table
