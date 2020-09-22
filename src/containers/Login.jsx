import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { login } from '../actions';
import '../assets/styles/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(form);
    props.history.push('/');
  };
  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>Sign In</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
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
              placeholder='Password'
              onChange={handleInput}
            />
            <button type='submit' className='button'>
              Sign In
            </button>
            <div className='login__container--remember-me'>
              <label htmlFor='cbox1'>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                &nbsp;Remember me
              </label>

              <a href='/'>Forgot my password?</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <span>
                <i className='fa fa-google' />
                &nbsp;Sign In with Google
              </span>
            </div>
            <div>
              <span>
                <i className='fa fa-twitter' />
                &nbsp;Sign In with Twitter
              </span>
            </div>
          </section>
          <p className='login__container--register'>
            <span>Don't have an account?</span>
            <Link to='/register'>&nbsp;Register Here</Link>
          </p>
        </section>
      </section>
    </>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
};
const mapDispatchToProps = { login };
export default connect(null, mapDispatchToProps)(Login);
