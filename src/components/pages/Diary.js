import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ToDoListDiary from '../pages/ToDoListDiary';
import '../../styles/pages/diary.scss';

function Diary() {
  return (
    <div className='containerDiary'>
      <Header />
      <div>
        <p className='text_diary'>365 días y un millón de planes..</p>
      </div>
      <div className='boxListDiary'>
        <ToDoListDiary />
      </div>
      <Footer />
    </div>
  );
}

export default Diary;
