import React, { useContext } from 'react';
import './App.css';
import Films from './component/Films';
import Footer from './component/Footer';
import Navigation from './component/Navigation';
import {
  Route, Routes
} from 'react-router-dom';
import Detail from './component/detail';
import Contact from './component/contact';
import About from './component/aboutUs';
import News from './component/news';
import { ThemeContext } from './component/ThemeContext';
import { Button, Icon } from 'react-materialize';
function App() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      < Navigation />
      <div className='chage-background-color'>
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
            <Button><Icon>opacity</Icon></Button>
          </a>
        </div>
        </div>
        <Routes>
          <Route path='/' element={<Films />}>
          </Route>
          <Route path='/detail/:id' element={<Detail />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/news' element={<News />}></Route>
        </Routes>
        <Footer />
     

    </div>
  );
}

export default App;
