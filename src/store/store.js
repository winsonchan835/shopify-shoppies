import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';

import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const middleWare = applyMiddleware(thunkMiddleware, createLogger())

const initialState = {}

// Action Constant
const SEARCH_MOVIE = 'SEARCH_MOVIE';

// Action Creator
const searchMovie = (movie) => ({
  type: SEARCH_MOVIE,
  movie
})
// omdb api key: c260d813
const thunkSearchMovie = (searchTerm) => {
  return (dispatch) => {
    const data = axios.get(`http://www.omdbapi.com/?t=${searchTerm}&apikey=c260d813`)
  }
}

// Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
    return state
  }
}

// Store
const store = createStore(reducer, middleWare)

export default store
