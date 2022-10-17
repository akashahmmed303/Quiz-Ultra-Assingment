import React from 'react';

function Correct({ correct }) {
  return (
    <div className='text-slate-300 bg-green-600 w-8 h-8 rounded-lg text-xl font-medium flex items-center justify-center p-6 fixed bottom-12 right-12 shadow-lg'>
      <span>{correct}</span>
    </div>
  );
}

export default Correct;
