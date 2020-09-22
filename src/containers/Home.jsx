/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/Home.scss';
import Header from '../components/Header';

const Home = ({ mylist, trends, originals, searchResult }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {searchResult.length > 0 && (
        <Categories title='Search Result'>
          <Carousel>
            {searchResult.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      {mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencia'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originales de platzi video'>
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

Home.propTypes = {
  mylist: PropTypes.array,
  trends: PropTypes.array,
  originals: PropTypes.array,
  searchResult: PropTypes.array,
};
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    searchResult: state.searchResult,
  };
};
export default connect(mapStateToProps, null)(Home);
