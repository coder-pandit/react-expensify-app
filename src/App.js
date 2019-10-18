import React from 'react';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

const App = ({ store }) => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
