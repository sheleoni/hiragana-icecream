import React from 'react';
import {useState} from 'react';
import Question from "../../components/Question/index.js";
import Choices from "../../components/Choices/index.js";
import Progress from "../../components/Progress/index.js";
import ScoreDisplay from "../../components/ScoreDisplay/index.js";
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

    /**
     * return the array of X行 depending on the question displayed
     *
     * question.row = あ行
     * choices[currentQuestion.row] = ['a', 'i', 'u', 'e', 'o']
     *
     */

    /**
     *
     * const choices = {
     *     'あ行': ['a', 'i', 'u', 'e', 'o'],
     *     'か行': ['ka', 'ki', 'ku', 'ke', 'ko'],
     *     'が行': ['ga', 'gi', 'gu', 'ge', 'go'],
     *     'さ行': ['sa', 'shi', 'su', 'se', 'so'],
     *
     * const choiceData = [
     *     {
     *         romaji: "a",
     *         hiragana: "あ",
     *         hiraganaImgURL:
     *             "https://res.cloudinary.com/dd1dw34dc/image/upload/v1676767333/hiragana_game/%E3%81%82_stroke_hgeopi.gif",
     *         katakana: "ア",
     *         katakanaImgURL: "",
     *         row: "あ行",
     *     },
     *     {
     *         romaji: "i",
     *         hiragana: "い",
     *         hiraganaImgURL: "",
     *         katakana: "イ",
     *         katakanaImgURL: "",
     *         row: "あ行",
     *
     *     },
     */


        // goal: make choiceLetter only return X行 array,
        // e.g. the question


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

    // setQuestion as getRandomLetter
    // setQuestion(getRandomLetter(choiceData))

    const updateQuestion = (choiceData) => {
        setQuestion(getRandomLetter(choiceData));
    };


    const multipleChoices = optionGroup[question.row]

    // should return ["a", "i", "u", "e", "o"] if it's あ、い、う、え、or、お
    // const currentQuestion = getRandomLetter();

    return (
        <>
            multiple choices: {multipleChoices}
            {choiceData.length}
            <button onClick={() => updateQuestion(choiceData)}>🔀</button>

            <section className="gameInterface">
                {/* shows scores in terms of ice-cream scope*/}
                <ScoreDisplay score={score}/>
                {/* shows あいうえお with stroke .gif */}
                <Question question={question} setQuestion={setQuestion} answer={answer}
                          choiceData={choiceData} getRandomLetter={getRandomLetter}/>
                {/* bubbles for users to select */}
                <Choices answer={answer}
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
