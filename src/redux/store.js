import {createStore} from 'redux';
import moviesReducer from './moviesReducer.js';

export default createStore(moviesReducer);