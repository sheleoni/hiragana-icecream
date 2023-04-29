import React from 'react';
import FilterModal from "../FilterModal/index.js";

function QuestionFilter({optionGroup}) {

    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    console.log("showModal is currently:");
    console.log(modalIsOpen);

    function toggleModal(showModal) {
        return setModalIsOpen(!showModal);
    }

    return (
        <>
            <button onClick={() => toggleModal(modalIsOpen)}>
                ⏳
            </button>
            {modalIsOpen &&
                <FilterModal optionGroup={optionGroup} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>}
        </>
    );
}

export default QuestionFilter;
