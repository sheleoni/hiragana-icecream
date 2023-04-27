import React from 'react';
import FilterModal from "../FilterModal/index.js";

function QuestionFilter({optionGroup}) {

    const [showModal, setShowModal] = React.useState(false);

    console.log("showModal is currently:");
    console.log(showModal);

    function toggleModal(showModal) {
        return setShowModal(!showModal);
    }

    return (
        <>
            <button onClick={() => toggleModal(showModal)}>
                ⏳
            </button>
            {showModal && <FilterModal optionGroup={optionGroup} setShowModal={setShowModal}/>}
        </>
    );
}

export default QuestionFilter;
