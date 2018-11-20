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
