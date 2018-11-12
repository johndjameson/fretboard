import React, { Component, Fragment } from 'react'
import Pitch from 'App/Pitch'
import Pitches from 'App/Pitches'
import String from 'App/String'
import './styles.css'

class App extends Component {
  state = {
    referencePitch: 440,
    selectedPitches: []
  }

  handleGuitarPitchClick = pitch => {
    this.togglePitchSelection(pitch)
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
    const { referencePitch, selectedPitches } = this.state

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

        <div className="columns">
          <Pitches
            referencePitch={referencePitch}
            render={({ pitches }) => (
              <Fragment>
                <div className="piano">
                  {pitches.map(pitch => (
                    <Pitch
                      frequency={pitch.frequency}
                      key={pitch.position}
                      name={pitch.name}
                      onClick={() => this.handlePitchClick(pitch)}
                      selected={this.isPitchSelected(pitch)}
                    />
                  ))}
                </div>
                <div className="guitar">
                  <String
                    onPitchClick={this.handleGuitarPitchClick}
                    pitches={pitches}
                    selectedPitches={selectedPitches}
                    tuning="E2"
                  />
                  <String
                    onPitchClick={this.handleGuitarPitchClick}
                    pitches={pitches}
                    selectedPitches={selectedPitches}
                    tuning="A2"
                  />
                  <String
                    onPitchClick={this.handleGuitarPitchClick}
                    pitches={pitches}
                    selectedPitches={selectedPitches}
                    tuning="D3"
                  />
                  <String
                    onPitchClick={this.handleGuitarPitchClick}
                    pitches={pitches}
                    selectedPitches={selectedPitches}
                    tuning="G3"
                  />
                  <String
                    onPitchClick={this.handleGuitarPitchClick}
                    pitches={pitches}
                    selectedPitches={selectedPitches}
                    tuning="B3"
                  />
                  <String
                    onPitchClick={this.handleGuitarPitchClick}
                    pitches={pitches}
                    selectedPitches={selectedPitches}
                    tuning="E4"
                  />
                </div>
              </Fragment>
            )}
          />
        </div>
      </main>
    )
  }
}

export default App
