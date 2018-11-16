// *************************************
//
//   Note App
//   -> Scale creator
//
// *************************************

// -------------------------------------
//   Imports
// -------------------------------------

// ----- Packages ----- //

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

// ----- Local ----- //

import Pitch from 'noteApp/components/Pitch'
import Pitches from 'noteApp/components/Pitches'
import String from 'noteApp/components/String'
import { updateKeyNote } from 'noteApp/actions'

// ----- Assets ----- //

import './styles.css'

// -------------------------------------
//   Component
// -------------------------------------

class App extends Component {
  state = {
    referencePitch: 440,
    scale: null,
    selectedPitches: []
  }

  clearSelectedPitches = () => {
    this.setState({ selectedPitches: [] })
  }

  handleGuitarPitchClick = pitch => {
    this.togglePitchSelection(pitch)
  }

  handleClearClick = () => {
    this.clearSelectedPitches()
  }

  handleMajorClick = pitches => {
    const { keyNote } = this.state
    const intervals = [1, 3, 5, 6, 8, 10, 12]

    const lowestTonic = pitches.find(pitch => pitch.note === keyNote)
    const lowestTonicIndex = pitches.indexOf(lowestTonic)

    const scaleNotes = intervals.map(
      interval => pitches[interval + lowestTonicIndex - 1].note
    )

    const scalePitches = pitches.filter(pitch =>
      scaleNotes.includes(pitch.note)
    )

    this.pitches = pitches

    this.setState({
      scale: 'major',
      selectedPitches: scalePitches
    })
  }

  handleKeyChange = ({ e, notes }) => {
    const { updateKeyNote } = this.props
    const keyNote = notes[e.target.value]

    console.log(e.target.value)

    updateKeyNote(keyNote)
  }

  handleMinorClick = pitches => {
    this.setState({
      selectedPitches: pitches.filter(pitch => {
        switch (pitch.note) {
          case 'A♭':
          case 'B♭':
          case 'C':
          case 'D':
          case 'E♭':
          case 'F':
          case 'G':
            return true
          default:
            return false
        }
      })
    })
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
    const { keyNote } = this.props
    const { referencePitch, selectedPitches } = this.state

    console.log(keyNote)

    return (
      <main>
        <Pitches
          referencePitch={referencePitch}
          render={({ notes, pitches }) => (
            <Fragment>
              <p>Reference Pitch: {referencePitch}</p>
              <input
                max="448"
                min="424"
                onChange={this.handleReferencePitchChange}
                step="1"
                type="range"
                value={referencePitch}
              />

              <p>Key: {keyNote}</p>
              <input
                max="11"
                min="0"
                onChange={e => this.handleKeyChange({ e, notes })}
                step="1"
                type="range"
                value={notes.indexOf(keyNote)}
              />

              <button onClick={() => this.handleMajorClick(pitches)}>
                Major
              </button>

              <button onClick={this.handleClearClick}>Clear</button>

              <div className="columns">
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
              </div>
            </Fragment>
          )}
        />
      </main>
    )
  }
}

// -------------------------------------
//   Export
// -------------------------------------

const mapStateToProps = state => {
  const { keyNote } = state.notes

  return {
    keyNote
  }
}

const mapDispatchToProps = {
  updateKeyNote
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
