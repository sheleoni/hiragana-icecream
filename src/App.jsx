import {useState} from 'react'
import './App.css'
import Game from "./components/Game/index.js";

function App() {

    const choiceLetters = [
        {
            hiragana: "あ",
            romaji: "a"
        }, {
            hiragana: "い",
            romaji: "i"
        }, {
            hiragana: "う",
            romaji: "u"
        }, {
            hiragana: "え",
            romaji: "e"
        }, {
            hiragana: "お",
            romaji: "o"
        }];

    return (
        <main className="App">
            <Game/>
        </main>
    )
}

export default App
