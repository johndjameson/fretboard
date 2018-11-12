import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class String extends Component {
  static defaultProps = {
    frets: 22,
    onPitchClick: () => null,
    pitches: [],
    selectedPitches: [],
    tuning: null
  }

  static propTypes = {
    frets: PropTypes.number.isRequired,
    onPitchClick: PropTypes.func.isRequired,
    pitches: PropTypes.array.isRequired,
    selectedPitches: PropTypes.array.isRequired,
    tuning: PropTypes.string.isRequired
  }

  constructor(props) {
    const { pitches, tuning } = props

    super(props)

    this.pitch = pitches.find(pitch => pitch.name === tuning)
    this.pitchIndex = pitches.indexOf(this.pitch)
  }

  isPitchSelected = pitch => {
    const { selectedPitches } = this.props

    return Boolean(selectedPitches.find(item => item.name === pitch.name))
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
            className={classNames({ selected: this.isPitchSelected(pitch) })}
            onClick={() => onPitchClick(pitch)}
            key={pitch.name}>
            {index} {pitch.name}
          </div>
        ))}
      </div>
    )
  }
}

export default String
