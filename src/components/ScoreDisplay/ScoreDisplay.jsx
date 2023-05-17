import React from 'react';
import styles from './ScoreDisplay.module.css';

function ScoreDisplay({score, iceCreamScoops, iceCreamChoiceData}) {

    let totalScore = 0;
    for (const key in score) {
        totalScore += score[key];
    }

    return <section className={styles.scoreContainer}>
        <p style={{marginBlockEnd: 50}}>Your score is:{' '}{totalScore}</p>
        <ul className={styles.iceCreamContainer}>
            <li>
                <img
                    className={styles.iceCreamCone}
                    src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1684298737/hiragana_game/icecream_scoops/Cone_ncndkh.png"/>
            </li>
            {iceCreamScoops.map((icecream, index) => {
                return (
                    <li key={index} className={styles.iceCreamListContainer} style={{zIndex: index + 1}}>
                        <img className={styles.iceCreamScoop} alt={`${icecream.name}`} src={icecream.imgURL}/>
                    </li>
                )
            })}
        </ul>

    </section>;
}

export default ScoreDisplay;
