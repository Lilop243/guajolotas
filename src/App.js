import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Usuario from './components/Usuario';
import Formulario from './components/Formulario';
import Search from './components/Search';
function App() {
  return (
    <div className="container">
     <Usuario/>
     <Formulario/>
     <Search/>
     
    </div>
  );
}

export default App;
