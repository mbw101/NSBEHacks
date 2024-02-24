import React, { useState } from 'react';
import './../App.css';


export default function LoginScreen(props) {

    return (
        <div className="login">
            <img
                src="https://pngimg.com/d/money_PNG3546.png"
                style={{ width: 200, height: 200 }}></img>
            {/* Piggybank */}
            {/* <p>Profile Questionnaire</p> */}
            <input />
            <input type="password" />
            <button onClick={() => props.onClick()}>Login</button>
        </div>
    );
}