import LevelFilterData from "../../contexts/LevelFilterData.js";
import rowLetters from "./rowLetters.js";


function filterCharacters(characterList) {
    let filteredCharacters = [];
    for (const characterSet in characterList) {
        const characterSetList = characterList[characterSet]
        for (const character in characterSetList) {
            if (characterSetList[character] === true) {
                filteredCharacters.push(character);
            }
        }
    }
    return filteredCharacters;
}

// Outputs array of characters with "true"
const filteredCharacters = filterCharacters(LevelFilterData)
console.log("Filtered characters:", filteredCharacters);

let questionPool = [];
filteredCharacters.map((row) => {
    // Output array of the selected row
    const lettersInRow = rowLetters[`${row}行`];
    // Add letters in the row to question pool as a 1-D array
    lettersInRow.map((letter) => {
        questionPool.push(letter)
    })
});

export default questionPool;

