import React, { Fragment } from 'react';
import Header from './containers/header';
import Gallery from './containers/gallery';
import { css } from './common/withStyles';
import './App.css';

const App = () => (
  <div>
    <Header />
    <Gallery />
  </div>
);

export default App;
