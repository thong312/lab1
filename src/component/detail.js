import React from 'react';
import { Films } from './share/ListOfFilms';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const movie = Films.find((obj) => obj.id == id);

  return (
    <div className='container'>
      <div className='card'>
        <div className='badge white black-text'>{movie.title}</div>
        <div className='card-image'>
          <img className='pict' src={`../${movie.img}`} alt='' />
        </div>
        <div className='card-content'>
          <h6>{movie.Year}</h6>
          <h6>{movie.Nation}</h6>
        </div>
      </div>
    </div>
  );
}
