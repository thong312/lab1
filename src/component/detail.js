import React from 'react';
import { Films } from './share/ListOfFilms';
import { useParams } from 'react-router-dom';
import { Icon } from 'react-materialize';
import ModelCase from './ModelCase';
import { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme3, theme } = useContext(ThemeContext);
  const { id } = useParams();
  const movie = Films.find((obj) => obj.id == id);

  return (
    <div className='container' >
      <div className='card' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <div className='movie-title' style={{ backgroundColor: theme.backgroundColor, color: theme.color }} ><h3>{movie.title}</h3></div>
        <div className='card-image'>
          <img className='pict' src={`../${movie.img}`} alt='' />
          {isOpen && <ModelCase setIsOpen={setIsOpen} movie={movie} />}
          <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
            <Icon>ondemand_video</Icon>
          </a>
        </div>
        <div className='card-content-detail' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>

          <h5>Premiere year: {movie.Year}</h5>
          <h5>Nation: {movie.Nation}</h5>
          <div className='Summary'><h5>Summary: {movie.summ}</h5></div>
        </div>
      </div>
    </div>
  );
}
