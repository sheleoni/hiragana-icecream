import React from 'react';
import {useState} from 'react';
import Question from "../../components/Question/index.js";
import Choices from "../../components/Choices/index.js";
import Progress from "../../components/Progress/index.js";
import ScoreDisplay from "../../components/ScoreDisplay/index.js";
import scoreData from "./scoreData.js";
import choiceData from "./choiceData.js";

function Game() {

    const totalScore = Object.values(scoreData).reduce((sum, currentValue) => {
        return sum + currentValue;
    }, 0)

    const [score, setScore] = useState(scoreData);
    const [answer, setAnswer] = useState('あ');
    const [question, setQuestion] = useState('あ');

    console.log("your score");
    console.log(scoreData);

    const choiceLetters = choiceData;


    return (
        <section className="gameInterface">
            {/* shows scores in terms of ice-cream scope*/}
            <ScoreDisplay score={score}/>
            {/* shows あいうえお with stroke .gif */}
            <Question answer={answer}/>
            {/* bubbles for users to select */}
            <Choices answer={answer} choiceLetters={choiceLetters} score={score} setScore={setScore}/>
            {/* hexagons */}
            <Progress choiceLetters={choiceLetters}/>
        </section>
    )
}

export default Game;
