function Welcome({ nome = 'usuário', sobrenome = 'teste'}) {
  return(
    <div>
      <h1>Olá {nome} {sobrenome} seja bem vindo !</h1>
    </div>
  )
}
export default Welcome;