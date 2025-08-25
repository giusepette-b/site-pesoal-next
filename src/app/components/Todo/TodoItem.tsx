'use client'

import { useState } from 'react';
import { Todo } from './types/todo';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onEdit, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className={styles.checkbox}
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyPress}
          autoFocus
          className={styles.editInput}
        />
      ) : (
        <span
          className={styles.todoText}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      
      <div className={styles.actions}>
        <button
          onClick={() => setIsEditing(true)}
          className={styles.editButton}
          title="Editar tarefa"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className={styles.deleteButton}
          title="Excluir tarefa"
        >
          🗑️
        </button>
      </div>
      
      <span className={styles.date}>
        {todo.createdAt.toLocaleDateString('pt-BR')}
      </span>
    </div>
  );
};

export default TodoItem;