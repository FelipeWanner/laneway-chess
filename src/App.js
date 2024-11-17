import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import MatchPage from './Pages/MatchPage';
import StatusPage from './Pages/StatusPage';
// import Navbar from './Components/Navbar';
import ButtonCreateAccount from './Buttons/ButtonCreateAccount';
import ButtonHome from './Buttons/ButtonHome';
import ButtonLogin from './Buttons/ButtonLogin';
import ButtonPlay from './Buttons/ButtonPlay';
import ButtonStatus from './Buttons/ButtonStatus';
import Navbar from './Components/Navbar';
const App = () => {
  return (
    <div className="container min-h-screen bg-[#EADDBE] flex flex-col items-center">
      <Router>
        {/* <Navbar /> */}
          <Routes>
            <Route exact path="/" element={<HomePage />}>
            </Route>
            <Route path="/login" element={<LoginPage />}>
            </Route>
            <Route path="/registration" element={<RegistrationPage />}>
            </Route>
            <Route path="/match" element={<MatchPage />}>
            </Route>
            <Route path="/status" element={<StatusPage />}>
            </Route>
          </Routes>
      </Router>
    </div>
  );
};

export default App;
