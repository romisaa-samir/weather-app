import './App.css';
import React, { Suspense } from 'react';
import "@fortawesome/fontawesome-free/css/all.css"
import Lap from './veiw/Lap';
import Mobile from './veiw/Mobile';
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div id="lap">
          <Lap />
        </div>
        <div id="mobile">
          <Mobile />
        </div>
      </Suspense >
    </>
  );
}

export default App;
