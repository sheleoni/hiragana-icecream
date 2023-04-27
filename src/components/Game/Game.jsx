import React from 'react';
import {useState} from 'react';
import Question from "../../components/Question/index.js";
import Choices from "../../components/Choices/index.js";
import Progress from "../../components/Progress/index.js";
import ScoreDisplay from "../../components/ScoreDisplay/index.js";
import QuestionFilter from "../QuestionFilter/index.js";
import scoreData from "./scoreData.js";
import choiceData from "./choiceData.js";
import optionGroup from "./optionGroup.js";

function Game() {

    const totalScore = Object.values(scoreData).reduce((sum, currentValue) => {
        return sum + currentValue;
    }, 0)

    const [score, setScore] = useState(scoreData);
    const [answer, setAnswer] = useState('あ');
    const [question, setQuestion] = useState(
        {
            romaji: "a",
            hiragana: "あ",
            hiraganaImgURL:
                "https://res.cloudinary.com/dd1dw34dc/image/upload/v1676767333/hiragana_game/%E3%81%82_stroke_hgeopi.gif",
            row: "あ行",
        });

    const choiceLetters = choiceData;

    const getRandomLetter = (choiceData) => {
        const randomIndex = Math.floor(Math.random() * choiceData.length);
        const currentQuestionData = choiceData[randomIndex];
        return {
            hiragana: currentQuestionData.hiragana,
            hiraganaImgURL: currentQuestionData.hiraganaImgURL,
            romaji: currentQuestionData.romaji,
            row: currentQuestionData.row,
        }
    }


    const updateQuestion = (choiceData) => {
        setQuestion(getRandomLetter(choiceData));
    };


    const multipleChoices = optionGroup[question.row]


    return (
        <>
            <button onClick={() => updateQuestion(choiceData)}>🔀</button>
            <QuestionFilter optionGroup={optionGroup}/>

            <section className="gameInterface">
                {/* shows scores in terms of ice-cream scope*/}
                <ScoreDisplay score={score}/>
                {/* shows あいうえお with stroke .gif */}
                <Question question={question}
                          setQuestion={setQuestion}
                          answer={answer}
                          updateQuestion={updateQuestion}
                          choiceData={choiceData}/>
                {/* bubbles for users to select */}
                <Choices answer={answer}
                         question={question}
                         multipleChoices={multipleChoices}
                         choiceLetters={choiceLetters}
                         choiceData={choiceData}
                         score={score}
                         setScore={setScore}/>
                {/* hexagons */}
                <Progress choiceLetters={choiceLetters}/>
            </section>
        </>
    )
}

export default Game;
