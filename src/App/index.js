import React, { Component } from 'react'
import Pitches from 'App/Pitches'
import Pitch from 'App/Pitch'
import './styles.css'

class App extends Component {
  state = {
    referencePitch: 440,
    selectedPitch: null
  }

  handleReferencePitchChange = e => {
    this.setReferencePitch(e.target.value)
  }

  setReferencePitch = frequency => {
    this.setState({ referencePitch: Number(frequency) })
  }

  render() {
    const { referencePitch } = this.state

    return (
      <main>
        <p>Reference Pitch: {referencePitch}</p>

        <input
          max="448"
          min="424"
          onChange={this.handleReferencePitchChange}
          step="1"
          type="range"
          value={referencePitch}
        />

        <hr />

        <Pitches
          referencePitch={referencePitch}
          render={({ pitches }) =>
            pitches.map(({ frequency, name, position }) => (
              <Pitch frequency={frequency} key={position} name={name} />
            ))
          }
        />
      </main>
    )
  }
}

export default App
