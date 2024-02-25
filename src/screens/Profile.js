import { useState, React } from 'react';

const questions = [
    "How old are you?",
    "What is your gender?",
    "What is your race?",
    "What is your education level?",
    "What is your level of financial knowledge?"
];

let results = [
    [0,], // age
    [1,], // gender
    [2,], // race
    [3,], // education
    [4,] // financial_knowledge (1 of 3 choices - basic, intermediate, advanced)
];


function Questionnaire(props) {
    const [question, setQuestion] = useState("");
    // const [responses, setResponses] = useState([]);
    // 3 choices for each question
    // const [choices, setChoices] = useState([]);
    const [currentQuestion, setCurrentQuestions] = useState(0);
    const [showInput, setShowInput] = useState(true);
    const [showFinanceKnowledge, setShowFinanceKnowledge] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    // const handleKeyPress = (e) => {
    //     const answer = document.getElementById("questionnaireInput").textContent;

    //     // save result from input and clear it
    //     if (e.key === 'Enter') {
    //         document.getElementById("questionnaireInput").value = "";

    //         // TODO: move to next question stored

    //         setCurrentQuestions(currentQuestion + 1);
    //     }
    // }

    return (
        <div className="questionnaire">
            <p>Questionnaire</p>
            {/* <p>{question}</p> */}
            <p>{questions[currentQuestion]}</p>
            {/* move onto next question once they press enter */}
            {
                showInput ?
                    <div id="questionnaireDiv">
                        <input id="questionnaireInput"></input>
                    </div>
                    :
                    null
            }

            {
                showSubmitButton ?
                    <button id="submitButton" onClick={() => {
                        // take input from radio button
                        console.log(document.getElementsByName("financeKnowledge").item);
                    }}>Submit</button>
                    :
                    null
            }

            {
                showNextButton ?
                    <button id="nextButton" onClick={() => {
                        if (document.getElementById("questionnaireInput").value === "") {
                            return; // can't be empty input
                        }
                        if (currentQuestion > 4) {
                            // finish questionnaire and go to profile page
                            setShowInput(false);
                            setShowNextButton(false);
                            setShowSubmitButton(true);
                            return;
                        }
                        const answer = document.getElementById("questionnaireInput").value;

                        // save result from input and clear it
                        document.getElementById("questionnaireInput").value = "";

                        results[currentQuestion] = answer;
                        // debugger;

                        // move to next question stored
                        setCurrentQuestions(currentQuestion + 1);
                        if (currentQuestion === 3) {
                            setShowFinanceKnowledge(true);
                            setShowInput(false);
                            setShow
                        }
                        console.log(results);
                    }}>Next</button>
                    :
                    null
            }
        </div>
    );
}
/*
the questions determine beginner, intermediate, advanced
*/

export default function Profile(props) {
    const [goals, setGoals] = useState([]);
    const [demographics, setDemographics] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
    const [showQuestionnaireButton, setshowQuestionnaireButton] = useState(true);
    const [showQuestionnaire, setShowQuestionnaire] = useState(false);

    // profile page attributes
    const [race, setRace] = useState("");
    const [age, setAge] = useState(0);

    // for when they press the submit button
    const [finishedQuestionnaire, setFinishedQuestionnaire] = useState(false);

    return (
        <div className="profile">
            {
                showQuestionnaireButton
                    ?
                    <button type="button" onClick={() => {
                        setshowQuestionnaireButton(false);
                        setShowQuestionnaire(true);
                        // show questionnaire
                        console.log("show")
                    }}>Complete Questionnaire</button>
                    :
                    null
            }

            {
                showQuestionnaire ?
                    <Questionnaire />
                    :
                    null
            }

        </div>
    );
}