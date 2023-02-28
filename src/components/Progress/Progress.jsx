import React from 'react';
import styles from './Progress.module.css'
import Hexagon from "../Hexagon/index.js";

function Progress({choiceLetters}) {
    return <section className={styles.progress}>
        {choiceLetters.map((letter) => {
            return (
                <>
                    <Hexagon/>
                </>
            )
        })}

    </section>;
}

export default Progress;
