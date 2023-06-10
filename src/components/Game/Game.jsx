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
import iceCreamChoices from "./iceCreamStackData.js";

function Game() {
    const iceCreamChoiceData = iceCreamChoices;
    const [iceCreamScoops, setIceCreamScoops] = React.useState([]);
    const [questionNumber, setQuestionNumber] = React.useState(0);
    React.useEffect(() => setQuestionNumber(questionNumber + 1), []);
    // keeps track of how many questions the user has gone through
    console.log(questionNumber, 'current questionNumber');
    
    console.log(import.meta.env.VITE_ABCDEF);
    // console.log(ABCDEF);

    const {levelFilter} = React.useContext(LevelFilterContext);
    const [questionPool, setQuestionPool] = React.useState([]);

    const [record, setRecord] = React.useState();

    React.useEffect(() => {
        console.log("getting user data!")
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5888/');
                if (!response.ok) {
                    console.log("HTTP response not OK");
                }
                const record = await response.json();
                console.log(record);
                console.log('↑ record');
                setRecord(record);
            } catch (error) {
                console.log("Failed to fetch data: ", error);
            }
        };
        fetchData()
    }, [])

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

    const [score, setScore] = React.useState(scoreData);

    let totalScore = 0;
    for (const key in score) {
        totalScore += score[key];
    }

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
            <p>
                {record ? (<div>
                    Hello there, {record.data.nickName}! Nice to see you back.

                </div>) : <div>Loading...</div>}
            </p>

            Q{questionNumber}
            <button onClick={getRandomQuestion}>
                🔀
            </button>
            <QuestionFilter optionGroup={optionGroup}/>

            <button className="submitButton" onClick={async () => {
                try {
                    console.log(scoreData);
                    console.log(score, 'score');
                    console.log("submitting data!")
                    console.log("total score field:", totalScore)
                    const response = await fetch('http://localhost:5888/submitScore', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: record.data.nickName,
                            totalScore: totalScore
                        })
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const data = await response.json();
                    console.log(data);
                    window.alert("Score submitted! Have fun!")
                } catch (error) {
                    console.log('Fetch error:', error);
                }
            }}>
                Submit Score! {totalScore}
            </button>


            <section className="gameInterface">
                {/* shows scores in terms of ice-cream scoops 🍨*/}
                <ScoreDisplay
                    score={score}
                    iceCreamScoops={iceCreamScoops}
                    iceCreamChoiceData={iceCreamChoiceData}
                />
                {/* shows あいうえお with stroke .gif */}
                <Question
                    questionNumber={questionNumber}
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
                <Progress
                    iceCreamScoops={iceCreamScoops}
                    setIceCreamScoops={setIceCreamScoops}
                    iceCreamChoiceData={iceCreamChoiceData}
                    choiceLetters={choiceLetters}
                    questionRow={questionRow}
                    setTideLevel={setTideLevel}
                    tideLevel={tideLevel}
                />


            </section>
        </>
    )
}

export default Game;
