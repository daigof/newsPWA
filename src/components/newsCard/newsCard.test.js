import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  mockAllIsIntersecting,
  mockIsIntersecting,
} from 'react-intersection-observer/test-utils';

import NewsCard from './index';

const PLACEHOLDER_IMAGE_SRC = 'placeholder.png';

const NEWS_MOCK = {
  title: 'Mock News Title',
  publishedAt: '2019-06-09T13:28:00Z',
};

const NEWS_MOCK_WITH_IMAGE = {
  ...NEWS_MOCK,
  urlToImage: 'http://dummy.cdn/image.jpg',
};

it('Render NewsCard with minimal props without crashing', () => {
  shallow(<NewsCard newsData={NEWS_MOCK} />);
});

it('Render NewsCard with and Image', () => {
  let wrapper = mount(<NewsCard newsData={NEWS_MOCK_WITH_IMAGE} />);
  const imageWrapper = wrapper.find('img');
  expect(imageWrapper.prop('src')).toBe(PLACEHOLDER_IMAGE_SRC);
  mockIsIntersecting(imageWrapper.getDOMNode(), true);
  wrapper.update();
  // console.log(wrapper.debug());
});
