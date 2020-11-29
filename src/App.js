import React from 'react';
import {Routes, Route} from 'react-router';
//components
import Ordenes from './components/pages/Ordenes';
import Menu from './components/pages/Menu';
import NuevoPlatillo from './components/pages/NuevoPlatillo';
import Sidebar from './components/ui/Sidebar';

function App() {
  return (
      <div>
        <Sidebar  />
        <Routes>
          <Route path="/" element={<Ordenes />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nuevo-platillo" element={<NuevoPlatillo />} />
        </Routes>
      </div>
  );
}

export default App;
