import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import LocalStorage from '../services/LocalStorage';

function ToDoListDiary() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (newTask) => {
    if (newTask.priority === 'alta') {
      setTasks([newTask, ...tasks]);
    } else {
      setTasks([...tasks, newTask]);
    }
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

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
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
        <button onClick={handleSaveTask.bind(null, editingTask)}>
          Guardar
        </button>
        <button onClick={handleCancelEdit}>Cancelar</button>
      </div>
    );
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ToDoForm addTask={addTask} />
      <div>
        <input
          type='text'
          placeholder='Buscar por título'
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <ToDoList
        tasks={sortedTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        handleEditTask={handleEditTask}
      />
      {renderEditingTask()}
      <LocalStorage tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default ToDoListDiary;
