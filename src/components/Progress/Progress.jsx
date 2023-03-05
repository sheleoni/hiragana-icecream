import React from 'react';
import styles from './Progress.module.css'
import Hexagon from "../Hexagon/index.js";

function Progress({choiceLetters}) {
    return <section className={styles.progress}>
        {choiceLetters.slice(0, 5).map((letter) => {
            return (
                <Hexagon key={letter.romaji} choiceLetter={letter.hiragana}/>
            )
        })}

    </section>;
}

export default Progress;
