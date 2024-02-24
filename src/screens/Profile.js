import React, { useState } from 'react';

function Questionnaire(props) {
    const [question, setQuestion] = useState("");
    const [choices, setChoices] = useState([]);

    return (
        <div className="questionnaire">
            <p>Profile Questionnaire</p>
            <p>{question}</p>
        </div>
    );
}

export default function Profile(props) {
    const [goals, setGoals] = useState([]);
    const [demographics, setDemographics] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
    const [showGetStartedButton, setShowGetStartedButton] = useState(false);
    const [showQuestionnaire, setShowQuestionnaire] = useState(false);
    const [finishedQuestionnaire, setFinishedQuestionnaire] = useState(false);

    return (
        <div className="profile">
            {
                showGetStartedButton ?
                    // TODO: show profile section here
                    <button type="button" id="createProfile" onClick={() => {
                        // setShowGetStartedButton(false);
                        // setShowQuestionnaire(true);
                        // show questionnaire
                        console.log("show")
                    }}>Complete Questionnaire</button>

                    :
                    null
            }

            {/* {
                showQuestionnaire ?
                <Questionnaire />
                :
                {}
            } */}

        </div>
    );
}