import React from 'react';
import styles from './FilterModal.module.css'
import {Dialog, Tab} from "@headlessui/react";
import ErrorBoundary from "../ErrorBoundary/index.js";
import levelFilter from "./selectionState";
import {LevelFilterContext} from "../../contexts/LevelFilterContext.jsx";

function FilterModal({optionGroup, modalIsOpen, setModalIsOpen}) {

    const HIRAGANA_MODE = 'hiragana';
    const KATAKANA_MODE = 'katakana';

    const {
        levelFilter,
        setLevelFilter
    } = React.useContext(LevelFilterContext);


    const hiraganaChars = Object.keys(levelFilter.hiragana);
    const katakanaChars = Object.keys(levelFilter.katakana);

    const [characterSet, setCharacterSet] = React.useState(HIRAGANA_MODE);
    const capitalizedCharacterSet = characterSet.charAt(0).toUpperCase() + characterSet.slice(1);
    const isCurrentCharacterSetAllSelected =
        (characterSet === HIRAGANA_MODE ? hiraganaChars : katakanaChars)
            .every((char) => levelFilter[characterSet][char]);

    const handleSelectAll = (checked) => {
        const updatedCharacters = {
            ...levelFilter,
            [characterSet]: {
                ...levelFilter[characterSet],
            }
        };

        (characterSet === HIRAGANA_MODE ? hiraganaChars : katakanaChars)
            .forEach((char) => {
                updatedCharacters[characterSet][char] = checked;
            });

        setLevelFilter(updatedCharacters);
    };


    const selectedCharsHiragana = Object.keys(levelFilter[HIRAGANA_MODE])
        .filter(char => levelFilter[HIRAGANA_MODE][char]);
    const selectedCharsKatakana = Object.keys(levelFilter[KATAKANA_MODE])
        .filter(char => levelFilter[KATAKANA_MODE][char]);
    const selectedCharsString = [...selectedCharsHiragana, ...selectedCharsKatakana].join(',');

    return (
        <>

            <Dialog
                open={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                className={styles.wrapper}>
                <div
                    className={styles.backdrop}
                />
                <Dialog.Panel className={styles.panel}>
                    <Dialog.Title>Choose Your Game Mode</Dialog.Title>
                    <Dialog.Description as='div'>

                        <p>Selected groups:</p>
                        <p className={styles.selectedCharactersDisplay}>{selectedCharsString}</p>


                        <Tab.Group onChange={(index) => {
                            console.log('Changed selected tab to:', index)
                            if (index === 0) {
                                setCharacterSet(HIRAGANA_MODE)
                            }
                            if (index === 1) {
                                setCharacterSet(KATAKANA_MODE)
                            }
                        }}>
                            <Tab.List>
                                <Tab className={styles.gameModeOption}>あ</Tab>
                                <Tab className={styles.gameModeOption}>ア</Tab>
                            </Tab.List>
                        </Tab.Group>

                        <>
                            <ol className={styles.letterCheckbox}>
                                {(characterSet === HIRAGANA_MODE ? hiraganaChars : katakanaChars).map((letter) => {
                                    return (
                                        <li key={letter} className={styles.filterItem}>
                                            <input
                                                type="checkbox"
                                                checked={levelFilter[characterSet][letter] === true}
                                                onChange={(event) => {
                                                    setLevelFilter(
                                                        {
                                                            ...levelFilter,
                                                            [characterSet]: {
                                                                ...levelFilter[characterSet],
                                                                [letter]: event.target.checked
                                                            }
                                                        }
                                                    )
                                                    console.log("These are the selected Characters");
                                                    console.log(levelFilter);
                                                    event.target.checked;
                                                }
                                                }
                                                id={letter}/>
                                            <label htmlFor={letter}>{letter}行</label>
                                        </li>

                                    )
                                })}
                                <li className={`${styles.filterItem} ${styles.selectAllCheckbox}`}>
                                    <input
                                        type="checkbox"
                                        id={`select-all-${characterSet}`}
                                        checked={(characterSet === HIRAGANA_MODE ? hiraganaChars : katakanaChars)
                                            .every(char => levelFilter[characterSet][char])}
                                        onChange={event => handleSelectAll(event.target.checked)}
                                    />
                                    <label htmlFor={`select-all-${characterSet}`}>
                                        {isCurrentCharacterSetAllSelected ?
                                            `Clear All ${capitalizedCharacterSet}` :
                                            `Select All ${capitalizedCharacterSet}`}

                                    </label>
                                </li>
                            </ol>
                        </>
                    </Dialog.Description>


                    <button onClick={() => {
                        setModalIsOpen(false)
                    }}>
                        Cancel
                    </button>
                    <button onClick={() => {
                        setModalIsOpen(false)
                    }}>
                        Confirm
                    </button>
                </Dialog.Panel>
            </Dialog>
        </>
    );
}

export default FilterModal;
