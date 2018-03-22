import React, { Fragment } from 'react';
import { JssProvider, ThemeProvider } from 'react-jss';
import { create as createJss } from 'jss';
import CamelCase from 'jss-camel-case';
import PresetJss from 'jss-preset-default';
import NestedJss from 'jss-nested';
import Prefixer from 'jss-vendor-prefixer';
import Header from './components/header/header';
import Popup from './components/popup';
import './App.css';

const App = () => {
  const theme = {
    primaryColor: '#ddd',
    secondaryColor: '#000',
    inputBorderColor: '#b0b0b0',
    borderColor: '#b0b0b0',
    color: '#000',
  };
  const jss = createJss();
  jss.use(CamelCase(), PresetJss(), NestedJss(), Prefixer());

  return (
    <JssProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Header />
          <Popup open>
            <div>Test</div>
          </Popup>
        </Fragment>
      </ThemeProvider>
    </JssProvider>
  );
};

export default App;
