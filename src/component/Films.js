import React, { Component } from 'react'
import { Films } from './share/ListOfFilms'
export default class Film extends Component {
    render() {
        return (
            <div className='container'>
                {Films.map((films) => (
                    <div className='column'> 
                        <div className='card'>
                            <img src={films.img} alt='' />
                            <div className='func'>
                                <p className='title'>{films.title}</p>
                                <p className='year'>{films.Year}</p>
                                <p className='nation'>{films.Nation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
