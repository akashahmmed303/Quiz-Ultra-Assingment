import React from 'react';

function Option({ id, option, index, handleCliked }) {
  return (
    <li>
      <input
        type='radio'
        id={id + index}
        name={id}
        value={option}
        className='hidden peer'
        required
        onClick={() => handleCliked(option, id)}
      />
      <label
        htmlFor={id + index}
        className='inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
      >
        <div className='block'>
          <h6 className='w-full text-lg font-semibold'>{option}</h6>
        </div>
      </label>
    </li>
  );
}

export default Option;
