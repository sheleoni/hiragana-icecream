import React from 'react';
import styles from './Choices.module.css';
import optionGroup from "../Game/optionGroup.js";
import rowLetters from "../Game/rowLetters.js";
import {sample} from "new-component/src/utils.js";

function Choices({
                     sampleQuestion,
                     questionRow,
                     choiceData,
                     score,
                     setScore
                 }) {

    const getRomajiFromChar = (char) => {
        const choice = choiceData.find((c) => c.hiragana === char || c.katakana === char);
        return choice ? choice.romaji : null;
    };

    const romajiAnswer = getRomajiFromChar(sampleQuestion)

    console.log(getRomajiFromChar(sampleQuestion));
    console.log(romajiAnswer);

    const checkAnswer = (input, answer) => {
        if (input === answer) {
            const nextScore = {...score};
            nextScore[sampleQuestion] += 1;
            setScore(nextScore);
        } else {
            console.log("incorrect. try again!")
        }
    }

    const filteredQuestionMultipleChoices = optionGroup[questionRow];
    console.log(filteredQuestionMultipleChoices, 'this is the bubble text')

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
