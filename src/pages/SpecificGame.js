import React, { useContext } from 'react'
import { GameStore } from '../store/GameStore'

const SpecificGame = () => {
    const { game } = useContext(GameStore)
    return (
        <>
            <div className='flex justify-center items-center text-4xl font-bold mt-5'>
                {game.detail && <h1>{game.detail}</h1>}
            </div>
            <div className='md:grid grid-cols-2 mt-5 w-[90%] m-auto gap-4'>
                <div>
                    <img className='' src={game.background_image} alt={game.name} />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-2xl'>{game.name}</h1>
                    <p>{game.description_raw}</p>
                    {game.rating &&
                        <span>Rating: {game.rating}</span>
                    }
                    <div>
                        {game.esrb_rating &&
                            <span className=' bg-blue-200 p-2 rounded-full'>{game.esrb_rating && game.esrb_rating.name}</span>
                        }

                    </div>
                    <div className='sm:flex gap-2'>
                        {game.genres && <span>Genre(s): </span>}
                        {game.genres && game.genres.map(game => <span className='text-sm sm:text-base bg-blue-200 p-1 rounded-full'>{game.name}</span>)}
                    </div>
                    <div>{game.website &&
                        <span>Get here: <a className='text-blue-300' href={game.website}>{game.website}</a></span>
                    }

                    </div>

                </div>
            </div>
        </>

    )
}

export default SpecificGame