// App.tsx
import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from './components/home/HomePage';
import RouteDisplay from './components/route/RouteDisplay';
import Map from './components/route/Map';
import LiftList from './components/lift/LiftList';
import AmenitiesPage from './components/amenities/AmenitiesPage';
import Sos from './components/sos/Sos';

const App: React.FC = () => {
  return (
    <Routes>
    <Route>
          <Route index element={<HomePage />} />
          {/* <Route path="/RouteDisplay" element={<RouteDisplay />} /> */}
          <Route path="/RouteDisplay/:id" element={<RouteDisplay />} />
          <Route path="/map" element={<Map />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/lift" element={<LiftList />} />
          <Route path="/sos" element={<Sos />} />
          sos
        </Route>
      </Routes>

   
  );
};

export default App;
