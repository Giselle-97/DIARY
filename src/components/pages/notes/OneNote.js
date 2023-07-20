import React from 'react';
//import './OneNote.scss';

const OneNote = ({ id, title, priority, content, onDelete }) => {
  return (
    <div className='one-note'>
      <h3>{title}</h3>
      <p>Priority: {priority}</p>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default OneNote;
