import React, { Component } from 'react'

export class Table extends Component {
  render() {
      const livePlayers = this.props.players;
      console.log(livePlayers);
      const rows = livePlayers.map((thing, spot) => {
          return (
              <tr key = {spot}>
                  <td>{thing.name}</td>
                  <td>{thing.position}</td>
                  <td>{thing.team}</td>
              </tr>
          )
      });
    return <table><tbody>{rows}</tbody></table>
  }
}

export default Table
