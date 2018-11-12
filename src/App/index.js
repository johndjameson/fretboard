import React, { Component } from 'react'
import Pitches from 'App/Pitches'
import Pitch from 'App/Pitch'
import './styles.css'

class App extends Component {
  state = {
    referencePitch: 440,
    selectedPitches: []
  }

  handlePitchClick = pitch => {
    this.togglePitchSelection(pitch)
  }

  handleReferencePitchChange = e => {
    this.setReferencePitch(e.target.value)
  }

  isPitchSelected = pitch => {
    const { selectedPitches } = this.state

    return Boolean(selectedPitches.find(item => item.name === pitch.name))
  }

  setReferencePitch = frequency => {
    this.setState({ referencePitch: Number(frequency) })
  }

  togglePitchSelection = pitch => {
    const { selectedPitches } = this.state

    if (this.isPitchSelected(pitch)) {
      this.setState({
        selectedPitches: selectedPitches.filter(
          item => item.name !== pitch.name
        )
      })
    } else {
      this.setState({ selectedPitches: [...selectedPitches, pitch] })
    }
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
