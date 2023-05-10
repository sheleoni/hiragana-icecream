import React from 'react';
import styles from './Choices.module.css';
import optionGroup from "../Game/optionGroup.js";
import rowLetters from "../Game/rowLetters.js";
import {sample} from "new-component/src/utils.js";

function Choices({
                     questionNumber,
                     setQuestionNumber,
                     sampleQuestion,
                     questionRow,
                     choiceData,
                     score,
                     setScore,
                     isOnStreak,
                     setIsOnStreak,
                     tideLevel,
                     setTideLevel,
                 }) {

    const getRomajiFromChar = (char) => { // converts the hiragana or katakana character into romaji
        const choice = choiceData.find((c) => c.hiragana === char || c.katakana === char);
        return choice ? choice.romaji : null;
    };

    const romajiAnswer = getRomajiFromChar(sampleQuestion)
    
    const checkAnswer = (input, answer) => {
        console.log(isOnStreak, 'isOnStreak object');
        if (input === answer) {
            const nextScore = {...score};
            nextScore[sampleQuestion] += 1;
            setScore(nextScore);

            const nextIsOnStreak = {...isOnStreak}
            if (isOnStreak[sampleQuestion] === false) {
                nextIsOnStreak[sampleQuestion] = true;
                setIsOnStreak(nextIsOnStreak);
            }
            if (isOnStreak[sampleQuestion] === true) {

                const nextTideLevel = {...tideLevel};
                nextTideLevel[sampleQuestion] += 1
                setTideLevel(nextTideLevel);
            }
            // incrementTideLevel(answer);
            console.log(isOnStreak[sampleQuestion], `is whether the character ${sampleQuestion} is onStreak.`)
            setQuestionNumber(questionNumber + 1);

        } else {
            console.log("incorrect. try again!")
            const nextIsOnStreak = {...isOnStreak};
            nextIsOnStreak[sampleQuestion] = false
            setIsOnStreak(nextIsOnStreak);
            console.log(isOnStreak[sampleQuestion], `is whether the character ${sampleQuestion} is onStreak.`)
        }
    }

    const filteredQuestionMultipleChoices = optionGroup[questionRow];
    return (
        <section className={styles.choiceArea}>
            <div style={{color: 'red', fontWeight: 'bold'}}>

            </div>
            {filteredQuestionMultipleChoices?.map((choice) => {
                return (
                    <section key={choice} className={styles.choiceArea__bubbleContainer}
                             onClick={() => checkAnswer(choice, romajiAnswer)}>
                        <img className={styles.choiceArea__bubbleBackground}
                             src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1676767326/hiragana_game/Bubble_background_opudxy.gif"
                             alt={choice.romaji}/>
                        <span className={styles.choiceArea__choiceLetter}>
                                    {choice}
                                </span>
                        <span className={styles.choiceArea__bubbleShadow}></span>
                    </section>
                )

            })}

        </section>
    );
}

export default Choices;
