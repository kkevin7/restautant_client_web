import React from 'react';
import {Routes, Route} from 'react-router';
//components
import Ordenes from './components/pages/Ordenes';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Ordenes />} />
        </Routes>
      </div>
  );
}

export default App;
