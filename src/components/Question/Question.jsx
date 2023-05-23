import React from 'react';
import styles from './Question.module.css';

function Question({question, sampleQuestion, getRandomQuestion}) {
    const imgPath = null;

    const questionImage = () => {
        return (
            <p className={styles.questionWord}>
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
