import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { _get } from '../Services/_get';
//import Service from '../Services'
import data from "../data.json";
//const myApiJson = "https://jsonplaceholder.typicode.com/users"

const results = data.results;

export const MyApi = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [users, setUsers] = useState<string>();

    //eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        (async () => {
            const response = await _get(null);
            console.log('response api ', response);
            setUsers(await response);
        })();
    }, []);

    return (
        <>
            <p>we have {users?.length} users</p>
            <Row>
                <Col>
                    {/* {
                        data.results.map((results) => {
                            return (
                                <div>
                                    <p>{results.name}</p>
                                </div>
                            );
                        })
                    } */}
                </Col>
            </Row>
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


//     //eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//         (async () => {
//             const response = await _get(null);
//             console.log('response api ', response);
//             setUsers(await response);
//         })();
//     }, []);

//         return (
//             <>
//             <p>we have {users?.length} users</p>
//                 <Row>
//                     <Col>
//                         <h3> List Api Json</h3>
//                         {/* {Object.keys(Service._get).map((item, i)=>(
//                             <li key={i}>
//                                 <span>Key name: {item.name}</span>
//                             </li>
//                         ))} */}
//                     </Col>
//                 </Row>
//             </>
//         );

// };

// export default MyApi;
