import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className='header bg-yellow-500'>
      <Link className='text-4xl font-bold text-blue-600 flex' to='/home'>
        <img className='w-12' src='./favicon.png' alt='' />
        uizUltra
      </Link>
      <nav className='space-x-8 font-bold mt-3 text-blue-700 text-lg header-btn'>
        <Link to='/home'>Home</Link>
        <Link to='/statistics'>Statistics</Link>
        <Link to='/blog'>Blog</Link>
      </nav>
    </div>
  );
};

export default Header;
