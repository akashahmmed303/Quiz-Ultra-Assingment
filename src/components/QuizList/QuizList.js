import React from 'react';
import ListCart from '../ListCart/ListCart';

function QuizList({ data }) {
  return (
    <div>
      <section className='text-gray-400 bg-gray-900 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap m-4 justify-center md:justify-between'>
            {data.map(cart => {
              return <ListCart key={cart.id} cart={cart} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuizList;
