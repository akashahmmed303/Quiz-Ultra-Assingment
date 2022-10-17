import React from 'react';

function InCorrect({ inCorrect }) {
  return (
    <div className='text-slate-300 bg-red-600 w-8 h-8 rounded-lg text-xl font-medium flex items-center justify-center p-6 fixed bottom-28 right-12 shadow-lg'>
      <span>{inCorrect}</span>
    </div>
  );
}

export default InCorrect;
