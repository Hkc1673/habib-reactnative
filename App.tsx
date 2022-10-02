import React from 'react';
import {Provider} from 'react-redux';
import store from '@store/store';
import Router from "./src/screens/Router"

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
