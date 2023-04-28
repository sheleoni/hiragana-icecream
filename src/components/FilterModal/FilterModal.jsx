import React from 'react';
import styles from './FilterModal.module.css'
import filterModalData from './fitlerModalData'
import {Dialog, Tab} from "@headlessui/react";
import ErrorBoundary from "../ErrorBoundary/index.js";

function FilterModal({optionGroup, modalIsOpen, setModalIsOpen}) {

    const HIRAGANA_MODE = 'hiragana';
    const KATAKANA_MODE = 'katakana';

    const checkBoxList = {
        hiragana: [
            'あ',
            'か',
            'さ',
            'た',
            'な',
            'は',
            'ま',
            'や',
            'ら',
            'わ',
            'が',
            'ざ',
            'だ',
            'ば',
            'ぱ'
        ],
        katakana: [
            'ア',
            'カ',
            'サ',
            'タ',
            'ナ',
            'ハ',
            'マ',
            'ヤ',
            'ラ',
            'ワ',
            'ガ',
            'ザ',
            'ダ',
            'バ',
            'パ'
        ]

    }


    const [characterSet, setCharacterSet] = React.useState(HIRAGANA_MODE);

    console.log(filterModalData);

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
                    <Dialog.Description>

                        Toggle between Hiragana and Katakana
                        Current set: {characterSet}
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

                        <ol className={styles.letterCheckbox}>
                            {checkBoxList[characterSet].map((letter) => {

                                return (
                                    <li key={letter} className={styles.filterItem}>
                                        <input type="checkbox" id={letter}/>
                                        <label htmlFor={letter}>{letter}行</label>
                                    </li>

                                )
                            })}
                            <li className={styles.filterItem}>
                                <input type="checkbox" id="select-all"/>
                                <label htmlFor="select-all">Select All</label>
                            </li>
                        </ol>
                        {/*    switch here */}
                    </Dialog.Description>


                    {/*{filterModalData.map((letter) => {*/}
                    {/*    return (*/}
                    {/*        <li key={letter.character}>*/}
                    {/*            <input type="checkbox"/>{letter.character}*/}
                    {/*        </li>*/}
                    {/*    )*/}
                    {/*})}*/}
                    <button onClick={() => setModalIsOpen(false)}>Cancel</button>
                    <button onClick={() => setModalIsOpen(false)}>Confirm</button>
                </Dialog.Panel>
            </Dialog>
        </>
    );
}

export default FilterModal;
