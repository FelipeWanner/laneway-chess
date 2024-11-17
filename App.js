import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LogedinPage from './Pages/LogedinPage';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import MatchPage from './Pages/MatchPage';
import StatusPage from './Pages/StatusPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}>
          </Route>
          <Route path="/login" element={<LoginPage />}>
          </Route>
          <Route path="/registration" element={<RegistrationPage />}>
          </Route>
          <Route path="/logedin" element={<LogedinPage />}>
          </Route>
          <Route path="/match" element={<MatchPage />}>
          </Route>
          <Route path="/status" element={<StatusPage />}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
