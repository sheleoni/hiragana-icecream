import React from 'react';
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
import isOnStreakData from "./isOnStreak.js";
import tideLevelData from "./tideLevel.js";

function Game() {

    const [questionNumber, setQuestionNumber] = React.useState(0);
    React.useEffect(() => setQuestionNumber(questionNumber + 1), []);
    // keeps track of how many questions the user has gone through
    console.log(questionNumber, 'current questionNumber');

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
        return questionPool[randomIndex];
    }

    const sampleQuestion = React.useMemo(() => {
        return getRandomSampleQuestion(questionPool)
    }, [questionNumber]);

    // If current question is 「う」, return the row 「あ行」
    const getSampleQuestionRow = (sampleQuestion) => {
        for (const questionRow in rowLetters) {
            if (rowLetters[questionRow].includes(sampleQuestion)) {
                return questionRow;
            }
        }
        return null;
    }

    const questionRow = React.useMemo(() => {
        return getSampleQuestionRow(sampleQuestion);
    }, [questionNumber]);


    const totalScore = Object.values(scoreData).reduce((sum, currentValue) => {
        return sum + currentValue;
    }, 0)

    const [score, setScore] = React.useState(scoreData);
    // const [answer, setAnswer] = useState('あ');

    const choiceLetters = choiceData;


    const [randomQuestion, setRandomQuestion] = React.useState(getRandomSampleQuestion(questionPool));
    const getRandomQuestion = () => { // get new random question
        const newQuestion = getRandomSampleQuestion(questionPool);
        setRandomQuestion(newQuestion);
        setQuestionNumber(questionNumber + 1);
    };

    const [isOnStreak, setIsOnStreak] = React.useState(isOnStreakData);
    const [tideLevel, setTideLevel] = React.useState(tideLevelData);


    return (
        <>
            Q{questionNumber}
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
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    sampleQuestion={sampleQuestion}
                    questionRow={questionRow}
                    choiceData={choiceData}
                    score={score}
                    setScore={setScore}
                    isOnStreak={isOnStreak}
                    setIsOnStreak={setIsOnStreak}
                    tideLevel={tideLevel}
                    setTideLevel={setTideLevel}/>
                {/* hexagons */}
                <Progress choiceLetters={choiceLetters}
                          questionRow={questionRow}
                          tideLevel={tideLevel}
                />
            </section>
        </>
    )
}

export default Game;
