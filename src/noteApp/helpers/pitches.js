// *************************************
//
//   Helpers - Pitches
//   -> Pitch populator
//
// *************************************

// -------------------------------------
//   Main
// -------------------------------------

const standardNotes = [
  'A',
  'B♭',
  'B',
  'C',
  'D♭',
  'D',
  'E♭',
  'E',
  'F',
  'G♭',
  'G',
  'A♭'
]

const standardTuning = 440

const getFrequency = ({
  notes = standardNotes,
  places,
  position,
  referencePitch = standardTuning
}) =>
  (Math.pow(2, (position - 49) / notes.length) * referencePitch).toFixed(places)

const getPitches = ({
  notes = standardNotes,
  pitchCount,
  startingPitch = 4
}) => {
  const pitches = []

  for (let i = 0; i < pitchCount; i++) {
    const note = notes[i % notes.length]

    const octave = Math.trunc(
      (i - (startingPitch - 1) + notes.length) / notes.length
    )

    const position = i + 1

    pitches.push({
      frequency: getFrequency({ notes, places: 2, position }),
      name: `${note}${octave}`,
      note,
      position
    })
  }

  return pitches
}

// -------------------------------------
//   Exports
// -------------------------------------

export { getPitches, standardNotes, standardTuning }
