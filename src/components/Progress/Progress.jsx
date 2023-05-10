import React from 'react';
import styles from './Progress.module.css'
import Hexagon from "../Hexagon/index.js";
import rowLetters from "../Game/rowLetters.js";

function Progress({choiceLetters, questionRow, tideLevel}) {
    const displayList = rowLetters[questionRow]

    return <section className={styles.progress}>
        {displayList?.map((letter) => {
            return (
                <Hexagon key={letter} choiceLetter={letter} tideLevel={tideLevel}/>
            )
        })}

    </section>;
}

export default Progress;
