import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getVideo } from '../actions/index';
import '../assets/styles/Player.scss';
import NotFound from './NotFound';

const Player = (props) => {
  const {
    match: { params: id },
    playing,
    history,
    getVideo,
  } = props;

  const handleGoBack = () => {
    history.goBack();
  };

  useEffect(() => {
    getVideo(id);
  });
  const hasPlaying =
    // eslint-disable-next-line no-prototype-builtins
    playing.hasOwnProperty('source') && playing.source.length > 0;
  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

Player.propTypes = {
  playing: PropTypes.object,
  getVideo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { playing: state.playing };
};

const mapDispatchToProps = {
  getVideo,
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
