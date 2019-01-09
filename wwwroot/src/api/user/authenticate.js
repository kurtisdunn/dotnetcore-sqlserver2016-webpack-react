import { config } from '../../config';
import Cookies from 'js-cookie';
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
    Cookies.set('token', {
      access: r.Token
    });

    config.user = r;
    return 'Success';
    }).catch('Login Failure');
}
