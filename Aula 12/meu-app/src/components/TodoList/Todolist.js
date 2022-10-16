import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = () => {
  const tarefas = ['ir ao mercado', 'estudar javascript', 'estudar react', 'lavar a louça']

  return (
    <section className="todolist">
      <h2 className="todo-title">Minha Lista de Tarefas</h2>
      <ol className="todos">
        {tarefas.map((tarefa, index) => (
          <TodoItem tarefa={tarefa} key={index}/>
        ))}
      </ol>
    </section>
  )
}

export default TodoList;