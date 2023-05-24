import React from 'react';
import styles from './ScoreDisplay.module.css';
// import {Tooltip, TooltipTrigger, TooltipContent, TooltipArrow} from '@radix-ui/react-tooltip';
import * as Tooltip from '@radix-ui/react-tooltip';

function ScoreDisplay({score, iceCreamScoops, iceCreamChoiceData}) {

    let totalScore = 0;
    for (const key in score) {
        totalScore += score[key];
    }

    return <section className={styles.scoreContainer}>
        <p style={{marginBlockEnd: 50}}>Your score is:{' '}{totalScore}</p>
        <ul className={styles.iceCreamContainer}>
            <li>

                <Tooltip.Provider delayDuration={1500}>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                            {/* Icecream cone*/}
                            <img
                                className={styles.iceCreamCone}
                                src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1684298737/hiragana_game/icecream_scoops/Cone_ncndkh.png"/>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <Tooltip.Content sideOffset={0} className={styles.iceCreamHoverPanel}>
                                コーンだよ。
                                <Tooltip.Arrow/>
                            </Tooltip.Content>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                </Tooltip.Provider>

            </li>
            {iceCreamScoops.map((icecream, index) => {
                return (
                    <>
                        <li key={index} className={styles.iceCreamListContainer} style={{zIndex: index + 1}}>
                            <Tooltip.Provider delayDuration={30}>
                                <Tooltip.Root>
                                    <Tooltip.Trigger asChild>
                                        {/*image of scoop*/}
                                        {/*TODO: confirm if <button> tag is recommended over <img> tag in radix*/}
                                        <img className={styles.iceCreamScoop} alt={`${icecream.name}`}
                                             src={icecream.imgURL}/>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content sideOffset={-15} className={styles.iceCreamHoverPanel}>
                                            {icecream.name}
                                            <Tooltip.Arrow/>
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip.Root>
                            </Tooltip.Provider>
                        </li>
                    </>
                )
            })}
        </ul>

    </section>;
}

export default ScoreDisplay;
