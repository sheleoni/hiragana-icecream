import React from "react";

const LevelFilterData = {
    hiragana: {
        // Set あ行 to appear as the initial question pool if use does not select any character
        'あ': true,
        'か': false,
        'さ': false,
        'た': false,
        'な': false,
        'は': false,
        'ま': false,
        'や': false,
        'ら': false,
        'わ': false,
        'が': false,
        'ざ': false,
        'だ': false,
        'ば': false,
        'ぱ': false
    },
    katakana: {
        'ア': false,
        'カ': false,
        'サ': false,
        'タ': false,
        'ナ': false,
        'ハ': false,
        'マ': false,
        'ヤ': false,
        'ラ': false,
        'ワ': false,
        'ガ': false,
        'ザ': false,
        'ダ': false,
        'バ': false,
        'パ': false
    }
};
export default LevelFilterData;