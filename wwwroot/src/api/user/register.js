import assign from 'object-assign';
import fetch from '../../utils/fetch';
import Authenticate from '../../api/user/authenticate';



export default function (data) {
    console.log(data);
    const details = data;
    return fetch('users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(r => {
        console.log(details);
        return Authenticate({ 'Username': details.Username, 'Passowrd': details.Passowrd });
    })
    .then('Success')
    .catch('Failure');
}
