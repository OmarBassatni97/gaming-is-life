import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import SpecificGame from "./pages/SpecificGame";
import { GameProvider } from "./store/GameStore";
import MoreDetails from "./pages/MoreDetails";

function App() {
  return (
    <GameProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/game" element={<SpecificGame />} />
        <Route path="/more-details" element={<MoreDetails />} />
      </Routes>
    </GameProvider>
  )
}

export default App;