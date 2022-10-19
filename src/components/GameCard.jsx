import React from 'react'
import { Link } from 'react-router-dom'

const GameCard = ({ name, img, rating, score, genreOne, genreTwo, game }) => {
    return (
        <div className='text-center rounded shadow-md'>
            <div>
                <img className='overflow-hidden w-full h-[200px] rounded-t' src={img} alt={name} />
            </div>
            <div>
                <p className=' font-bold mb-1'>{name}</p>
                <span className='rounded-full bg-blue-300 p-1'>{rating}</span>
                <div className='flex justify-center gap-2 mt-2'>
                    <span className='rounded-full bg-blue-300 p-1'>{genreOne}</span>
                    {genreTwo && <span className='rounded-full bg-blue-300 p-1'>{genreTwo}</span>}

                </div>
                <div>
                    <p>Rating: {score}</p>
                </div>
                <Link className='text-blue-300 font-bold' to='more-details' state={game} >More Details</Link>
            </div>

        </div>
    )
}

export default GameCard