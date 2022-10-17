import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Correct from '../Correct/Correct';
import QuizCart from '../QuizCart/QuizCart';

const Quizs = () => {
  const { data } = useLoaderData();
  const { name, questions } = data;
  console.log(data);

  const handleCliked = async (text, key) => {
    console.log(handleCliked);
  };

  const handleSee = correctAnswer => {
    console.log(handleSee);
  };

  return (
    <div className='container relative'>
      <h1 className='my-3 mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black text-center'>
        {name}
      </h1>
      <div>
        {questions.map(
          ({ question, options, id, correctAnswer }, quesIndex) => {
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
          }
        )}
      </div>
    </div>
  );
};

export default Quizs;
