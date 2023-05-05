import React from 'react';
import styles from './Question.module.css'
import {LevelFilterContext} from "../../contexts/LevelFilterContext.jsx";
import questionPool from "../Game/questionPool.js";

function Question({question, answer, updateQuestion, choiceData}) {

    const imgPath = question.hiraganaImgURL;
    const {levelFilter, setLevelFilter} = React.useContext(LevelFilterContext);

    console.log('Level Filter from Question component:')
    console.log(levelFilter)

    console.log(questionPool, 'the questionPool from Question.jsx')
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
            <p>current answer is : {question.hiragana}</p>
            <br/>question pool size: {questionPool.length}
            {questionImage()}
        </section>
    );
}

export default Question;
