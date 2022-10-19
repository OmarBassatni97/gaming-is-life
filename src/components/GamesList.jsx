import { useEffect, useState } from "react";
import GameCard from "./GameCard";

const GamesList = () => {
  const [games, setGames] = useState([])
  const API_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&platforms=18,1,7`)
      const data = await response.json()
      setGames(data.results)
    }
    fetchData()
  }, [API_KEY])

  return (
    <div className="mt-24 ml-3 mr-4">
      <h1 className="font-bold mb-4 text-lg">Popular Games</h1>
      <div className="md:grid grid-cols-4 gap-4">
        {games
          && games.map((game, i) => {
            return (
              <div key={i} className='mb-4'>
                <GameCard
                  name={game.name}
                  img={game.background_image}
                  rating={game.esrb_rating.name}
                  score={game.rating}
                  genreOne={game.genres[0].name}
                  genreTwo={game.genres[1] && game.genres[1].name}
                  game={game}

                />
              </div>
            )
          })}
      </div>
    </div>

  );
}

export default GamesList