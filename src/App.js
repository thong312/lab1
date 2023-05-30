
import './App.css';
import Films from './component/Films';
import Footer from './component/Footer';
import Navigation from './component/Navigation';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Films/>
     <Footer/>
    </div>
  );
}

export default App;
