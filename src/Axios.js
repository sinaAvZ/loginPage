import axios from 'axios';

export default axios.create({
  baseURL: 'http://185.105.186.100:3000/api'
});