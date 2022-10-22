import logo from '../src/Cryptocurrency.png';
import './App.css';
import AppBar from './components/navbar/Appbar';

function App() {
  return (
    <div className="App">
      <AppBar props={logo} />
    </div>
  );
}

export default App;
