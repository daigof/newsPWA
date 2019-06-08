const API_KEY = 'd18e52ff79564543824c0991b5d3aaab';
const ENDPOINT = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const CATEGORIES = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

export { ENDPOINT, CATEGORIES };
