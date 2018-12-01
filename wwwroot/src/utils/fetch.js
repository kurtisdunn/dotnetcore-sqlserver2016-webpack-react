import 'whatwg-fetch';
import cookie from 'js-cookie';

function checkStatus (res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
 }else if(res.status === 500) {
   
   return res;
  } else {
    var error = new Error(res.statusText);
    error.res = res.json();
    throw error;
  }
}

function parseJson (res) {
  if(res){ return res.json(); }
}

export default function (path, opts = {}) {
  const token = cookie.getJSON('token');

  if (!opts.headers) {
    opts.headers = {};
  }

  if (token) {
    opts.headers['Authorization'] = `Bearer ${token.access}`;
  }

  return fetch('api/' + path, opts)
    .then(checkStatus)
    .then(parseJson);
}
