import React from 'react';
//import './NoteList.scss';
import OneNote from '../pages/OneNote';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className='note-list'>
      {notes.map((note) => (
        <OneNote
          key={note.id}
          id={note.id}
          title={note.title}
          date={note.date}
          priority={note.priority}
          content={note.content}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NoteList;
