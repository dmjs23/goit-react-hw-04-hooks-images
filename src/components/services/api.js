import axios from 'axios';

export const getImages = (query = '', page = 1) => {
  const key = '15302977-99a8e51ff55a3c0e02bc236e3';
  const path = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(path);
};
