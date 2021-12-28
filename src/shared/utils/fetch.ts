import { isServer } from '../constants/hz';
import config from 'config';

const envAwareFetch = (url: string, options?: Record<string, unknown>) => {
  console.log('used envAwareFetch');
  const fetchUrl =
    isServer && url.startsWith('/') ? `http://localhost:3000${url}` : url;
  return fetch(fetchUrl, options).then((res) => res.json());
};

export { envAwareFetch as fetch };
