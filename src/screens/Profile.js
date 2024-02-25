import { useState, React } from 'react';
import Question from "./Question"

const questions = [
    "How old are you?",
    "What is your gender?",
    "What is your race?",
    "What is your education level?",
    // finance questions:
    "What do you call money you receive on your birthday?",
    "What is compound interest?",
    "What is the difference between gross and net income?",
    "What is a mortgage?",
    "If you borrow $1,000 from a bank at an annual interest rate of 8%, compounded quarterly, what is the effective annual Interest(EAR)?"
];

const answers = [
    [
        "Loan",
        "Gift Money",
        "Allowance",
        "Savings"
    ],
    [
        "Is a snowball that grows bigger as it rolls. It's interest on both the original money and earned interest.",
        "Getting an allowance randomly without any extra money added for saving or earning interest",
        "Saving money in a piggy bank that receives new deposits every month."
    ],
    [
        "Gross income is money received after tax deductions",
        "Net income is total money received before any deductions",
        "They are both the same, just different terms",
        "Gross income is total money received before any deductions"
    ],
    [
        "A mortgage is a loan for buying a home. You pay back the loan with interest over time",
        "Borrowing money to own a home, repaying in installments, including interest.",
        "A mortgage is shares by which ownership of a corporation or company is divided. A single share of the stock means fractional ownership of the corporation in proportion to the total number of shares",
        "A mortgage is a written contract typically between you and a life insurance company in which the insurance company makes a series of regularly spaced payments to you in return for a premium or premiums you have paid"
    ],
    [
        "5.14%",
        "9.5%",
        "36%",
        "8.29%"
    ]
];

const correctAnswers = [3, 1, 4, 2, 4];

let results = [
    [0,], // age
    [1,], // gender
    [2,], // race
    [3,], // education
    [4,], // financial_knowledge 1
    [5,] // financial_knowledge 1
];

function Questionnaire(props) {
    const [question, setQuestion] = useState("");
    // const [responses, setResponses] = useState([]);
    // 3 choices for each question
    // const [choices, setChoices] = useState([]);
    const [currentQuestion, setCurrentQuestions] = useState(0);
    const [showInput, setShowInput] = useState(true);
    const [showNextButton, setShowNextButton] = useState(true);
    const [showFinanceQuestions, setShowFinanceQuestions] = useState(true);
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    return (
        <div className="questionnaire">
            <p>Questionnaire</p>
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
                showFinanceQuestions ?
                <Question question={questions[currentQuestion]} answers={[answers[0]]} />
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
                            setShowFinanceQuestions(true);
                            setShowInput(false);
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