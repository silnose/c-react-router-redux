import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NotFound.scss';
import Header from '../components/Header';

const NotFound = () => (
  <>
    <Header>
      <section className='error-container'>
        <span>4</span>
        <span>
          <span className='screen-reader-text'>0</span>
        </span>
        <span>4</span>
      </section>
      <p className='zoom-area'>
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the homepage.
      </p>
      <div className='link-container'>
        <Link to='/'>Take me home!</Link>
      </div>
    </Header>
  </>
);
export default NotFound;
