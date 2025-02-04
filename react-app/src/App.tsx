import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import './App.css'; // 

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<Home />} />

          {/* Ruta para la encuesta */}
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;