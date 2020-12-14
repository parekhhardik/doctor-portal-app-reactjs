import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import './App.scss';
import history from './utils/history';
import RoutesConfig from './routesConfig';
import configureStore from './configureStore';

const store = configureStore();

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter history={history}>
          <RoutesConfig />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
