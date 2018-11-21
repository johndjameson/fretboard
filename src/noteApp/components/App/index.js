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

import * as scales from 'noteApp/helpers/scales'
import Pitch from 'noteApp/components/Pitch'
import String from 'noteApp/containers/String'
import { setKeyNote, setReferencePitch, setScale } from 'noteApp/actions'

// ----- Assets ----- //

import './styles.scss'

// -------------------------------------
//   Component
// -------------------------------------

class App extends Component {
  state = {
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

  getScaleNotes = () => {
    const {
      keyNote,
      pitches,
      scale: { intervals }
    } = this.props

    const lowestTonic = pitches.find(pitch => pitch.note === keyNote)
    const lowestTonicIndex = pitches.indexOf(lowestTonic)

    const scaleNotes = intervals.map(
      interval => pitches[interval + lowestTonicIndex].note
    )

    return scaleNotes
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
    const { selectedPitches } = this.state
    const {
      keyNote,
      notes,
      pitches,
      referencePitch,
      scale,
      setScale
    } = this.props

    const scaleArray = [
      scales.major,
      scales.majorPentatonic,
      scales.minor,
      scales.minorPentatonic
    ]

    const scaleNotes = this.getScaleNotes()

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

        {scaleArray.map(scaleItem => (
          <button
            key={scaleItem.name}
            onClick={() => setScale(scaleItem)}
            disabled={scaleItem.name === scale.name}>
            {scaleItem.displayName}
          </button>
        ))}

        <button
          disabled={selectedPitches.length === 0}
          onClick={this.handleClearClick}>
          Clear
        </button>

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
              scaleNotes={scaleNotes}
              selectedPitches={selectedPitches}
              tuning="E2"
            />
            <String
              onPitchClick={this.handleGuitarPitchClick}
              scaleNotes={scaleNotes}
              selectedPitches={selectedPitches}
              tuning="A2"
            />
            <String
              onPitchClick={this.handleGuitarPitchClick}
              scaleNotes={scaleNotes}
              selectedPitches={selectedPitches}
              tuning="D3"
            />
            <String
              onPitchClick={this.handleGuitarPitchClick}
              scaleNotes={scaleNotes}
              selectedPitches={selectedPitches}
              tuning="G3"
            />
            <String
              onPitchClick={this.handleGuitarPitchClick}
              scaleNotes={scaleNotes}
              selectedPitches={selectedPitches}
              tuning="B3"
            />
            <String
              onPitchClick={this.handleGuitarPitchClick}
              scaleNotes={scaleNotes}
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
  const { keyNote, notes, pitches, referencePitch, scale } = state.notes

  return {
    keyNote,
    notes,
    pitches,
    referencePitch,
    scale
  }
}

const mapDispatchToProps = {
  setKeyNote,
  setReferencePitch,
  setScale
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
