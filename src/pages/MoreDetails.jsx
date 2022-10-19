import React from 'react'
import { useLocation } from 'react-router-dom'

const MoreDetails = () => {
    const location = useLocation()
    const game = location.state
    return (
        <>
            <div className='md:grid grid-cols-2 mt-5 w-[90%] m-auto gap-4'>
                <div>
                    <img className='' src={game.background_image} alt={game.name} />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-2xl'>{game.name}</h1>
                    <p>Released: {game.released}</p>
                    {game.rating &&
                        <span>Rating: {game.rating}</span>
                    }
                    <div>
                        {game.esrb_rating &&
                            <span className=' bg-blue-200 p-2 rounded-full'>{game.esrb_rating && game.esrb_rating.name}</span>
                        }

                    </div>
                    <div className='sm:flex gap-2 items-center'>
                        {game.genres && <span>Genre(s): </span>}
                        {game.genres && game.genres.map(game => <span className='text-sm sm:text-base bg-blue-200 p-1 rounded-full'>{game.name}</span>)}
                    </div>
                    <div className='sm:flex gap-2 items-center'>
                        <span>Playable On: </span>
                        {game.platforms && game.platforms.map((game, i) => <span className='m-1'>{game.platform.name},</span>)}
                    </div>
                </div>
            </div>
            <div className='w-[90%] m-auto mt-4'>
                <h1 className='mb-4 text-2xl font-bold'>More Pictures</h1>
                <div className='sm:grid grid-cols-3 gap-4 '>

                    {game.short_screenshots && game.short_screenshots.map((game, i) => <img className='sm:mb-0 mb-2' key={i} src={game.image} alt='screenshots' />)}
                </div>
            </div>

        </>


    )
}

export default MoreDetails