import './App.css';
import Welcome from './components/Welcome/Welcome';
import Reverse from './components/Reverse/Reverse';


function App() {
  return (
    <div className="App">
      <Welcome nome="Ivo" sobrenome="Soares"/>
      <div className="reverse">
        <p className="app-text">Os textos abaixo são criados pelo componente Reverse:</p>
        <Reverse>
          meu texto
        </Reverse>
        <Reverse>
          Meu nome é Ivo
        </Reverse>
      </div>
    </div>
  );
}

export default App;
