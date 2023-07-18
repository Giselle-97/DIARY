import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = () => {
    if (newTaskTitle.trim() === '') {
      return; // Evita agregar tareas vacías
    }

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      description: newTaskDescription,
      category: selectedCategory,
      priority: selectedPriority,
      completed: false,
      date: new Date(),
    };

    if (selectedPriority === 'alta') {
      setTasks([newTask, ...tasks]);
    } else {
      setTasks([...tasks, newTask]);
    }

    setNewTaskTitle('');
    setNewTaskDescription('');
    setSelectedCategory('');
    setSelectedPriority('');
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setSelectedPriority(e.target.value);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (a.priority === 'alta' && b.priority !== 'alta') {
      return -1; // Prioridad 'alta' primero
    } else if (a.priority !== 'alta' && b.priority === 'alta') {
      return 1; // Prioridad 'alta' después
    } else {
      return b.date - a.date; // Orden por fecha
    }
  });

  const renderTasks = () => {
    return sortedTasks.map((task) => (
      <div
        key={task.id}
        className={`task ${task.completed ? 'completed' : ''}`}
      >
        <input
          type='checkbox'
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <div className='task-info'>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <span className='category'>{task.category}</span>
          <span className='priority'>{task.priority}</span>
        </div>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
    ));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type='text'
          placeholder='Título de la tarea'
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type='text'
          placeholder='Descripción de la tarea'
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
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
        <button onClick={addTask}>Añadir tarea</button>
      </div>
      <div>
        <input
          type='text'
          placeholder='Buscar por título'
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <div>{renderTasks()}</div>
    </div>
  );
}

export default ToDoList;
