import React from 'react';

function Progress({choiceLetters}) {
    return <section className="progress">
        {choiceLetters.map((letter) => {
            return (
                <button key={letter.hiragana} value={letter.hiragana}
                        onClick={
                            (event) => console.log(event.target.value)
                        }>
                    {letter.hiragana}
                </button>
            )
        })}

    </section>;
}

export default Progress;
