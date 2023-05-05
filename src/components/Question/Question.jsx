import React from 'react';
import styles from './Question.module.css';
import {LevelFilterContext} from "../../contexts/LevelFilterContext.jsx";
import rowLetters from "../Game/rowLetters.js";

function Question({question, answer, updateQuestion, choiceData}) {
    const imgPath = question.hiraganaImgURL;
    const {levelFilter} = React.useContext(LevelFilterContext);
    const [questionPool, setQuestionPool] = React.useState([]);

    const questionImage = () => {
        if (imgPath) {
            return (
                <img className={styles.questionImage}
                     src={question.hiraganaImgURL}
                     alt={question.hiragana}
                />
            );
        } else {
            return (
                <p className={styles.questionWord}>
                    {question.hiragana}
                </p>
            );
        }
    }

    React.useEffect(() => {
        const filterCharacters = (characterList) => {
            let filteredCharacters = [];
            for (const characterSet in characterList) {
                const characterSetList = characterList[characterSet];
                for (const character in characterSetList) {
                    if (characterSetList[character] === true) {
                        filteredCharacters.push(character);
                    }
                }
            }
            return filteredCharacters;
        }

        const filteredCharacters = filterCharacters(levelFilter);
        let updatedQuestionPool = [];
        filteredCharacters.forEach((row) => {
            const lettersInRow = rowLetters[`${row}行`];
            updatedQuestionPool = updatedQuestionPool.concat(lettersInRow);
        });

        setQuestionPool(updatedQuestionPool);
    }, [levelFilter]);

    return (
        <section
            className={styles.question}
            onClick={() => {
                updateQuestion(choiceData);
            }}
        >
            {questionImage()}
        </section>
    );
}

export default Question;
