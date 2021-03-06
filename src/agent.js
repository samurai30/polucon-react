import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent,global.Promise);
const API_ROOT = 'http://127.0.0.1:3200/api';
const responseBody = response => response.body;

export const requests = {
  get: (url) => superagent.get(`${API_ROOT}${url}`).then(responseBody)
};