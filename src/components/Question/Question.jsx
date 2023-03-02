import React from 'react';
import styles from './Question.module.css'

function Question({question, setQuestion, answer, getRandomLetter}) {

    // const displayImage = () => {
    //     return <img className={styles.questionImage}
    //                 src={question.hiraganaImgURL}
    //                 alt={question.hiragana}/>
    // }


    const imgPath = question.hiraganaImgURL;

    fetch(imgPath)
        .then(response => {
            if (response.ok) {
                console.log('Image is available online');
            } else {
                console.error('Image is not available online');
            }
        })
        .catch(error => {
            console.error('Error checking image:', error);
        });
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

            <img className={styles.questionImage}
                 src={question.hiraganaImgURL}
                 alt={question.hiragana}/>

            current answer is : {question.hiragana}
        </section>
    );
}

export default Question;
