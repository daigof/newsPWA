import React from 'react';
import { shallow } from 'enzyme';

import Category from './index';

it('Render Category without crashing', () => {
  shallow(<Category match={{ params: { category: 'general' } }} />);
});
