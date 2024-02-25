import React, { useState } from 'react';
import './../App.css';
import logo from '../fullCoinQuestLogo.png'
import Popup from 'reactjs-popup';

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

                <Popup trigger=
                        {<button style={{ 
                             width: 155,
                             height: 55,
                             backgroundColor: "#13AE5E",
                             borderRadius: 30,
                             margin: "25px",
                             color: "white",
                             fontSize: "20px",
                             fontFamily: "Monaco, monospace",
                             fontWeight: "bold",
                             position: 'absolute',
                             left: 2620,
                             top: 20
                         }}> Sign Up</button>} 
                        modal nested>
                            {
                                close => (
                                    <div className='modal'>
                                        <div className='content' style={{
                                            position: 'absolute',
                                            top: -200,
                                            left: -250,
                                            background: "#445492",
                                            border: "10px solid #525D8C",
                                            width: 500,
                                            height: 800,
                                            borderRadius: 30,
                                            color: "white",
                                            fontSize: "20px",
                                            fontFamily: "Monaco, monospace",
                                            textAlign: "center"
                                        }}>
                                          User Sign-Up <br></br>
                                          <input placeholder="Email" style={{ background: 'transparent', border: 'none', borderBottom: '2px solid white', margin: "15px", color: 'white', width: 300 }}/>
                                          <input placeholder="Password" type="password" style={{ background: 'transparent', border: 'none', borderBottom: '2px solid white', margin: "15px", color: 'white', width: 300 }}/>
                                          <br></br><br></br><br></br><br></br>
                                          <input placeholder="Age" style={{ background: 'transparent', border: 'none', borderBottom: '2px solid white', margin: "15px", color: 'white', width: 300 }}/>
                                          <input placeholder="(School) Grade" style={{ background: 'transparent', border: 'none', borderBottom: '2px solid white', margin: "15px", color: 'white', width: 300 }}/>
                                          <br></br>
                                          <select id = "raceDropdown" onchange = "favTutorial()" >
                                            <option> Select Race/Ethnicity </option>
                                            <option> Native Indian </option>
                                            <option> Asian </option>
                                            <option> Black or African American </option>
                                            <option> Hispanic or Latino </option>
                                            <option> Native Pacific Islander </option>
                                            <option> White </option>
                                            </select>
                                          <br></br><br></br><br></br><br></br>
                                          <input placeholder="Finance Topics of Interests" style={{ background: 'transparent', border: 'none', borderBottom: '2px solid white', margin: "15px", color: 'white', width: 300 }}/>
                                          <br></br>
                                          <select id = "levelDropdown" onchange = "favTutorial()" >
                                            <option> Select Financial Literacy Level </option>
                                            <option> Beginner </option>
                                            <option> Intermediate </option>
                                            <option> Expert </option>
                                            <option> Unknown </option>
                                            </select>
                                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                                            <button onClick={() => props.onClick()} style={{ 
                                            width: 155,
                                            height: 55,
                                            backgroundColor: "#13AE5E",
                                            borderRadius: 30,
                                            margin: "25px",
                                            color: "white",
                                            fontSize: "20px",
                                            fontFamily: "Monaco, monospace",
                                            fontWeight: "bold"
                                        }}> Continue</button>

                                        </div>
                                        <div>
                                            <button onClick={() => close()}></button>
                                        </div>
                                    </div>
                                )
                            }
                    </Popup>
        </div>
    );
}