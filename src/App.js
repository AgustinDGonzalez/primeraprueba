import logo from './logo.svg';
import './App.css';
import Contador from './componentes/Contador';

function App() {
  return (
    <div className="App">
      <Contador />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
    </div>
  );
}

export default App;
