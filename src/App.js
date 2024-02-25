import './App.css';
import React, { useState } from 'react';
import Profile from './screens/Profile'
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';

function changeBackground(color) {
  document.body.style.background = color;
}

window.addEventListener("load", function() {changeBackground('#111e52')});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {
        loggedIn ?
          <MapScreen />
          :
          <LoginScreen onClick={() => {
            setLoggedIn(true)
          }}/>
      }
      <Profile />
    </div>
  );
}

export default App;