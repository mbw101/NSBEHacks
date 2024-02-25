import React from 'react';
import logo from '../../fullCoinQuestLogo.png'

function changeBackground(color) {
    document.body.style.background = color;
  }
  
  window.addEventListener("load", function() {changeBackground('#111e52')});

  export default function LevelOne(props) {
    return (
        <div className="levelOne">
        <img
            src={logo}
            style={{ width: 527, height: 136, margin: "35px", marginTop: "400px" }}
            ></img>
        </div>
    );
}