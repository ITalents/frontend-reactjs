import './App.css';
import Welcome from './components/Welcome'
import Reverse from './components/Reverse';
a
function App() {
  return (
    <div className="App">
      <h1>Olá </h1>
      <Welcome nome="Ivo" sobrenome="Soares"/>
      <Welcome nome="Maria"/>
      <Welcome nome="João"/>
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
