import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import QuizList from '../QuizList/QuizList';

const Home = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <QuizList data={data}></QuizList>
    </div>
  );
};

export default Home;
