import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {animeReducer} from './reducers/animeReducer';

import AnimeForm from './components/AnimeForm';
import AnimeCards from './components/AnimeCards';
import './App.css';

const store = createStore(animeReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>List of Animes</h1>
        <AnimeForm />
        <AnimeCards />
      </div>
    </Provider>
  );
}

export default App;
