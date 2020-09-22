import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { register } from '../actions';
import '../assets/styles/Register.scss';
import Header from '../components/Header';

const Register = (props) => {
  const { register, history } = props;
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const handleInput = (event) => {
    setValues({ ...form, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    register(form);
    history.push('/');
  };
  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Sign Up</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              name='name'
              className='input'
              type='text'
              placeholder='Name'
              onChange={handleInput}
            />
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Email'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Pasword'
              onChange={handleInput}
            />
            <button type='submit' className='button'>
              Sign Up
            </button>
          </form>
          <Link to='/login'>Sign In</Link>
        </section>
      </section>
    </>
  );
};
Register.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapDispatchToProps = { register };

export default connect(null, mapDispatchToProps)(Register);
