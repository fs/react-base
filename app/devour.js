import config from 'config';
import JsonApi from 'devour-client';

const jsonApi = new JsonApi({
  apiUrl: config.apiTarget
});

console.log(jsonApi, config)

export { jsonApi as default };
