// *************************************
//
//   Helpers - Scales
//   -> Diatonic catalog
//
// *************************************

// -------------------------------------
//   Main
// -------------------------------------

export const major = {
  displayName: 'Major',
  intervals: [0, 2, 4, 5, 7, 9, 11],
  mode: 'ionian',
  name: 'major'
}

export const majorPentatonic = {
  displayName: 'Major Pentatonic',
  intervals: [0, 2, 4, 7, 11],
  name: 'major-pentatonic'
}

export const minor = {
  displayName: 'Minor',
  intervals: [0, 2, 3, 5, 7, 8, 10],
  mode: 'aeolian',
  name: 'minor'
}

export const minorPentatonic = {
  displayName: 'Minor Pentatonic',
  intervals: [0, 3, 5, 7, 10],
  name: 'minor-pentatonic'
}

export const sixToneSymmetrical = {
  displayName: 'Six Tone Symmetrical',
  intervals: [0, 1, 4, 5, 8, 9],
  name: 'six-tone-symmetrical'
}

export const wholeTone = {
  displayName: 'Whole Tone',
  intervals: [0, 2, 4, 6, 8, 10],
  name: 'whole-tone'
}
