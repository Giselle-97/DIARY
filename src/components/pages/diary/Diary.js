import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import ToDoListDiary from './ToDoListDiary';
import '../../../styles/pages/diary.scss';

function Diary() {
  return (
    <div className='containerDiary'>
      <Header />
      <div className='boxListDiary'>
        <ToDoListDiary />
      </div>
      <Footer />
    </div>
  );
}

export default Diary;
