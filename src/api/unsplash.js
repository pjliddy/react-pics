import axios from 'axios';

// create instance of axios object with default configs
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 352fcefa1e321476c1af4ad4f654b1c6d420fefd3c574e36a4b1485e5296d95c'
  }
});
