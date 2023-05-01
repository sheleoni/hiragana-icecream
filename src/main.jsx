import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {LevelFilterProvider} from "./contexts/LevelFilterContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LevelFilterProvider>
            <App/>
        </LevelFilterProvider>
    </React.StrictMode>,
)
