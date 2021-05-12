import React, { useEffect, useState } from 'react';
// import { Col, Row } from 'react-bootstrap';
import { _get } from '../Services/_get';

export const MyApi = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [users, setUsers] = useState<any[]>([]);


    //eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        (async () => {
            //la _get è null perchè se non trova nulla prende domain 
            //altrimenti restituisce la stringa dell'url
            const response = await _get(null);
            console.log('response api ', response);
            setUsers(response && response.results ? response.results : []);
        })();
    }, []);

    return (
        <>
            <p>we have {users?.length} users</p>
            {users.map((users) => (
                <p>{users.name}</p>
            ))}
        </>
    );
};

export default MyApi;


// import React, { useEffect, useState } from 'react';
// import { Col, Row } from 'react-bootstrap';
// import { _get } from '../Services/_get';
// //import Service from '../Services'

// export const MyApi = ()=> {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [users, setUsers] = useState<string>();


    //eslint-disable-next-line react-hooks/rules-of-hooks
    
    // useEffect(() => {
    //     (async () => {
    //         /*se non c'è nulla prendi null da domain se 
    //         trovi qualcosa prendi la string dell'url*/
    //         const response = await _get(null);
    //         console.log('response api ', response);
    //         console.log('response users ', users);
    //         users.push(response);
    //         return users;
    //         // setUsers(response.results);
    //     })();
    // }, [users]);

//         return (
//             <>
//             <p>we have {users?.length} users</p>
//             </>
//         );

// };

// export default MyApi;
