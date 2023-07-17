import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../../styles/pages/toDoListDiary.scss';

function ToDoListDiary() {
  const [tasks, setTasks] = useState([]);
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [selectedBackground, setSelectedBackground] = useState('background-1');
  const [searchTerm, setSearchTerm] = useState('');
  const [tags, setTags] = useState([]);
  const [notificationEmail, setNotificationEmail] = useState('');

  useEffect(() => {
    // Configura tu cuenta de EmailJS
    emailjs.init('user_yourUserID');
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, ...updatedTask };
        }
        return task;
      })
    );
  };

  const filterTasks = (task) => {
    if (searchTerm === '') {
      return true;
    }
    return task.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const sortedTasks = tasks.sort((a, b) => {
    if (a.priority && !b.priority) return -1;
    if (!a.priority && b.priority) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  const renderTags = () => {
    return tags.map((tag) => (
      <span key={tag} className='tag'>
        {tag}
      </span>
    ));
  };

  const sendNotificationEmail = () => {
    // Lógica para enviar el correo electrónico de notificación
    const templateParams = {
      from_name: 'Your Name',
      to_name: 'Recipient Name',
      message: 'This is a reminder for your task',
    };
    emailjs
      .send('your_service_id', 'your_template_id', templateParams)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      })
      .catch((error) => {
        console.log('Email sending failed:', error);
      });
  };

  const handleEmailChange = (e) => {
    setNotificationEmail(e.target.value);
  };

  const renderTasks = () => {
    return sortedTasks.filter(filterTasks).map((task) => (
      <div
        key={task.id}
        className={`task ${task.completed ? 'completed' : ''}`}
      >
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <div className='tags'>{renderTags()}</div>
        <button onClick={() => completeTask(task.id)}>Completar</button>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        <button onClick={() => editTask(task.id, { title: 'Nuevo título' })}>
          Editar
        </button>
      </div>
    ));
  };

  return (
    <div className={`todo-list ${selectedBackground}`}>
      <h1>Lista de Tareas</h1>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Buscar por título'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='task-list'>{renderTasks()}</div>
      <div className='settings'>
        <h3>Configuración</h3>
        <label>
          Color de fuente:
          <input
            type='color'
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
        </label>
        <label>
          Fondo de papel:
          <select
            value={selectedBackground}
            onChange={(e) => setSelectedBackground(e.target.value)}
          >
            <option value='background-1'>Fondo 1</option>
            <option value='background-2'>Fondo 2</option>
            {/* Agrega más opciones de fondos de papel según tus necesidades */}
          </select>
        </label>
        <label>
          Correo electrónico de notificación:
          <input
            type='email'
            value={notificationEmail}
            onChange={handleEmailChange}
          />
        </label>
        <button onClick={sendNotificationEmail}>Enviar Notificación</button>
      </div>
    </div>
  );
}

export default ToDoListDiary;
