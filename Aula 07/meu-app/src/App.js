import './App.css';
import Welcome from './components/welcome'

function App() {
  return (
    <div className="App">
      <h1>Olá </h1>
      <Welcome nome="Ivo" sobrenome="Soares"/>
      <Welcome nome="Maria" sobrenome="Silva"/>
      <Welcome nome="João"/>
      <Welcome/>
      <Welcome/>
    </div>
  );
}

export default App;
