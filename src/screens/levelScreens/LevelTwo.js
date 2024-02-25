import { React, useState } from 'react';
import logo from '../../fullCoinQuestLogo.png'
import './../../App.css';

const questions = [
    "True or False: Pros and Cons are factors that help you evaluate the advantages and disadvantages of a decision.",
    "____________ is the ability to manage impulses and make wise financial choices.",
    "What is a sales discount for purchases?",
    "True or False: Needs are essential things necessary for survival.",
    "What are wants?",
    "____________ is the ability to resist the temptation for an immediate reward in favour of a later, more substantial reward.",
    "Simplified: In financial terms, what is Interest?",
];

const answers = [
    ["True", "False"],
    ["Spending", "Self Control", "Investing", "Saving"],
    ["An additional charge on purchases", "A reduction in the original price", "A fee for using a credit card", "A reduction in tax"],
    ["True", "False"],
    ["Essential items for survival", "Desires that enhance your quality of life but aren't necessary", "Bills and obligations", "Fortnite"],
    ["Delayed gratification", "Opportunity", "Instant gratification", "Procrastination mastery"],
    ["Money you gain after making a sale", "Cost of borrowing money", "Amount of money you invest in a stock", "The return of capital gains"],
];

const correctAnswers = [
    "True",
    "Self Control",
    "A reduction in the original price",
    "True",
    "Desires that enhance your quality of life but aren't necessary",
    "Delayed gratification",
    "Cost of borrowing money",
];

function changeBackground(color) {
    document.body.style.background = color;
  }
  
  window.addEventListener("load", function() {changeBackground('#111e52')});

  export default function LevelTwo(props) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [question, setQuestion] = useState(questions[0]);
    const [showFinish, setShowFinish] = useState(false);

    const getSelectedAnswer = () => {
        return document.querySelector('input[name="question"]:checked').value;
    }

    const advanceQuestion = () => {
        if (questionIndex >= questions.length - 1) {
            // hide buttons and options
            // show congratulations
            setShowFinish(true);
            return;
        }
        const selectedAnswer = getSelectedAnswer().toLowerCase();
        const correctAnswer = correctAnswers[questionIndex].toLowerCase();
        console.log(selectedAnswer);

        if (selectedAnswer === correctAnswer) {
            // they got it right
            window.alert("Correct!");
        }
        else {
            window.alert("Incorrect, the answer is " + correctAnswer);
        }
        
        setQuestionIndex(questionIndex + 1);
        setQuestion(questions[questionIndex]);
        // update answers

    }

    return (
        <div className="levelTwo">
            <img
                src={logo}
                style={{ width: 527, height: 136, margin: "35px", marginTop: "400px" }}
            ></img>

            <h1>Learn - Saving</h1>

            {
                showFinish ?
                    <p className="answerOption">Congratulations!!!</p>
                    :
                    <div id="">
                        <p className="answerOption">{questions[questionIndex]}</p>
                        <input type="radio" name="question" value={answers[questionIndex][0]} checked={true}/> <p className="answerOption">{answers[questionIndex][0]}</p>
                        <input type="radio" name="question" value={answers[questionIndex][1]} /> <p className="answerOption">{answers[questionIndex][1]}</p>
                        {
                            answers[questionIndex].length > 2
                                ?
                                <div id="options">
                                    <input type="radio" name="question" value={answers[questionIndex][2]} /> <p className="answerOption">{answers[questionIndex][2]}</p>
                                    <input type="radio" name="question" value={answers[questionIndex][3]} /> <p className="answerOption">{answers[questionIndex][3]}</p>
                                </div>
                                :
                                null
                        }

                        <button
                            title="Next"
                            onClick={() => advanceQuestion()}
                            style={{
                                width: 150,
                                height: 90,
                                backgroundColor: "#16f385",
                                borderRadius: 30,
                                border: "15px solid #13AE5E",
                                //margin: "35px",
                                color: "white",
                                fontSize: "25px",
                                fontWeight: "bold",
                                fontFamily: "Monaco, monospace"
                            }}>
                            Next Question
                        </button>
                    </div>
            }

        </div>
    );
}