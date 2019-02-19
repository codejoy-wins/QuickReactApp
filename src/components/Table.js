import React, { Component } from 'react'

export class Table extends Component {
  render() {
      const livePlayers = this.props.players;
      const rows = this.props.players.map((thing, spot) => {
          return (
              <tr key = {spot}>
                  <td>{thing.name}</td>
                  <td>{thing.position}</td>
                  <td>{thing.team}</td>
              </tr>
          )
      });
    return <tbody>{rows}</tbody>
  }
}

export default Table
