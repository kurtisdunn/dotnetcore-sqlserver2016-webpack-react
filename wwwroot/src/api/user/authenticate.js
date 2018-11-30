import { config } from '../../config';
import cookie from 'js-cookie';
import fetch from '../../utils/fetch';

export default function (data) {
  console.log('authenticate-post: ', data);
  return fetch('users/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(r => {
    cookie.set('token', {
      access: r.access_token
      // expiry: r.expires_in,
      // refresh: r.refresh_token,
      // type: r.token_type[0].toUpperCase() + r.token_type.substring(1)
    });
    }).then(r => {
      config.user = r;
    });
}
