import  { React, useState  }  from 'react';
import { useNavigate, Link } from "react-router-dom";
import './../App.css';
import levelOne from './../screens/levelScreens/levelOne.js';

const blockTitles = ["Finance Introduction", "Learn - Saving", "Learn - Budgeting", "Learn - Borrowing (Credit)", "Learn - Financial Literacy", , "Learn - Basic Investing", "Learn - Time Value", "Learn - Taxes", "Learn - Advanced Investing", "Learn - Retirement Planning"];
const blockPagePaths = [levelOne];

function MapBlock(props) {
    const { blockName, restricted, onClick } = props;
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
        navigate(path, { replace: true });
        window.reload(0);
    }    

    return (
        <div className="MapBlock">
        <header className="MapBlock-header">
        <button
         title = {BlockName }
         disabled = {Restricted}
         onClick={() => onClick()}
        style={{ width: 300,
                 height: 180,
                 backgroundColor: "#16f385",
                 borderRadius: 30,
                 border: "15px solid #13AE5E",
                 //margin: "35px",
                 color: "white",
                 fontSize: "25px",
                 fontWeight: "bold",
                 fontFamily: "Monaco, monospace"
                 }}
       >
       <Link to="levelPage" style={{color:"white",textDecoration:"none"}}>{blockName}</Link>
       </button>   
       </header>
      </div>       
    );
}

export default MapBlock;