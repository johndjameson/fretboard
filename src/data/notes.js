const noteCount = 88
const notes = ['A', 'B♭', 'B', 'C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭']
const pianoNotes = []
const referencePitch = 440
const startingNote = 'C'

const startingNoteIndex = notes.indexOf(startingNote)

const getFrequency = ({ places, position, referencePitch }) =>
  (Math.pow(2, (position - 49) / 12) * referencePitch).toFixed(places)

for (let i = 0; i < noteCount; i++) {
  const note = notes[i % notes.length]

  const octave = Math.trunc(
    (i - startingNoteIndex + notes.length) / notes.length
  )

  const position = i + 1

  pianoNotes.push({
    frequency: getFrequency({ position, places: 2, referencePitch }),
    id: `${note}${octave}`,
    note,
    position: i + 1
  })
}

export default pianoNotes
