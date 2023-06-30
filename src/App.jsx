import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Game from "./components/Game/index.js";
import Collection from "./components/Collection/index.js";
function App() {


    return (
        <main className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Game />} />
                    <Route path="/collection" element={<Collection />} />
                </Routes>
            </Router>
        </main>
    )
}

export default App
