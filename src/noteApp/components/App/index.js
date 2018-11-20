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

import React, { Component } from 'react'
import { connect } from 'react-redux'

// ----- Local ----- //

import Pitch from 'noteApp/components/Pitch'
import GuitarString from 'noteApp/containers/GuitarString'
import { setKeyNote, setReferencePitch } from 'noteApp/actions'

// ----- Assets ----- //

import './styles.css'

const scales = {
  major: {
    displayName: 'Major',
    intervals: [0, 2, 4, 5, 7, 9, 11],
    mode: 'Ionian',
    name: 'major'
  },

  minor: {
    displayName: 'Minor',
    intervals: [0, 2, 3, 5, 7, 8, 10],
    mode: 'Aeolian',
    name: 'minor'
  }
}

// -------------------------------------
//   Component
// -------------------------------------

class App extends Component {
  state = {
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

  setSelectedPitches = ({ intervals, name }) => {
    const { pitches, keyNote } = this.props

    const lowestTonic = pitches.find(pitch => pitch.note === keyNote)
    const lowestTonicIndex = pitches.indexOf(lowestTonic)

    const scaleNotes = intervals.map(
      interval => pitches[interval + lowestTonicIndex].note
    )

    const scalePitches = pitches.filter(pitch =>
      scaleNotes.includes(pitch.note)
    )

    this.setState({
      scale: name,
      selectedPitches: scalePitches
    })
  }

  handleKeyChange = e => {
    const { notes, setKeyNote } = this.props
    const keyNote = notes[e.target.value]

    setKeyNote({ keyNote })
  }

  handlePitchClick = pitch => {
    this.togglePitchSelection(pitch)
  }

  handleReferencePitchChange = e => {
    const { setReferencePitch } = this.props

    setReferencePitch({ frequency: e.target.value })
  }

  isPitchSelected = pitch => {
    const { selectedPitches } = this.state

    return Boolean(selectedPitches.find(item => item.name === pitch.name))
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
    const { keyNote, notes, pitches, referencePitch } = this.props
    const { selectedPitches } = this.state

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

        <p>Key: {keyNote}</p>
        <input
          max="11"
          min="0"
          onChange={this.handleKeyChange}
          step="1"
          type="range"
          value={notes.indexOf(keyNote)}
        />

        <button onClick={() => this.setSelectedPitches(scales.major)}>
          Major
        </button>
        <button onClick={() => this.setSelectedPitches(scales.minor)}>
          Minor
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
                position={pitch.position}
                selected={this.isPitchSelected(pitch)}
              />
            ))}
          </div>
          <div className="guitar">
            <GuitarString
              onPitchClick={this.handleGuitarPitchClick}
              selectedPitches={selectedPitches}
              tuning="E2"
            />
            <GuitarString
              onPitchClick={this.handleGuitarPitchClick}
              selectedPitches={selectedPitches}
              tuning="A2"
            />
            <GuitarString
              onPitchClick={this.handleGuitarPitchClick}
              selectedPitches={selectedPitches}
              tuning="D3"
            />
            <GuitarString
              onPitchClick={this.handleGuitarPitchClick}
              selectedPitches={selectedPitches}
              tuning="G3"
            />
            <GuitarString
              onPitchClick={this.handleGuitarPitchClick}
              selectedPitches={selectedPitches}
              tuning="B3"
            />
            <GuitarString
              onPitchClick={this.handleGuitarPitchClick}
              selectedPitches={selectedPitches}
              tuning="E4"
            />
          </div>
        </div>
      </main>
    )
  }
}

// -------------------------------------
//   Export
// -------------------------------------

const mapStateToProps = state => {
  const { keyNote, notes, pitches, referencePitch } = state.notes

  return {
    keyNote,
    notes,
    pitches,
    referencePitch
  }
}

const mapDispatchToProps = {
  setKeyNote,
  setReferencePitch
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
