import { TUNINGS } from './constants';

import { GuitarTuning } from './Guitar';
import './App.css';

function App() {
  return (
    <>
      {Object.keys(TUNINGS).map((tuning) => (
        <GuitarTuning key={tuning} tuning={tuning as keyof typeof TUNINGS} />
      ))}
    </>
  );
}

export default App;
