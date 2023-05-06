import React from 'react';
import styles from './Progress.module.css'
import Hexagon from "../Hexagon/index.js";
import rowLetters from "../Game/rowLetters.js";

function Progress({choiceLetters, questionRow}) {
    const displayList = rowLetters[questionRow]
    console.log(questionRow, 'questionRow');
    console.log(displayList, 'this is the displayList')

    return <section className={styles.progress}>
        {questionRow}
        {displayList?.map((letter) => {
            return (
                <Hexagon key={letter} choiceLetter={letter}/>
            )
        })}

    </section>;
}

export default Progress;
