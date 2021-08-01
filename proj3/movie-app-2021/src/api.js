import axios from 'axios';

const ID_KEY = 'ZaDKQUrf6kGu7G4erL2H';
const SECRET_KEY = '1l86oX6IhS';

const api = axios.create({
  baseURL: 'https://yts.mx/api',
});

export const ytsMoviesApi = {
  search: () => api.get('/v2/list_movies.json', {
    params: {
      sort_by:"like_count", 
      order_by:"desc", 
      limit:5 
    }
  })
};
