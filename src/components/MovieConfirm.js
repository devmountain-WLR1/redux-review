import React from 'react'
import styles from './styles'
import {connect} from 'react-redux';
import {updateMovieList} from '../redux/moviesReducer';

const MovieConfirm = props => {
  const {title, poster, rating} = props;

  const confirmMovie = () => {
    props.updateMovieList({title, poster, rating})
    props.history.push('/list')
  }

  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>CONFIRM YOUR DETAILS</p>
      <p style={styles.confirmText}>{`${title} - ${rating}`}</p>
      <img src={poster} alt="Movie Poster" />
      <div>
        <button
          onClick={() => props.history.push('/')}
          style={styles.formButton}
        >
          BACK
        </button>
        <button onClick={confirmMovie} style={styles.formButton}>
          CONFIRM
        </button>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, {updateMovieList})(MovieConfirm);
