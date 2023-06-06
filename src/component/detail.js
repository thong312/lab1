import React from 'react';
import { Films } from './share/ListOfFilms';
import { useParams } from 'react-router-dom';
import { Icon } from 'react-materialize';
import ModelCase from './ModelCase';
import { useState } from 'react';
export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();
  const movie = Films.find((obj) => obj.id == id);

  return (
    <div className='container'>
      <div className='card'>
        <div className='badge white black-text'>{movie.title}</div>
        <div className='card-image'>
          <img className='pict' src={`../${movie.img}`} alt='' />
          {isOpen && <ModelCase setIsOpen={setIsOpen} movie={movie} />}
          <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
            <Icon>ondemand_video</Icon>
          </a>
        </div>
        <div className='card-content-detail'>

          <h5>Premiere year: {movie.Year}</h5>
          <h5>Nation: {movie.Nation}</h5>
        </div>
      </div>
    </div>
  );
}
