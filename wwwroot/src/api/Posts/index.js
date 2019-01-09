import assign from 'object-assign';
import fetch from '../../utils/fetch';

const getAll = () => {
    return fetch('posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => r);
};

const getById = (id) => {
    return fetch('posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    }).then(r => r);
};

export { getAll, getById };


// export default function () {
//     return fetch('posts', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
// }
