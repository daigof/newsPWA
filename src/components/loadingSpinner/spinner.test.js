import React from 'react';
import { shallow } from 'enzyme';

import LoadingSpinner from './index';

it('Render Spinner without crashing', () => {
  shallow(<LoadingSpinner />);
});
