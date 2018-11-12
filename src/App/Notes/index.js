import { Component } from 'react'
import PropTypes from 'prop-types'

class Notes extends Component {
  static propTypes = {
    noteCount: PropTypes.number.isRequired,
    notes: PropTypes.arrayOf(PropTypes.string),
    referencePitch: PropTypes.number.isRequired,
    render: PropTypes.func.isRequired,
    startingNote: PropTypes.number.isRequired
  }

  static defaultProps = {
    noteCount: 88,
    notes: ['A', 'B♭', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭'],
    referencePitch: 440,
    render: () => null,
    startingNote: 3
  }

  getFrequency = ({ places, position }) => {
    const { notes, referencePitch } = this.props

    return (
      Math.pow(2, (position - 49) / notes.length) * referencePitch
    ).toFixed(places)
  }

  getDecoratedNotes = () => {
    const { noteCount, notes, startingNote } = this.props
    const decoratedNotes = []

    for (let i = 0; i < noteCount; i++) {
      const note = notes[i % notes.length]

      const octave = Math.trunc(
        (i - (startingNote - 1) + notes.length) / notes.length
      )

      const position = i + 1

      decoratedNotes.push({
        frequency: this.getFrequency({ position, places: 2 }),
        id: `${note}${octave}`,
        note,
        position: i + 1
      })
    }

    return decoratedNotes
  }

  render() {
    const { render } = this.props

    return render({ notes: this.getDecoratedNotes() })
  }
}

export default Notes
