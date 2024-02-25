import React, { useState } from 'react';
import MapBlock from '../maps/mapBlock';

export default function MapScreen(props) {
    return (
        <div className="MapScreen">
        <svg><line x1="150" y1="0" x2="150" y2="50" stroke="#111e52" stroke-width="10"/></svg>
        <MapBlock blockName={"Finance Introduction"} restricted={false}/>
        <svg><line x1="150" y1="0" x2="150" y2="150" stroke="#142F9B" stroke-width="10"/></svg>
        <MapBlock blockName={"Learn - Saving"} restricted={true}/>

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