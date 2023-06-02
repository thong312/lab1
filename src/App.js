
import './App.css';
import Films from './component/Films';
import Footer from './component/Footer';
import Navigation from './component/Navigation';
import {
  Route, Routes
} from 'react-router-dom';
import Detail from './component/detail';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Films />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
