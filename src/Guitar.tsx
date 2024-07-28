import classNames from 'classnames';
import { NOTES, TUNINGS } from './constants';
import type { Note, Tuning } from './types';

interface GuitarNoteProps {
  note: Note;
}

export function GuitarNote({ note }: GuitarNoteProps) {
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
  /** Note of the open string */
  note: Note;
  /** Number of frets on the guitar. Doesn’t include the open string */
  frets: number;
}

export function GuitarString({ frets = 24, note }: GuitarStringProps) {
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

interface GuitarTuningProps {
  tuning: Tuning;
}

export function GuitarTuning({ tuning }: GuitarTuningProps) {
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
