'use client'

import { useState, useEffect } from 'react';
import { Todo, FilterType } from './types/todo';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import styles from './TodoApp.module.css';

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Carregar tarefas do localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos).map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      })));
    }
  }, []);

  // Salvar tarefas no localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Adicionar nova tarefa
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date()
    };
    setTodos([...todos, newTodo]);
  };

  // Alternar status da tarefa
  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Editar texto da tarefa
  const editTodo = (id: string, newText: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // Deletar tarefa
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filtrar tarefas
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Estatísticas
  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gerenciador de Tarefas</h1>
      
      <TodoForm onAdd={addTodo} />
      
      <div className={styles.filters}>
        <button
          className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          Todas ({todos.length})
        </button>
        <button
          className={`${styles.filterButton} ${filter === 'active' ? styles.active : ''}`}
          onClick={() => setFilter('active')}
        >
          Ativas ({activeTodosCount})
        </button>
        <button
          className={`${styles.filterButton} ${filter === 'completed' ? styles.active : ''}`}
          onClick={() => setFilter('completed')}
        >
          Concluídas ({completedTodosCount})
        </button>
      </div>

      <div className={styles.todoList}>
        {filteredTodos.length === 0 ? (
          <p className={styles.emptyMessage}>
            {filter === 'completed' 
              ? 'Nenhuma tarefa concluída' 
              : filter === 'active' 
              ? 'Todas as tarefas concluídas!' 
              : 'Nenhuma tarefa adicionada'}
          </p>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onEdit={editTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>

      {completedTodosCount > 0 && (
        <button
          className={styles.clearButton}
          onClick={() => setTodos(todos.filter(todo => !todo.completed))}
        >
          Limpar concluídas
        </button>
      )}
    </div>
  );
};

export default TodoApp;