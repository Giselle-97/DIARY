import '../../../styles/pages/notes.scss';
import { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import Header from '../../Header';
import Footer from '../../Footer';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (newNote) => {
    if (notes.length < 50) {
      setNotes([...notes, newNote]);
    } else {
      // Puedes mostrar un mensaje de que se ha alcanzado el límite máximo de notas.
      alert('Se ha alcanzado el límite máximo de notas (50).');
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <Header />
      <div className='notes'>
        <h1 className='titleNote'>Notas Rápidas</h1>
        <NoteEditor onAdd={handleAddNote} />
        <NoteList notes={notes} onDelete={handleDeleteNote} />
      </div>
      <Footer />
    </div>
  );
};

export default Notes;
