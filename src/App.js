import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Layouts from './components/Layouts/Layouts';
import Quizs from './components/Quizs/Quizs';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Layouts></Layouts>,
      children: [
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: (
            <div>
              <Home></Home>
            </div>
          ),
        },
        {
          path: '/quiz/:id',
          loader: ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quizs></Quizs>,
        },
        {
          path: '/Statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: (
            <div>
              <Statistics></Statistics>
            </div>
          ),
        },
        {
          path: '/blog',
          element: (
            <div>
              <Blog></Blog>
            </div>
          ),
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },

    // {
    //   path: '',
    //   element: <Layouts></Layouts>,
    //   children: [
    //     {
    //       path: '',
    //       // loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    //       element: <Home></Home>,
    //     },
    //     {
    //       path: '/quiz',
    //       // loader: ({ params }) =>
    //       //   fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
    //       element: <Quizs></Quizs>,
    //     },
    //     {
    //       path: '/blog',
    //       element: <Blog></Blog>,
    //     },
    //     {
    //       path: '/Statistics',
    //       // loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    //       element: <Statistics></Statistics>,
    //     },
    //   ],
    // },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
