// *************************************
//
//   GuitarString
//   -> Fretted guitar string
//
// *************************************

// -------------------------------------
//   Imports
// -------------------------------------

// ----- Packages ----- //

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// -------------------------------------
//   Component
// -------------------------------------

class GuitarString extends Component {
  static defaultProps = {
    frets: 22,
    onPitchClick: () => null,
    pitches: null,
    scaleNotes: null,
    selectedPitches: null,
    tuning: null
  }

  static propTypes = {
    frets: PropTypes.number.isRequired,
    onPitchClick: PropTypes.func.isRequired,
    pitches: PropTypes.array.isRequired,
    scaleNotes: PropTypes.array.isRequired,
    selectedPitches: PropTypes.array.isRequired,
    tuning: PropTypes.string.isRequired
  }

  constructor(props) {
    const { pitches, tuning } = props

    super(props)

    this.pitch = pitches.find(pitch => pitch.name === tuning)
    this.pitchIndex = pitches.indexOf(this.pitch)
  }

  isPitchDiatonic = pitch => {
    const { scaleNotes } = this.props

    return scaleNotes.includes(pitch.note)
  }

  isPitchSelected = pitch => {
    const { selectedPitches } = this.props

    return Boolean(selectedPitches.find(item => item.name === pitch.name))
  }

  isPitchTonic = pitch => {
    const { keyNote } = this.props

    return pitch.note === keyNote
  }

  render() {
    const { frets, onPitchClick, pitches } = this.props

    const stringPitches = pitches.slice(
      this.pitchIndex,
      this.pitchIndex + frets
    )

    return (
      <div className="string">
        {stringPitches.map((pitch, index) => (
          <div
            className={classNames({
              diatonic: this.isPitchDiatonic(pitch),
              selected: this.isPitchSelected(pitch),
              tonic: this.isPitchTonic(pitch)
            })}
            onClick={() => onPitchClick(pitch)}
            key={pitch.name}>
            {index} {pitch.name}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { keyNote, pitches } = state.notes

  return {
    keyNote,
    pitches
  }
}

export default connect(mapStateToProps)(GuitarString)
