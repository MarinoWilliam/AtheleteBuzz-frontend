import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/homePage';
import Layout from './components/layout/layout';


import './App.css';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<HomePage />} />
          <Route path="/fantasy" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;