import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <div className='categories'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);
Categories.propTypes = {
  title: PropTypes.string,
};
export default Categories;
