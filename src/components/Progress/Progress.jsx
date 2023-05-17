import React from 'react';
import styles from './Progress.module.css'
import Hexagon from "../Hexagon/index.js";
import rowLetters from "../Game/rowLetters.js";

function Progress({
                      choiceLetters,
                      questionRow,
                      tideLevel,
                      setTideLevel,
                      setIceCreamScoops,
                      iceCreamChoiceData,
                      iceCreamScoops
                  }) {
    const displayList = rowLetters[questionRow]

    return <section className={styles.progress}>
        {displayList?.map((letter) => {
            return (
                <Hexagon key={letter}
                         choiceLetter={letter}
                         setTideLevel={setTideLevel}
                         tideLevel={tideLevel}
                         setIceCreamScoops={setIceCreamScoops}
                         iceCreamChoiceData={iceCreamChoiceData}
                         iceCreamScoops={iceCreamScoops}
                />
            )
        })}

    </section>;
}

export default Progress;
