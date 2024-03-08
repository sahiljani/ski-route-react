// App.tsx
import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import HomePage from './components/home/HomePage';
import RouteDisplay from './components/route/RouteDisplay';
import Map from './components/route/Map';

const App: React.FC = () => {
  return (
    <Routes>
    <Route>
          <Route index element={<HomePage />} />
          <Route path="/RouteDisplay" element={<RouteDisplay />} />
          <Route path="/map" element={<Map />} />
       
        </Route>
      </Routes>

   
  );
};

export default App;
