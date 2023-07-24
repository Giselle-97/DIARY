import React from 'react';
import '../../../styles/pages/oneNote.scss';

const OneNote = ({ id, title, priority, content, onDelete }) => {
  return (
    <div className='one-note'>
      <h3 className='titleOneNote'>{title}</h3>
      <p>Prioridad: {priority}</p>
      <p className='contentNote'>{content}</p>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
};

export default OneNote;
