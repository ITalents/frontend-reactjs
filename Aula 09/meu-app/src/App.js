import './App.css';
import Welcome from './components/Welcome/Welcome';
import Reverse from './components/reverse';


function App() {
  return (
    <div className="App">
      <Welcome nome="Ivo" sobrenome="Soares"/>
      {/* <Reverse texto="ola"/>
      <Reverse texto="meu texto"/> */}
      <Reverse>
        meu texto
      </Reverse>
      <Reverse>
        o meu texto que deve ser invertido
      </Reverse>
    </div>
  );
}

export default App;
