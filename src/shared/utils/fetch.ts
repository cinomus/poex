import { isServer } from '../constants/hz';
import config from 'config';

const envAwareFetch = (url: string, options?: Record<string, unknown>) => {
  console.log('used envAwareFetch');
  const fetchUrl =
    isServer && url.startsWith('/')
      ? `http://localhost:${config.get('PORT')}${url}`
      : url;
  return fetch(fetchUrl, options).then((res) => res.json());
  // const result = await fetch(fetchUrl, options);
  // console.log('fetch', await result.json());
  // const js = result.json();
  // return js;
};

export { envAwareFetch as fetch };
