import React from 'react';
import styles from './Choices.module.css';

function Choices({answer, choiceLetters, score, setScore}) {


    const checkAnswer = (input, answer) => {
        if (input === answer) {
            const nextScore = {...score};
            nextScore[answer] = nextScore[answer] + 1;
            setScore(nextScore);
        } else {
            console.log(score[answer] + 1);
            console.log("try again!")
        }
    }


    return <section className={styles.choiceArea}>
        {choiceLetters.slice(0, 5).map((choice) => {
            return (
                <section key={choice.romaji} className={styles.choiceArea__bubbleContainer}
                         onClick={() => checkAnswer(choice.hiragana, answer)}>
                    <img className={styles.choiceArea__bubbleBackground}
                         src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1676767326/hiragana_game/Bubble_background_opudxy.gif"
                         alt={choice.romaji}/>
                    <span className={styles.choiceArea__choiceLetter}>
                                    {choice.romaji}
                                </span>
                    <span className={styles.choiceArea__bubbleShadow}></span>
                </section>
            )

        })}

    </section>;
}

export default Choices;
