import './App.css';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
      <div className="header">Memory Game</div>
      <div className="content">
        <Cards></Cards>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
