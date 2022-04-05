import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = [
  'estudar',
  'ingles',
  'surf',
  'fazer comida',
  'entregar projeto'
]

function App() {
  return (
    <div>
      <ol>
        {compromissos.map((compromisso) => Task(compromisso))}
      </ol>
    </div>
  );
}

export default App;
