import React, { Component } from 'react'
export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul className='header'>
                <li><a className='active' href='#home'>Home</a></li>
                <li><a href='#news'>News</a></li>
                <li><a href='#about'>Abount</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
