import React from 'react';
import { Global } from '@emotion/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import resetStyles from 'utils/globalStyles';
import { StateProvider } from 'utils/state';
import { initialState, reducer } from 'utils/reducer';
import Header from 'components/header';
import Home from 'components/home';
import Category from 'components/category';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Global styles={resetStyles} />
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/category/:category" component={Category} />
      </Router>
    </StateProvider>
  );
};

export default App;
