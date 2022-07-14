const axios = require('axios');

const API_KEY = '27444041-6ebfb7763dac999969343312e';
const BASE_URL = `https://pixabay.com/api/`

export function searchByName(searchQuery) {
  return axios(`${BASE_URL}?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
}