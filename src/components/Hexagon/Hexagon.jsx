import React from 'react';
import styles from './Hexagon.module.css';

function Hexagon({choiceLetter, tideLevel}) {
    const tideLevelToPixels = (tideLevel) => {
        /* Tide levels corresponding to CSS margin values:
        *
        * tideLevel 0 (barely visible crests) -> 120px
        * tideLevel 1 -> 96px
        * tideLevel 2 -> 72px
        * tideLevel 3 -> 48px
        * tideLevel 4 -> 24px
        * tideLevel 5 (fully filled) -> 10px
        *
        * */
        switch (tideLevel) {
            case 0:
                return 120;
            case 1:
                return 96;
            case 2:
                return 72;
            case 3:
                return 48;
            case 4:
                return 24;
            case 5:
                return 10;
        }
    }
    const isClickable = tideLevel[choiceLetter] >= 5;

    const Tag = (isClickable ? 'button' : 'img');

    const handleClickHexagon = () => {
        console.log("clicked hexagonie!")
        console.log(choiceLetter, 'your choice letter');
        console.log(`your random icecream's name is: ${randomIceCream}`)
    }

    const randomIceCream = () => {
        // TODO: add randomID (probably by crypto.UUID)
        const iceCreamChoices = {
            'あ': [{
                name: "あめ",
                accent: "↑↓",
                imgURL: ""
            }, {}, {}],
            'い': [{}, {}, {}],
            'う': [{}, {}, {}],
            'え': [{}, {}, {}],
            'お': [{}, {}, {}],
        }
        return randomIceCream;
    }

    const tideMarginPixels = tideLevelToPixels(tideLevel[choiceLetter]);
    return (
        <>
            <span className={styles.hexagonWrapper}>
                <span className={styles.letter}>
                    {choiceLetter}
                    {/*{isClickable ? (<button className={styles.starButton} onClick={() => {*/}
                    {/*        console.log("clicked star!")*/}
                    {/*    }}>⭐</button>*/}
                    {/*) : ''}*/}
                </span>
                {/* adds outline on topmost layer */}
                <img
                    className={styles.hexagonOutline}
                    src="https://res.cloudinary.com/dd1dw34dc/image/upload/hiragana_game/Hexagonal_aiueo_1_oqkh0a.png"
                />
                <div className={styles.hexagonBackgroundContainer}>
                    {/* adds beige background */}
                    {/*TODO: maybe change this img tag to button*/}
                    <Tag
                        className={`${styles.hexagonBackground} ${isClickable ? styles.activeHexagon : ''}`}
                        src="https://res.cloudinary.com/dd1dw34dc/image/upload/hiragana_game/Hexagonal_aiueo_2_bmkrho.png"
                        onClick={isClickable ? handleClickHexagon : null}
                    />
                    <div className={styles.mask1}>
                        <div className={styles.waveWrapper}>
                            {/* continuous wave images */}
                            <img
                                className={styles.movingWave}
                                style={{marginBlockStart: `${tideMarginPixels}px`}}
                                src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1683549981/wave_red_big_taller1_j1nqs4.png"
                            />
                            <img
                                className={styles.movingWave}
                                style={{marginBlockStart: `${tideMarginPixels}px`}}
                                src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1683549981/wave_red_big_taller1_j1nqs4.png"
                            />
                            <img
                                className={styles.movingWave}
                                style={{marginBlockStart: `${tideMarginPixels}px`}}
                                src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1683549981/wave_red_big_taller1_j1nqs4.png"
                            />
                        </div>
                    </div>
                </div>
            </span>


        </>
    );
}

export default Hexagon;
