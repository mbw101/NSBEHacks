import React, { useState } from 'react';
import MapBlock from '../maps/mapBlock';
import LevelOne from './levelScreens/levelOne';
import LevelTwo from './levelScreens/LevelTwo';

export default function MapScreen(props) {
    // const [show]
    const [showLevel1, setShowLevel1] = useState(false);
    const [showLevel2, setShowLevel2] = useState(false);
    const [showMap, setShowMap] = useState(true);

    const level1 = () => {
        console.log("level1");
        setShowLevel1(true);
        setShowMap(false);
    }

    const level2 = () => {
        console.log("level2");
        setShowLevel2(true);
        setShowMap(false);
    }

    const showMapClick = () => {
        console.log("show map");
        setShowLevel1(false);
        setShowLevel2(false);
        setShowMap(true);
    }

    // if either of the show levels are true, hide the map screen
    return (
        <div className="MapScreen">
            {
                showMap ?
                    <div className="test">
                        <svg><line x1="150" y1="0" x2="150" y2="50" stroke="#111e52" strokeWidth="10" /></svg>
                        <MapBlock blockName={"Finance Introduction"} restricted={false} onClick={level1} />
                        <svg><line x1="150" y1="0" x2="150" y2="150" stroke="#142F9B" strokeWidth="10" /></svg>
                        <MapBlock blockName={"Learn - Saving"} restricted={true} onClick={level2} />
                    </div>
                    :
                    null
            }

            {
                showLevel1 ?
                    <div className="level1">
                        <LevelOne />

                        <button
                            title="Show Map"
                            onClick={() => showMapClick()}
                            style={{
                                width: 300,
                                height: 180,
                                backgroundColor: "#16f385",
                                borderRadius: 30,
                                border: "15px solid #13AE5E",
                                //margin: "35px",
                                color: "white",
                                fontSize: "25px",
                                fontWeight: "bold",
                                fontFamily: "Monaco, monospace"
                            }}>
                        Show Map
                        </button>
                    </div>
                    :
                    null
            }

            {
                showLevel2 ?
                    <div className="level2">
                        <LevelTwo />

                        <button
                            title="Show Map"
                            onClick={() => showMapClick()}
                            style={{
                                width: 300,
                                height: 180,
                                backgroundColor: "#16f385",
                                borderRadius: 30,
                                border: "15px solid #13AE5E",
                                //margin: "35px",
                                color: "white",
                                fontSize: "25px",
                                fontWeight: "bold",
                                fontFamily: "Monaco, monospace"
                            }}>
                                Show Map
                            </button>
                    </div>
                    :
                    null
            }


        </div>
    );
}

/*
<MapBlock blockName={"Learn - Budgeting"} restricted={false}/>
<MapBlock blockName={"Learn - Borrowing (Credit)"} restricted={true}/>
<MapBlock blockName={"Learn - Financial Literacy"} restricted={false}/>
<MapBlock blockName={"Learn - Basic Investing"} restricted={true}/>
<MapBlock blockName={"Finance Time Value"} restricted={false}/>
<MapBlock blockName={"Learn - Taxes"} restricted={true}/>
<MapBlock blockName={"Learn - Advanced Investing"} restricted={false}/>
<MapBlock blockName={"Learn - Retirement Planning"} restricted={true}/>
*/