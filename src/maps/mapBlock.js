import React from 'react';

const blockTitles = ["Finance Introduction", "Learn - Saving", "Learn - Budgeting", "Learn - Borrowing (Credit)", "Learn - Financial Literacy", , "Learn - Basic Investing", "Learn - Time Value", "Learn - Taxes", "Learn - Advanced Investing", "Learn - Retirement Planning"];
const blockPagePaths = [];

function MapBlock(blockName, restricted) {
    const [blockName, setBlockName] = useState("");
    const [restricted, setRestricted] = useState(false);
    
    let navigate = useNavigate();
    let path = "";
    const pageChange = () =>{
        for (i = 0; i < 10; i++) {
            if (blockName == blockTitles[i]) {
                path = blockPagePaths[i];
            };
        }
        navigate(path);
    }

    return (
        <div className="MapBlock">
        <header className="MapBlock-header">
        <Button
        onPress= {pageChange}
        title = {blockName}
        disabled = {restricted}
        />
        </header>
      </div>       
    );
}

const blockOne = MapBlock(blockTitles[0], false);
const blockTwo = MapBlock(blockTitles[1], true);
const blockThree = MapBlock(blockTitles[2], true);
const blockFour = MapBlock(blockTitles[3], true);
const blockFive = MapBlock(blockTitles[4], true);
const blockSix = MapBlock(blockTitles[5], true);
const blockSeven = MapBlock(blockTitles[6], true);
const blockEight = MapBlock(blockTitles[7], true);
const blockNine = MapBlock(blockTitles[8], true);
const blockTen = MapBlock(blockTitles[9], true);

export default mapOne;