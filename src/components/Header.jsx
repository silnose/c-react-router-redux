import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { logout } from '../actions';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  // eslint-disable-next-line no-prototype-builtins
  const isLogged = user.hasOwnProperty('email');
  const profilePicture = isLogged ? gravatar(user.email) : userIcon;
  const handleLogOut = () => {
    props.logout();
  };

  const headerClass = classNames('header', { isLogin, isRegister });
  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={profilePicture} alt='' />
          <p>Profile</p>
        </div>
        <ul>
          {isLogged ? (
            <li>
              <a href='/'>{user.name ?? user.email}</a>
            </li>
          ) : null}
          {isLogged ? (
            <li>
              <a href='#logout' onClick={handleLogOut}>
                Logout
              </a>
            </li>
          ) : (
            <li>
              <Link to='/login'>Log In</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
Header.propTypes = {
  user: PropTypes.object,
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { user: state.user };
};
const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
