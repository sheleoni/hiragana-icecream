import React from 'react';
import styles from './Hexagon.module.css';

function Hexagon({choiceLetter}) {
    return (
        <>
            <span className={styles.hexagonWrapper}>
                <span className={styles.letter}>
                    {choiceLetter}
                </span>
                {/* adds outline on topmost layer */}
                <img
                    className={styles.hexagonOutline}
                    src="https://res.cloudinary.com/dd1dw34dc/image/upload/Hexagonal_aiueo_1_oqkh0a.png"
                />
                <div className={styles.hexagonBackgroundContainer}>
                    {/* adds beige background */}
                    <img
                        className={styles.hexagonBackground}
                        src="https://res.cloudinary.com/dd1dw34dc/image/upload/Hexagonal_aiueo_2_bmkrho.png"
                    />
                    <div className={styles.mask1}>
                        <div className={styles.waveWrapper}>
                            <img
                                className={styles.movingWave}
                                src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1676733062/wave_red_big_qtvsld.png"
                            />
                            <img
                                className={styles.movingWave}
                                src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1676733062/wave_red_big_qtvsld.png"
                            />
                            <img
                                className={styles.movingWave}
                                src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1676733062/wave_red_big_qtvsld.png"
                            />
                        </div>
                    </div>
                </div>
            </span>

        </>
    );
}

export default Hexagon;
