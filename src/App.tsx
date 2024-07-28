import classNames from 'classnames';
import { useState } from 'react';

import './App.css';

type Note =
  | 'A'
  | 'A♯/B♭'
  | 'B'
  | 'C'
  | 'C♯/D♭'
  | 'D'
  | 'D♯/E♭'
  | 'E'
  | 'F'
  | 'F♯/G♭'
  | 'G'
  | 'G♯/A♭';

const NOTES: readonly Note[] = [
  'A',
  'A♯/B♭',
  'B',
  'C',
  'C♯/D♭',
  'D',
  'D♯/E♭',
  'E',
  'F',
  'F♯/G♭',
  'G',
  'G♯/A♭',
] as const;

interface NoteProps {
  note: Note;
}

function GuitarNote({ note }: NoteProps) {
  return (
    <span
      className={classNames('guitar-note', {
        'guitar-note--accidental': note.includes('/'),
      })}
    >
      {note.replace('/', '\n')}
    </span>
  );
}

interface GuitarStringProps {
  note: Note;
  frets: number;
}

function GuitarString({ frets = 24, note }: GuitarStringProps) {
  // Number of frets plus open string
  const fretNumbers = Array.from({ length: frets + 1 }, (_v, i) => i);

  const startingNoteIndex = NOTES.indexOf(note);

  return (
    <div
      className="guitar-string"
      style={{ '--guitar-frets': frets } as React.CSSProperties}
    >
      {fretNumbers.map((fret) => (
        <GuitarNote
          key={fret}
          note={NOTES[(startingNoteIndex + fret) % NOTES.length]}
        />
      ))}
    </div>
  );
}

const TUNINGS = {
  'E Standard': ['E', 'B', 'G', 'D', 'A', 'E'],
  'Drop D': ['E', 'B', 'G', 'D', 'A', 'D'],
  'D Standard': ['D', 'A', 'F', 'C', 'G', 'D'],
  'Drop C': ['D', 'A', 'F', 'C', 'G', 'C'],
  'C Standard': ['C', 'G', 'D♯/E♭', 'A♯/B♭', 'F', 'C'],
} as const;

interface TuningProps {
  tuning: keyof typeof TUNINGS;
}

function Tuning({ tuning }: TuningProps) {
  return (
    <>
      <h2 className="heading">{tuning}</h2>

      <div className="guitar">
        {TUNINGS[tuning].map((stringNote) => (
          <GuitarString frets={24} note={stringNote} />
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <>
      {Object.keys(TUNINGS).map((tuning) => (
        <Tuning key={tuning} tuning={tuning as keyof typeof TUNINGS} />
      ))}
    </>
  );
}

export default App;
