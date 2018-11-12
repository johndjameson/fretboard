import React, { Component } from 'react'
import Notes from 'App/Notes'
import './styles.css'

class App extends Component {
  state = {
    referencePitch: 440
  }

  handleReferencePitchChange = e => {
    this.setReferencePitch(e.target.value)
  }

  setReferencePitch = frequency => {
    this.setState({ referencePitch: Number(frequency) })
  }

  render() {
    return (
      <main>
        <p>Reference Pitch: {this.state.referencePitch}</p>

        <input
          max="448"
          min="424"
          onChange={this.handleReferencePitchChange}
          step="1"
          type="range"
          value={this.state.referencePitch}
        />

        <hr />

        <Notes
          referencePitch={this.state.referencePitch}
          render={({ notes }) =>
            notes.map(note => (
              <div key={note.id}>
                {note.id}, {note.frequency}
              </div>
            ))
          }
        />
      </main>
    )
  }
}

export default App
