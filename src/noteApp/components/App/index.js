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
import String from 'noteApp/components/String'
import { setKeyNote, setReferencePitch } from 'noteApp/actions'

// ----- Assets ----- //

import './styles.css'

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

  handleScaleClick = ({ intervals, scale }) => {
    const { pitches, keyNote } = this.props

    const lowestTonic = pitches.find(pitch => pitch.note === keyNote)
    const lowestTonicIndex = pitches.indexOf(lowestTonic)

    const scaleNotes = intervals.map(
      interval => pitches[interval + lowestTonicIndex].note
    )

    const scalePitches = pitches.filter(pitch =>
      scaleNotes.includes(pitch.note)
    )

    this.pitches = pitches

    this.setState({
      scale,
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

        <button
          onClick={() =>
            this.handleScaleClick({
              intervals: [0, 2, 4, 5, 7, 9, 11],
              scale: 'major'
            })
          }>
          Major
        </button>

        <button
          onClick={() =>
            this.handleScaleClick({
              intervals: [0, 2, 3, 5, 7, 8, 10],
              scale: 'minor'
            })
          }>
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
