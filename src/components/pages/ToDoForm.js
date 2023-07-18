import React, { useState } from 'react';

function ToDoForm({ addTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');

  const handleNewTaskTitleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const handleNewTaskDescriptionChange = (e) => {
    setNewTaskDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setSelectedPriority(e.target.value);
  };

  const handleSubmit = () => {
    if (newTaskTitle.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      description: newTaskDescription,
      category: selectedCategory,
      priority: selectedPriority,
      completed: false,
      createdAt: new Date(),
      updatedAt: null,
    };

    addTask(newTask);

    setNewTaskTitle('');
    setNewTaskDescription('');
    setSelectedCategory('');
    setSelectedPriority('');
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Título de la tarea'
        value={newTaskTitle}
        onChange={handleNewTaskTitleChange}
      />
      <input
        type='text'
        placeholder='Descripción de la tarea'
        value={newTaskDescription}
        onChange={handleNewTaskDescriptionChange}
      />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value=''>Seleccione una categoría</option>
        <option value='Trabajo'>Trabajo</option>
        <option value='Estudio'>Estudio</option>
        <option value='Compras'>Compras</option>
        <option value='Gimnasio'>Gimnasio</option>
      </select>
      <select value={selectedPriority} onChange={handlePriorityChange}>
        <option value=''>Seleccione una prioridad</option>
        <option value='alta'>Alta</option>
        <option value='media'>Media</option>
        <option value='baja'>Baja</option>
      </select>
      <button onClick={handleSubmit}>Añadir tarea</button>
    </div>
  );
}

export default ToDoForm;
