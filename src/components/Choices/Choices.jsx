import React from 'react';
import styles from './Choices.module.css';

function Choices({choiceLetters}) {
    return <section className={styles.choiceArea}>
        {choiceLetters.map((choice) => {
            return (
                <section key={choice.romaji} className={styles.choiceArea__bubbleContainer}>
                    <img className={styles.choiceArea__bubbleBackground}
                         src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1676767326/Bubble_background_opudxy.gif"
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
