import  { React, useState  }  from 'react';
import { useNavigate } from "react-router-dom";
import './../App.css';

const blockTitles = ["Finance Introduction", "Learn - Saving", "Learn - Budgeting", "Learn - Borrowing (Credit)", "Learn - Financial Literacy", , "Learn - Basic Investing", "Learn - Time Value", "Learn - Taxes", "Learn - Advanced Investing", "Learn - Retirement Planning"];
const blockPagePaths = [];

function MapBlock(props) {
    const { blockName, restricted } = props;
    const [BlockName, setBlockName] = useState(0);
    const [Restricted, setRestricted] = useState(0);

    const blockNameSetter = () => {
       setBlockName(blockName);
    }
    
    const restrictionSetter = () => {
        setRestricted(restricted);
    }
    
    let navigate = useNavigate();
    let path = "";
    const pageChange = () =>{
        for (let i = 0; i < 10; i++) {
            if (blockName == blockTitles[i]) {
                path = blockPagePaths[i];
            };
        }
        navigate(path);
    }    

    return (
        <div className="MapBlock">
        <header className="MapBlock-header">
        <button
         title = {blockNameSetter}
         disabled = {restrictionSetter}
         onClick = {pageChange}
        style={{ width: 300,
                 height: 180,
                 backgroundColor: "#16f385",
                 borderRadius: 30,
                 border: "15px solid #13AE5E",
                 //margin: "35px",
                 color: "white",
                 fontSize: "20px",
                 fontWeight: "bold"
                 }}
       >{blockName}</button>   
       </header>
      </div>       
    );
}

export default MapBlock;