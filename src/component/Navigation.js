import {React, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize'
import { ThemeContext } from './ThemeContext';
import { Button } from 'react-materialize';
export default function Navigation() {
  const { theme, toggle, dark, theme1 } = useContext(ThemeContext);
  return (
  <Navbar className='menu'
    alignLinks="right"
    brand={<span className='brand-logo'>Films Card</span>}
    id="mobile-nav"
    menuIcon={<Icon>menu</Icon>}
    style={{ backgroundColor: theme1.backgroundColor, color: theme1.color }}
    >
      
    <ul>
    
      <li><Link to='/'><Icon left>home</Icon>Home</Link>
      </li>
      <li to='/about'><Link to='/about'><Icon left>info_outline</Icon>About Us</Link>
      </li>
      <li to='/news'><Link to='/news'><Icon left>dvr</Icon>News</Link>
      </li>
      <li to='/contact'><Link to='/contact'><Icon left>contacts</Icon>Contact</Link>
      </li>
      <li><div className='chage-background-color'>
        <div className="switch">
          <a
            className="switch-mode"
            href="#"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none',
            }}
            data-testid="toggle-theme-btn"
          >
          </a>
        </div></div></li>
    </ul>
  </Navbar>
  )
}