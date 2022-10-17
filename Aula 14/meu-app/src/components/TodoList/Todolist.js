import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [tarefas, setTarefas] = useState([]);
  const [tarefaText, setTarefaText] = useState('');

  const handleChange = (event) => {
    setTarefaText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTarefas([...tarefas, tarefaText]);
    setTarefaText('')
  }
  
  return (
    <section className="todolist">
      <h2 className="todo-title">Minha Lista de Tarefas</h2>
      <form className="todo-register" onSubmit={handleSubmit}>
        <label htmlFor="tarefa">Tarefa:</label>
        <input type="text" 
          id="tarefa" 
          placeholder="Digite a sua tarefa"
          value={tarefaText}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
      <ol className="todos">
        {tarefas.map((tarefa, index) => (
          <TodoItem tarefa={tarefa} key={index}/>
        ))}
      </ol>
    </section>
  )
}

export default TodoList;