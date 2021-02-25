import React from 'react';
import './App.css';
import Body  from './components/body/body'
import Header  from './components/header/header'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from "./store";

function App() {
  return (
      <Provider store={store}>
          <Header/>
          <Body/>
      </Provider>

  );
}

export default App;
