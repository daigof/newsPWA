import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

it('Render Header without crashing', () => {
  shallow(<Header />);
});
