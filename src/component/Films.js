import React from 'react'
import { Films } from './share/ListOfFilms'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
export default function Film() {
    const [films, setFilms] = useState({})
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (

        <div className='container' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div className='title'><h1>LIST OF FILMS</h1>
                <div className='switch'>
                    <a className='switch-mode' href='#' onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none'
                        }} data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                    </a>
                </div></div>
            {Films.map((films) => (
                <div className='column' key={films.id}>
                    <div className='card'>
                        <p className='but'><h3 onClick={() => { setFilms(films) }}><a href='#popup1' id='openPopUp'> <img className='pic' src={films.img} alt='' /></a></h3></p>
                        <Link to={`detail/${films.id}`}>
                            <p><button>Detail</button></p>
                        </Link>
                    </div>
                </div>
            ))}
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={films.img} alt='' />
                    <h2>{films.title}</h2>
                    <h2>{films.Nation}</h2>
                    <h2>{films.Year}</h2>
                    <a className='close' href='#' >X</a>
                </div>
            </div>



        </div>

    )
}
