import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import EditTaskForm from './EditTaskForm';
import LocalStorage from '../services/LocalStorage';
import '../../styles/pages/toDoListDiary.scss';
import TaskFilter from './TaskFilter';

function ToDoListDiary() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditForm, setShowEditForm] = useState(false);
  const [showTasks, setShowTasks] = useState(true); // New state for controlling task visibility

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
    setShowEditForm(true);
    setShowTasks(false); // Hide other tasks when editing
  };

  const handleSaveTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
    setEditingTask(null);
    setShowEditForm(false);
    setShowTasks(true); // Show tasks again after saving changes
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setShowEditForm(false);
    setShowTasks(true); // Show tasks again when canceling edit
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

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskFilter />
      <ToDoForm addTask={addTask} />
      <div>
        <input
          type='text'
          placeholder='Buscar por título'
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      {showTasks && ( // Only show the tasks if showTasks is true
        <ToDoList
          tasks={sortedTasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          handleEditTask={handleEditTask}
        />
      )}
      {showEditForm && editingTask && (
        <EditTaskForm
          editingTask={editingTask}
          handleSaveTask={handleSaveTask}
          handleCancelEdit={handleCancelEdit}
        />
      )}
      <LocalStorage tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default ToDoListDiary;
