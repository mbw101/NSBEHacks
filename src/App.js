import './App.css';
import React, { useState } from 'react';
import Profile from './screens/Profile'
import LoginScreen from './screens/LoginScreen';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {
        loggedIn ?
          <Profile />
          :
          <LoginScreen onClick={() => {
            setLoggedIn(true)
          }}/>
      }
      
    </div>
  );
}

export default App;
