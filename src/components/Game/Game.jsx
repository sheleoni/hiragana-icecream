import React, {useState} from 'react';
import Question from "../../components/Question/index.js";
import Choices from "../../components/Choices/index.js";
import Progress from "../../components/Progress/index.js";
import ScoreDisplay from "../../components/ScoreDisplay/index.js";
import QuestionFilter from "../QuestionFilter/index.js";
import scoreData from "./scoreData.js";
import choiceData from "./choiceData.js";
import optionGroup from "./optionGroup.js";
import {LevelFilterContext} from "../../contexts/LevelFilterContext.jsx";
import rowLetters from "./rowLetters.js";

function Game() {

    const {levelFilter} = React.useContext(LevelFilterContext);
    const [questionPool, setQuestionPool] = React.useState([]);

    React.useEffect(() => {
        const filterRowCharacters = (characterList) => {
            let filteredRowCharacters = [];
            for (const characterSet in characterList) {
                const characterSetList = characterList[characterSet];
                for (const character in characterSetList) {
                    if (characterSetList[character] === true) {
                        filteredRowCharacters.push(character);
                    }
                }
            }
            return filteredRowCharacters;
        }

        const filteredRowCharacters = filterRowCharacters(levelFilter);
        let updatedQuestionPool = [];
        filteredRowCharacters.forEach((row) => {
            const lettersInRow = rowLetters[`${row}行`];
            updatedQuestionPool = updatedQuestionPool.concat(lettersInRow);
        });

        setQuestionPool(updatedQuestionPool);
    }, [levelFilter]);

    const getRandomSampleQuestion = (questionPool) => {
        const randomIndex = Math.floor(Math.random() * questionPool?.length);
        console.log(questionPool[randomIndex], 'this is the random question from pool')
        return questionPool[randomIndex]
    }

    const sampleQuestion = getRandomSampleQuestion(questionPool);

    const getSampleQuestionRow = (sampleQuestion) => {
        for (const questionRow in rowLetters) {
            if (rowLetters[questionRow].includes(sampleQuestion)) {
                return questionRow
            }
        }
        return null;
    }

    const questionRow = getSampleQuestionRow(sampleQuestion)

    const totalScore = Object.values(scoreData).reduce((sum, currentValue) => {
        return sum + currentValue;
    }, 0)

    const [score, setScore] = useState(scoreData);
    // const [answer, setAnswer] = useState('あ');

    const choiceLetters = choiceData;


    const [randomQuestion, setRandomQuestion] = useState(getRandomSampleQuestion(questionPool));
    const getRandomQuestion = () => {
        const newQuestion = getRandomSampleQuestion(questionPool);
        setRandomQuestion(newQuestion);
    };


    return (
        <>
            <button onClick={getRandomQuestion}>
                🔀
            </button>
            <QuestionFilter optionGroup={optionGroup}/>

            <section className="gameInterface">
                {/* shows scores in terms of ice-cream scope*/}
                <ScoreDisplay score={score}/>
                {/* shows あいうえお with stroke .gif */}
                <Question
                    getRandomQuestion={getRandomQuestion}
                    sampleQuestion={sampleQuestion}
                    choiceData={choiceData}/>
                {/* bubbles for users to select */}
                <Choices
                    sampleQuestion={sampleQuestion}
                    questionRow={questionRow}
                    choiceData={choiceData}
                    score={score}
                    setScore={setScore}/>
                {/* hexagons */}
                <Progress choiceLetters={choiceLetters}
                          questionRow={questionRow}
                />
            </section>
        </>
    )
}

export default Game;
