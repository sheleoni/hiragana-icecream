import React from 'react';
import styles from './Question.module.css'

const questionImages = [
    {
        src: "src/assets/あ_stroke.gif",
        letter: "あ"
    }, {
        src: "src/assets/あ_stroke.gif",
        letter: "あ"
    }, {
        src: "src/assets/あ_stroke.gif",
        letter: "あ"
    }, {
        src: "src/assets/あ_stroke.gif",
        letter: "あ"
    }, {
        src: "src/assets/あ_stroke.gif",
        letter: "あ"
    }
];

function Question({answer}) {
    return (
        <section className={styles.question}>
            <img className={styles.questionImage}
                 src="https://res.cloudinary.com/dd1dw34dc/image/upload/v1676767333/hiragana_game/%E3%81%82_stroke_hgeopi.gif"
                 alt="あ"/>
            current answer is : {answer}
        </section>
    );
}

export default Question;
