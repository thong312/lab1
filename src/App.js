
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

function App() {
  return (
    <div className="App">
      < Navigation/>
      <Routes>
        <Route path='/' element={<Films />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/news' element={<News/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
