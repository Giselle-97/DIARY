import React, { useState } from 'react';
//import './NoteEditor.scss';
import { v4 as uuidv4 } from 'uuid';

const NoteEditor = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('Low');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    if (title && content) {
      const newNote = {
        id: uuidv4(),
        title,
        date,
        priority,
        content,
      };
      onAdd(newNote);
      setTitle('');
      setDate('');
      setPriority('Low');
      setContent('');
    }
  };

  return (
    <div className='note-editor'>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='High'>High</option>
      </select>
      <textarea
        placeholder='Content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default NoteEditor;
