import React from 'react';
import styles from './Choices.module.css';

function Choices({answer, question, multipleChoices, choiceLetters, choiceData, score, setScore}) {
    const checkAnswer = (input, answer) => {
        if (input === answer) {
            console.log("correct!")
            const nextScore = {...score};
            nextScore[question.hiragana] = nextScore[question.hiragana] + 1;
            setScore(nextScore);
        } else {
            console.log("input is: ")
            console.log(input);
            console.log("answer is is: ")
            console.log(answer);
            console.log(score[answer] + 1);
            console.log("try again!")
        }
    }

    return <section className={styles.choiceArea}>
        {multipleChoices.map((choice) => {
            return (
                <section key={choice} className={styles.choiceArea__bubbleContainer}
                         onClick={() => checkAnswer(choice, question.romaji)}>
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

    </section>;
}

export default Choices;
