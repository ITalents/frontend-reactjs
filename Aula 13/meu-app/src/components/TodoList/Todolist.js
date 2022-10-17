import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [tarefas, setTarefas] = useState(['ir ao supermercado'])
  const [contador, setContador ] = useState(0)
  // const tarefas = ['ir ao mercado', 'estudar javascript', 'estudar react', 'lavar a louça']

  const handleClick = () => {
    setTarefas([...tarefas, 'cortar o cabelo'])
  }
  return (
    <section className="todolist">
      <h2 className="todo-title">Minha Lista de Tarefas</h2>
      <ol className="todos">
        {tarefas.map((tarefa, index) => (
          <TodoItem tarefa={tarefa} key={index}/>
        ))}
      </ol>
      <button onClick={handleClick}>adiciona tarefa</button>
    </section>
  )
}

export default TodoList;