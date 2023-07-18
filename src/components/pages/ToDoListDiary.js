import React, { useState } from 'react';
import LocalStorage from '../services/LocalStorage';

function ToDoListDiary() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
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
          return {
            ...task,
            completed: !task.completed,
            updatedAt: new Date(),
          };
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

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleSaveTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === editedTask.id) {
          return {
            ...editedTask,
            updatedAt: new Date(),
          };
        }
        return task;
      })
    );
    setEditingTask(null);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (a.priority === 'alta' && b.priority !== 'alta') {
      return -1;
    } else if (a.priority !== 'alta' && b.priority === 'alta') {
      return 1;
    } else {
      return b.updatedAt - a.updatedAt;
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
          <span className='date'>
            Creada: {formatDate(task.createdAt)}
            {task.updatedAt && (
              <span>, Actualizada: {formatDate(task.updatedAt)}</span>
            )}
          </span>
        </div>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        <button onClick={() => handleEditTask(task)}>Editar</button>
      </div>
    ));
  };

  const renderEditingTask = () => {
    if (editingTask === null) {
      return null;
    }

    return (
      <div className='edit-task-modal'>
        <h2>Editar Tarea</h2>
        <input
          type='text'
          placeholder='Título de la tarea'
          value={editingTask.title}
          onChange={(e) =>
            setEditingTask({ ...editingTask, title: e.target.value })
          }
        />
        <input
          type='text'
          placeholder='Descripción de la tarea'
          value={editingTask.description}
          onChange={(e) =>
            setEditingTask({ ...editingTask, description: e.target.value })
          }
        />
        <select
          value={editingTask.category}
          onChange={(e) =>
            setEditingTask({ ...editingTask, category: e.target.value })
          }
        >
          <option value=''>Seleccione una categoría</option>
          <option value='Trabajo'>Trabajo</option>
          <option value='Estudio'>Estudio</option>
          <option value='Compras'>Compras</option>
          <option value='Gimnasio'>Gimnasio</option>
        </select>
        <select
          value={editingTask.priority}
          onChange={(e) =>
            setEditingTask({ ...editingTask, priority: e.target.value })
          }
        >
          <option value=''>Seleccione una prioridad</option>
          <option value='alta'>Alta</option>
          <option value='media'>Media</option>
          <option value='baja'>Baja</option>
        </select>
        <button onClick={() => handleSaveTask(editingTask)}>Guardar</button>
        <button onClick={handleCancelEdit}>Cancelar</button>
      </div>
    );
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
      {renderEditingTask()}
      <LocalStorage tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default ToDoListDiary;
