import { Component } from 'react'
import PropTypes from 'prop-types'

class Pitches extends Component {
  static propTypes = {
    notes: PropTypes.arrayOf(PropTypes.string),
    pitchCount: PropTypes.number.isRequired,
    referencePitch: PropTypes.number.isRequired,
    render: PropTypes.func.isRequired,
    startingPitch: PropTypes.number.isRequired
  }

  static defaultProps = {
    notes: ['A', 'B♭', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭'],
    pitchCount: 88,
    referencePitch: 440,
    render: () => null,
    startingPitch: 4
  }

  getFrequency = ({ places, position }) => {
    const { notes, referencePitch } = this.props

    return (
      Math.pow(2, (position - 49) / notes.length) * referencePitch
    ).toFixed(places)
  }

  getDecoratedPitches = () => {
    const { notes, pitchCount, startingPitch } = this.props
    const decoratedPitches = []

    for (let i = 0; i < pitchCount; i++) {
      const note = notes[i % notes.length]

      const octave = Math.trunc(
        (i - (startingPitch - 1) + notes.length) / notes.length
      )

      const position = i + 1

      decoratedPitches.push({
        frequency: this.getFrequency({ position, places: 2 }),
        name: `${note}${octave}`,
        note,
        position: i + 1
      })
    }

    return decoratedPitches
  }

  render() {
    const { render } = this.props

    return render({ pitches: this.getDecoratedPitches() })
  }
}

export default Pitches
