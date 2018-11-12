import React, { Component } from 'react'
import Pitches from 'App/Pitches'
import Pitch from 'App/Pitch'
import './styles.css'

class App extends Component {
  state = {
    referencePitch: 440,
    selectedPitch: null
  }

  handlePitchClick = pitch => {
    this.setSelectedPitch(pitch)
  }

  handleReferencePitchChange = e => {
    this.setReferencePitch(e.target.value)
  }

  isPitchSelected = pitch => {
    const { selectedPitch } = this.state

    return Boolean(selectedPitch && pitch.name === selectedPitch.name)
  }

  setReferencePitch = frequency => {
    this.setState({ referencePitch: Number(frequency) })
  }

  setSelectedPitch = pitch => {
    this.setState({ selectedPitch: pitch })
  }

  render() {
    const { referencePitch, selectedPitch } = this.state

    return (
      <main>
        <p>Reference Pitch: {referencePitch}</p>

        {selectedPitch && <p>Selected Pitch: {selectedPitch.name}</p>}

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
            pitches.map(pitch => (
              <Pitch
                frequency={pitch.frequency}
                key={pitch.position}
                name={pitch.name}
                onClick={() => this.handlePitchClick(pitch)}
                selected={this.isPitchSelected(pitch)}
              />
            ))
          }
        />
      </main>
    )
  }
}

export default App
