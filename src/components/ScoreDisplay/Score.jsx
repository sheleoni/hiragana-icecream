import React from 'react';
import styles from './Score.module.css';

function Score({score}) {
    return <section className={styles.scoreContainer}>
        Your score is: {score["あ"]}
        <img className={styles.scoreContainer__scoreImage} alt="An ice cream cone displaying the user's current score"
             src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1677295486/hiragana_game/Sample_icecream_stack_opvcor.png"/>
    </section>;
}

export default Score;
