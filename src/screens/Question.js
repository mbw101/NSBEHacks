import { useState, React } from 'react';

export default function Question(props) {
    /*
    use length of answers to create appropriate number of radio buttons
    */
    const { question, answers } = props;

    return (
        <div id="Question">
            <p>{question}</p>
            <input type="radio" name="question">Test</input>

            {/* { answers.map((answer) => {
                <input type="radio" name="question">{answer}</input>
            })} */}
        </div>
    );
}