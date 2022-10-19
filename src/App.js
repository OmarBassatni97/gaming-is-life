import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
import SpecificGame from "./pages/SpecificGame";
import { GameProvider } from "./store/GameStore";
import MoreDetails from "./pages/MoreDetails";
import { Helmet } from "react-helmet";

function App() {
  return (
    <GameProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gaming is Life</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Gaming App" />
      </Helmet>
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