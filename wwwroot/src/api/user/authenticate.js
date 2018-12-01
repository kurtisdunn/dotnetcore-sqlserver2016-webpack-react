import { config } from '../../config';
import cookie from 'js-cookie';
import fetch from '../../utils/fetch';

export default function (data) {
  console.log(data);
  
  return fetch('users/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(r => {
    cookie.set('token', {
      access: r.access_token
    });
    config.user = r;
    return 'Success';
    }).catch('Login Failure');
}
