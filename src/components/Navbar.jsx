import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GameStore } from '../store/GameStore'

const Navbar = () => {
    const { setGame } = useContext(GameStore)
    const [searchItem, setSearchItem] = useState('')
    const navigate = useNavigate()
    const API_KEY = process.env.REACT_APP_API_KEY

    const onSubmit = (e) => {
        e.preventDefault()
        let slug = searchItem.split(' ').join('-').toLowerCase()
        fetch(`https://rawg.io/api/games/${slug}?key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setGame(data)
            })
        setSearchItem('')
        navigate('/game')

    }
    return (
        <nav className='md:flex bg-blue-300 sm:h-[70px] items-center'>
            <div className='sm:flex md:justify-between w-[90%] m-auto items-center '>
                <div>
                    <Link to='/'>
                        <span className='font-bold text-2xl'> GamingIsLife</span>
                    </Link>

                </div>
                <div>
                    <form onSubmit={onSubmit}>
                        <input className='p-2 border-transparent rounded-full' type="text" placeholder='Search Game' value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
                        <button className='p-2 border-2 border-solid border-white rounded-full m-2' type='submit'>Search</button>
                    </form>
                </div>

            </div>

        </nav>
    )
}

export default Navbar