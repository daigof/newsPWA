import React from 'react';
import { shallow } from 'enzyme';

import Home from './index';

it('Render Home without crashing', () => {
  shallow(<Home />);
});
