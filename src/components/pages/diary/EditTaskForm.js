import React, { useState } from 'react';

function EditTaskForm({ editingTask, handleSaveTask, handleCancelEdit }) {
  const [editedTask, setEditedTask] = useState({
    ...editingTask,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    handleSaveTask(editedTask);
  };

  const handleCancelClick = () => {
    handleCancelEdit();
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal-background') {
      handleCancelEdit();
    }
  };

  return (
    <div className='modal-background' onClick={handleOutsideClick}>
      <div className='edit-modal'>
        <h2>Editar Tarea</h2>
        <label>
          Título:
          <input
            type='text'
            name='title'
            value={editedTask.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Descripción:
          <input
            type='text'
            name='description'
            value={editedTask.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Categoría:
          <select
            name='category'
            value={editedTask.category}
            onChange={handleInputChange}
          >
            <option value='Trabajo'>Trabajo</option>
            <option value='Estudio'>Estudio</option>
            <option value='Compras'>Compras</option>
            <option value='Gimnasio'>Gimnasio</option>
          </select>
        </label>
        <label>
          Prioridad:
          <select
            name='priority'
            value={editedTask.priority}
            onChange={handleInputChange}
          >
            <option value='alta'>Alta</option>
            <option value='media'>Media</option>
            <option value='baja'>Baja</option>
          </select>
        </label>
        <div className='modal-buttons'>
          <button onClick={handleSaveClick}>Guardar</button>
          <button onClick={handleCancelClick}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default EditTaskForm;
