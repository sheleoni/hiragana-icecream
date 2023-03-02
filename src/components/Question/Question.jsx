import React from 'react';
import styles from './Question.module.css'

function Question({question, setQuestion, answer, getRandomLetter}) {

    // const displayImage = () => {
    //     return <img className={styles.questionImage}
    //                 src={question.hiraganaImgURL}
    //                 alt={question.hiragana}/>
    // }


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
    const getNextQuestion = () => {
        console.log("getting next question!")
        const newQuestion = getRandomLetter();
        setQuestion({
            hiragana: newQuestion.hiragana,
            hiraganaImgURL: newQuestion.hiraganaImgURL,
            romaji: newQuestion.romaji
        });
    };


    return (
        <section className={styles.question}
                 onClick={() => {
                     getNextQuestion()
                 }}>
            current answer is : {question.hiragana}
            {questionImage()}
        </section>
    );
}

export default Question;
