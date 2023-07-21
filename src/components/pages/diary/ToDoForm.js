import React, { useState } from 'react';
import '../../../styles/pages/toDoForm.scss';

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
    <div className='containerToDoForm'>
      <div className='boxToDoForm2'>
        <div className='boxFormList'>
          <input
            className='inputTaskTitle'
            type='text'
            placeholder='Título de la tarea'
            value={newTaskTitle}
            onChange={handleNewTaskTitleChange}
          />
          <textarea
            className='inputTaskDesc'
            type='text'
            placeholder='Descripción de la tarea'
            value={newTaskDescription}
            onChange={handleNewTaskDescriptionChange}
          />
        </div>
        <div className='boxSelect'>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value='' disabled>
              Categoría
            </option>
            <option value='Trabajo'>Trabajo</option>
            <option value='Estudio'>Estudio</option>
            <option value='Compras'>Compras</option>
            <option value='Gimnasio'>Gimnasio</option>
            <option value='Otros'>Otros</option>
          </select>
          <select value={selectedPriority} onChange={handlePriorityChange}>
            <option value='' disabled>
              Prioridad
            </option>
            <option value='alta'>Alta</option>
            <option value='media'>Media</option>
            <option value='baja'>Baja</option>
          </select>
        </div>
        <div className='boxBtnAddTask'>
          <button className='btnAddTask' onClick={handleSubmit}>
            Añadir tarea
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoForm;
