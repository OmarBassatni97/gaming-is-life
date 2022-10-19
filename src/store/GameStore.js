import { createContext, useState } from "react";

const GameStore = createContext()

const GameProvider = ({ children }) => {
    const [game, setGame] = useState({})
    return (
        <GameStore.Provider value={{ game, setGame }}>{children}</GameStore.Provider>
    )
}

export { GameStore, GameProvider }