import React, { useState } from 'react';
import MapBlock from '../maps/mapBlock';
import  { Line } from 'react-lineto';
import Popup from 'reactjs-popup';

export default function MapScreen(props) {
    return (
        <div className="MapScreen" >
        
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
                 left: 2620
             }}> User Report</button>} 
            modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content' style={{
                                position: 'fixed',
                                top: 250,
                                left: 1200,
                                background: "white",
                                width: 500,
                                height: 800
                            }}>
                                User Report Content
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
        </Popup>
        
        <MapBlock x="1200" y="100" blockName={"Finance Introduction"} restricted={false}/>
        <MapBlock x="800" y="300" blockName={"Learn - Saving"} restricted={true}/>
        <Line x0={1200} y0={200} x1={935} y1={200} borderColor='#353661' borderWidth={15}/>
        <Line x0={950} y0={200} x1={950} y1={300} borderColor='#353661' borderWidth={15}/>
        <MapBlock x="1200" y="500"  blockName={"Learn - Budgeting"} restricted={true}/>
        <Line x0={1200} y0={600} x1={935} y1={600} borderColor='#353661' borderWidth={15}/>
        <Line x0={950} y0={480} x1={950} y1={600} borderColor='#353661' borderWidth={15}/>
        <MapBlock  x="1600" y="700" blockName={"Learn - Borrowing (Credit)"} restricted={true}/>
        <Line x0={1600} y0={800} x1={1350} y1={800} borderColor='#353661' borderWidth={15}/>
        <Line x0={1350} y0={680} x1={1350} y1={800} borderColor='#353661' borderWidth={15}/>
        <MapBlock x="1200" y="900" blockName={"Learn - Financial Literacy"} restricted={false}/>
        <Line x0={1750} y0={880} x1={1750} y1={1000} borderColor='#353661' borderWidth={15}/>
        <Line x0={1750} y0={1000} x1={1500} y1={1000} borderColor='#353661' borderWidth={15}/>
        <MapBlock x="1200" y="1180" blockName={"Learn - Basic Investing"} restricted={true}/>
        <Line x0={1350} y0={1080} x1={1350} y1={1180} borderColor='#353661' borderWidth={15}/>
        <MapBlock x="800" y="1380" blockName={"Learn - Finance Time Value"} restricted={false}/>
        <Line x0={1350} y0={1360} x1={1350} y1={1480} borderColor='#353661' borderWidth={15}/>
        <Line x0={1350} y0={1480} x1={1100} y1={1480} borderColor='#353661' borderWidth={15}/>
        <MapBlock x="800" y="1680" blockName={"Learn - Taxes"} restricted={true}/>
        <Line x0={950} y0={1560} x1={950} y1={1680} borderColor='#353661' borderWidth={15}/>
        <MapBlock x="1200" y="1880" blockName={"Learn - Advanced Investing"} restricted={true}/>
        <MapBlock x="1600" y="1880" blockName={"Learn - Retirement Planning"} restricted={true}/>
        <Line x0={1100} y0={1780} x1={1750} y1={1780} borderColor='#353661' borderWidth={15}/>
        <Line x0={1350} y0={1780} x1={1350} y1={1880} borderColor='#353661' borderWidth={15}/>
        <Line x0={1750} y0={1780} x1={1750} y1={1880} borderColor='#353661' borderWidth={15}/>
        <Line x0={1750} y0={2060} x1={1750} y1={2150} borderColor='#111e52' borderWidth={15}/>
        </div>
    );
}