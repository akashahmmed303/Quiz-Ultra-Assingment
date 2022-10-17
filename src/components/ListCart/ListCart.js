import React from 'react';
import { Link } from 'react-router-dom';

function ListCart({ cart: { name, logo, total, id } }) {
  return (
    <div className='p-4 md:w-1/3'>
      <div className='h-full border-2 border-gray-800 rounded-lg overflow-hidden'>
        <img
          className='lg:h-48 md:h-36 w-full object-cover object-center'
          src={logo}
          alt={name}
        />
        <div className='p-6'>
          <h1 className='title-font text-lg font-medium text-white mb-3'>
            {name}
          </h1>
          <p className='leading-relaxed mb-3'>Quantity: {total}</p>
          <Link to={`/quiz/${id}`}>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-80 flex items-center'
            >
              Start Now{' '}
              <svg
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M5 12h14'></path>
                <path d='M12 5l7 7-7 7'></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ListCart;
