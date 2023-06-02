import React from 'react'
import { Films } from './share/ListOfFilms'
import { useParams } from 'react-router-dom'
export default function Detail() {
  const userName = useParams();
  const Movie = Films.find(obj => {
    return obj.id == userName.id;
  });
  return (
    <div className='container-detail'>
      <div className='product-card'>
        <div className='badge'>{Movie.title}</div>
        <div className='product-tumb'>
          <img className='pict' src={`../${Movie.img}`} alt=''/>
        </div>
        <div className='product-details'>
          <h3>{Movie.Year}</h3>
          <h3>{Movie.Nation}</h3>
        </div>
      </div>
      </div>
  )
}
