import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import LevelFilterData from "./LevelFilterData.js";

export const LevelFilterContext = React.createContext(LevelFilterData);

export const LevelFilterProvider = ({children}) => {
    const [levelFilter, setLevelFilter] = React.useState(LevelFilterData)

    const value = {
        levelFilter,
        setLevelFilter
    }

    return (
        <LevelFilterContext.Provider value={value}>
            {children}
        </LevelFilterContext.Provider>
    )

}
