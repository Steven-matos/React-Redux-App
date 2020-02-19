import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import AnimeForm from './components/AnimeForm';
import './App.css';

const store = createStore(applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>List of Animes</h1>
        <AnimeForm />
      </div>
    </Provider>
  );
}

export default App;
