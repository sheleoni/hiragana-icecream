import React from 'react';
import styles from './ScoreDisplay.module.css';

function ScoreDisplay({score}) {

    console.log(score);

    let totalScore = 0;
    for (const key in score) {
        totalScore += score[key];
        console.log(score[key])
        // console.log(totalScore)
    }

    console.log("total score is:");
    console.log(totalScore);
    return <section className={styles.scoreContainer}>
        Your score is:{' '}{totalScore}
        <img className={styles.scoreContainer__scoreImage} alt="An ice cream cone displaying the user's current score"
             src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1677295486/hiragana_game/Sample_icecream_stack_opvcor.png"/>
    </section>;
}

export default ScoreDisplay;
