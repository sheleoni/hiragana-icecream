import {useState} from 'react'
import './App.css'
import Question from "./components/Question/index.js";
import Choices from "./components/Choices/index.js";
import Progress from "./components/Progress/index.js";
import Score from "./components/Score/index.js";

function App() {
    const [score, setScore] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('あ');
    const [currentGuess, setCurrentGuess] = useState('')


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
            <section className="gameInterface">
                <Score/>
                <Question/>
                <Choices choiceLetters={choiceLetters}/>
                <Progress choiceLetters={choiceLetters}/>
            </section>
        </main>
    )
}

export default App
