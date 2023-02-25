import React from 'react';
import styles from './Score.module.css';

function Score() {
    return <section className={styles.scoreContainer}>
        <img className={styles.scoreContainer__scoreImage} alt="An ice cream cone displaying the user's current score"
             src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1677295486/Sample_icecream_stack_opvcor.png"/>
    </section>;
}

export default Score;
