import axios from 'axios';

const ID_KEY = 'mJ4hbX7Kr5iS_A0aHhtT';
const SECRET_KEY = '8j2fD__z2p';

const api = axios.create({
  baseURL: 'https://yts.mx/api/',
  // headers: {
  //   'X-Naver-Client-Id': ID_KEY,
  //   'X-Naver-Client-Secret': SECRET_KEY,
  // }
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
