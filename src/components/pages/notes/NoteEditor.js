import React, { useState } from 'react';
import '../../../styles/pages/noteEditor.scss';
import { v4 as uuidv4 } from 'uuid';

const NoteEditor = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Prioridad');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    if (title && content) {
      const newNote = {
        id: uuidv4(),
        title,
        priority,
        content,
      };
      onAdd(newNote);
      setTitle('');
      setPriority('Prioridad');
      setContent('');
    }
  };

  return (
    <div className='note-editor'>
      <input
        className='inputTitleEditor'
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value='Prioridad' disabled>
          Prioridad
        </option>
        <option value='Alta'>Alta</option>
        <option value='Media'>Media</option>
        <option value='Baja'>Baja</option>
      </select>
      <textarea
        placeholder='Contenido'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className='btnNote' onClick={handleAddNote}>
        Añadir nota
      </button>
    </div>
  );
};

export default NoteEditor;
