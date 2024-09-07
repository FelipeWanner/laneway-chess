import React, { useState } from 'react';
import { loginUser } from './services/authService'; // Import the loginUser function
import api from './api'; // Import your axios instance

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  // Handle form submission for logging in
  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const credentials = { email, password };
      const data = await loginUser(credentials); // Call loginUser to log in the user

      console.log('Login successful:', data);
      
      // Now fetch the user's profile using the access token
      const profileResponse = await api.get('/profile/me');
      setProfile(profileResponse.data); // Set the profile state with the user data
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="App">
      <h1>Login to Access Your Profile</h1>

      {/* Render a simple login form */}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>

      {/* Show any login errors */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Show the profile if it's available */}
      {profile && (
        <div>
          <h2>Welcome, {profile.username}</h2>
          <p>Email: {profile.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
