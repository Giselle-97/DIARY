import React from 'react';

function ToDoTask({ task, toggleTaskCompletion, deleteTask, handleEditTask }) {
  const {
    id,
    completed,
    title,
    description,
    category,
    priority,
    createdAt,
    updatedAt,
  } = task;

  const handleCheckboxChange = () => {
    toggleTaskCompletion(id);
  };

  const handleDeleteClick = () => {
    deleteTask(id);
  };

  const handleEditClick = () => {
    handleEditTask(task);
  };

  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <input
        type='checkbox'
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <div className='task-info'>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className='category'>{category}</span>
        <span className='priority'>{priority}</span>
        <span className='date'>
          Creada: {formatDate(createdAt)}
          {updatedAt && <span>, Actualizada: {formatDate(updatedAt)}</span>}
        </span>
      </div>
      <button onClick={handleDeleteClick}>Eliminar</button>
      <button onClick={handleEditClick}>Editar</button>
    </div>
  );
}

export default ToDoTask;
