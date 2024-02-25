import React, { useState } from 'react';
import './../App.css';
import logo from '../fullCoinQuestLogo.png'

export default function LoginScreen(props) {

    return (
        <div className="login">
            <img
                src={logo}
                style={{ width: 527, height: 136, margin: "35px", marginTop: "400px" }}
                ></img>
            {/* Piggybank */}
            {/* <p>Profile Questionnaire</p> */}
            <label>
                <input placeholder="Email" style={{ background: 'transparent', border: 'none', borderBottom: '2px solid white', margin: "15px", color: 'white', width: 300 }}/>
            </label>
            <label>
            <input placeholder="Password" type="password" style={{ background: 'transparent', border: 'none', borderBottom: '2px solid white', margin: "15px", color: 'white', width: 300 }}/>
            </label>
            <button onClick={() => props.onClick()}         
            style={{ width: 100,
                 height: 55,
                 backgroundColor: "#16f385",
                 borderRadius: 30,
                 margin: "25px",
                 color: "white",
                 fontSize: "20px",
                 fontWeight: "bold"
                 }} >Login</button>
        </div>
    );
}