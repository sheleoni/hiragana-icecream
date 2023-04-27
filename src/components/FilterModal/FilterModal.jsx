import React from 'react';
import styles from './FilterModal.module.css'
import filterModalData from './fitlerModalData'

function FilterModal({optionGroup, setShowModal}) {
    //
    // console.log(optionGroup)
    //
    // // const rowResults = optionGroup.map((row) => optionGroup[row])
    // // console.log(rowResults);
    //
    // console.log(Array.isArray(optionGroup))

    console.log(filterModalData);

    return (
        <>
            <section className={styles.background}>
                <button className={styles.closeButton} onClick={() => setShowModal(false)}>❌</button>
                <h2>Mode: あ
                    ア</h2>
                Checkboxes:
                {filterModalData.map((letter) => {
                    return (
                        <li key={letter.character}>
                            <input type="checkbox"/>{letter.character}
                        </li>
                    )
                })}
            </section>
        </>
    );
}

export default FilterModal;
