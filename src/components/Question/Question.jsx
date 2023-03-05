import React from 'react';
import styles from './Question.module.css'

function Question({question, answer, updateQuestion, choiceData}) {

    const imgPath = question.hiraganaImgURL;

    const questionImage = () => {
        if (imgPath) {
            return (
                <img className={styles.questionImage}
                     src={question.hiraganaImgURL}
                     alt={question.hiragana}/>
            )
        } else {
            return (
                <p className={styles.questionWord}>
                    {question.hiragana}
                </p>);
        }

    }


    return (
        <section className={styles.question}
                 onClick={() => {
                     updateQuestion(choiceData)
                 }}>
            current answer is : {question.hiragana}
            {questionImage()}
        </section>
    );
}

export default Question;
