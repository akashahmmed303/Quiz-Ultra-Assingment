import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCart from '../QuizCart/QuizCart';

const Quizs = () => {
  const { data } = useLoaderData();
  const { name, questions } = data;
  console.log(data);

  const handleCliked = async (text, key) => {
    console.log(handleCliked);
  };

  const handleSee = ({ correctAnswer }) => {
    console.log(handleSee);
  };

  return (
    <div className='container relative bg-state-800 '>
      <h1 className='mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black text-center'>
        {name}
      </h1>
      <div className='grid lg:grid-cols-2 lg:gap-x-8 gap-y-8 '>
        {questions.map(({ question, options, id, correctAnswer }) => {
          return (
            <QuizCart
              handleSee={handleSee}
              correctAnswer={correctAnswer}
              options={options}
              question={question}
              id={id}
              key={id}
              handleCliked={handleCliked}
            ></QuizCart>
          );
        })}
      </div>
    </div>
  );
};

export default Quizs;
