import React from 'react';
import styles from './Question.module.css';

function Question({questionNumber, question, sampleQuestion, getRandomQuestion}) {
    const imgPath = null;

    const questionImage = () => {
        return (
            <p key={questionNumber} className={`${styles.questionWord} ${styles.animation}`}>
                {sampleQuestion}
            </p>
        );
    }
    return (
        <section
            className={styles.question}
            onClick={getRandomQuestion}
        >
            {questionImage()}
        </section>
    );
}

export default Question;
