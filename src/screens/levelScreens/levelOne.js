import { React, useState } from 'react';
import logo from '../../fullCoinQuestLogo.png';
import './../../App.css';
// import { QuestionGroup, Option, Question } from 'react-multiple-choice';

const questions = [
    "What type of card takes money directly from your account when making a purchase, debit or credit?",
    "True or False: Credit cards allow you to borrow money up to a certain limit.",
    "A _____________ is a safe place to store your spare change",
    "What is income?",
    "True or False: Bond accounts are a type of investment where you lend money to a company or government.",
    "How should you formulate financial goals?",
    "What is wealth?",
    "A _____________ is an exchange of money or goods.",
    "_____ goals are financial goals that are between 2-5 years in length"
];

const answers = [
    ["Debit", "Credit"],
    ["True", "False"],
    ["Piggy Bank", "Mattress", "Chimney", "Back pocket"],
    ["Money you spend", "Money you earn", "Money you save", "Money you invest"],
    ["True", "False"],
    ["SMART Method", "STAR Method", "SHORT Method", "All of these work"],
    ["The amount of money you spend", "The total value of your assets minus your debts", "The number of transactions you make", "Your parents' garage"],
    ["debit", "piggy bank", "goal", "transactions"],
    ["short", "intermediate", "long term", "extended term"]
];

const correctAnswers = [
    "Debit",
    "True",
    "Piggy bank",
    "Money you earn",
    "True",
    "SMART Method",
    "The total value of your assets minus your debts",
    "transactions",
    "Intermediate"
];

function changeBackground(color) {
    document.body.style.background = color;
}

window.addEventListener("load", function () { changeBackground('#111e52') });

export default function LevelOne(props) {
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
        <div className="levelOne">
            <img
                src={logo}
                style={{ width: 527, height: 136, margin: "35px", marginTop: "400px" }}
            ></img>

            <h1>Money Matters 101: Building a Strong Financial Foundation</h1>

            <h2>Objective:</h2>
            <p className="answerOption">By the end of this lesson, students will be able to understand the basics of personal finance, including the concepts of saving, budgeting, and key financial goals.</p>


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