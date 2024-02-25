import React, { useState } from 'react';
import './../App.css';


export default function LoginScreen(props) {

    return (
        <div className="login">
            <img
                src="coinQuestLogo.png"
                style={{ width: 200, height: 200 }}
                ></img>
            {/* Piggybank */}
            {/* <p>Profile Questionnaire</p> */}
            <label>
                Email: <input />
            </label>
            <label>
                Password: <input type="password"/>
            </label>
            <button onClick={() => props.onClick()}>Login</button>
        </div>
    );
}