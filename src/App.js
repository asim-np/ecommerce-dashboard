import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import './App.css'
import ServicesPage from './pages/services/ServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/services' element={<ServicesPage />} />
      </Routes>
    </Router>
  )
}

export default App;
