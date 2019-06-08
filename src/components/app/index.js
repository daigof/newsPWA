import React from 'react';
import { Global } from '@emotion/core';

import logo from '../../images/logo.svg';
import resetStyles from '../../utils/globalStyles';

import { AppLogo } from './styles';

function App() {
  return (
    <div>
      <Global styles={resetStyles} />
      <header>
        <AppLogo src={logo} alt="logo" />
      </header>
    </div>
  );
}

export default App;
