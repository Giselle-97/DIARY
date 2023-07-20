import React from 'react';
import ToDoTask from './ToDoTask';

function ToDoList({ tasks, toggleTaskCompletion, deleteTask, handleEditTask }) {
  const renderTasks = () => {
    return tasks.map((task) => (
      <ToDoTask
        key={task.id}
        task={task}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        handleEditTask={handleEditTask}
      />
    ));
  };

  return <div>{renderTasks()}</div>;
}

export default ToDoList;
