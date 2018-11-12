import React, { Component } from 'react'
import notes from 'data/piano-notes'
import './styles.css'

class App extends Component {
  render () {
    return (
      <table>
        <tbody>
          {notes.map(note => (
            <tr key={note.position}>
              <td>{note.position}</td>
              <td>{note.note}</td>
              <td>{note.id}</td>
              <td>{note.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default App
