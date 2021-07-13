import React from 'react';
import { useSelector } from 'react-redux';

// const Counter = ({value}) => {
//     return(
//         <div>
//             <h1>현재 값</h1>
//             <h1>{value}</h1>
//         </div>
//     )
// };
const Counter = () => {
    const value = useSelector((state)=>state.counter.value);

    return(
        <div>
            <h1>현재 값</h1>
            <h1>{value}</h1>
        </div>
    )
};

export default Counter;